package dev.ian.movies.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.ian.movies.dto.ReviewDto;
import dev.ian.movies.entity.Review;
import dev.ian.movies.entity.User;
import dev.ian.movies.respository.MovieRepository;
import dev.ian.movies.respository.ReviewRepository;
import dev.ian.movies.respository.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.TypedQuery;

@Service
public class ReviewService {

    private ReviewRepository reviewRepository;

    private UserRepository userRepository;

    private MovieRepository movieRepository;
    
    private EntityManager entityManager;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository, EntityManager entityManager, UserRepository userRepository, MovieRepository movieRepository) {
        this.reviewRepository = reviewRepository;
        this.entityManager = entityManager;
        this.userRepository = userRepository;
        this.movieRepository = movieRepository;
    }

    public List<ReviewDto> getAllReviews (int id){
        TypedQuery<Review> query = entityManager.createQuery(
        "SELECT r FROM Review r JOIN r.movie m WHERE m.id = :id", Review.class);
        query.setParameter("id", id);
        try {
            List<Review> reviews = query.getResultList();
            List<ReviewDto> reviewDTOs = new ArrayList<>();
            for (Review review : reviews) {
                String username = review.getUser().getUsername();
                int user_id = review.getUser().getUser_id();
                ReviewDto dto = new ReviewDto(review.getContent(), review.getRate(),username,user_id,review.getReview_id() );
                reviewDTOs.add(dto);
            }
            return reviewDTOs;
        } catch (NoResultException e) {
            return null;
        }

    }

     public Review addReview(int movieId , ReviewDto reviewDto) {
        User user = userRepository.findById(reviewDto.getUser_id()).get();
        if (user != null) {
            Review review = new Review(); 
            review.setContent(reviewDto.getContent());
            review.setRate(reviewDto.getRate());
            review.setMovie(movieRepository.findById(movieId).get());
            review.setUser(user);
            
            return reviewRepository.save(review);
        }
        return null;
        
    }

    public Review getReview(int id) {
        User user = userRepository.findById(id).get();
        return user.getReview().get(0);
    }

    public Review updateReview(int id , ReviewDto reviewDto) {
        Review review = reviewRepository.findById(id).get();
        review.setContent(reviewDto.getContent());
        review.setRate(reviewDto.getRate());
        return reviewRepository.save(review);
    }

}
