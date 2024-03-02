package dev.ian.movies.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.ian.movies.dto.ReviewDto;
import dev.ian.movies.dto.UserDto;
import dev.ian.movies.entity.Review;
import dev.ian.movies.entity.User;
import dev.ian.movies.respository.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.TypedQuery;

@Service
public class UserService {
    
    private UserRepository userRepository;

    private EntityManager entityManager;

    @Autowired
    public UserService(UserRepository userRepository, EntityManager entityManager) {
        this.userRepository = userRepository;
        this.entityManager = entityManager;
    }


    public User saveUser(UserDto userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setUsername(userDto.getUsername());
        return userRepository.save(user);
        
        
    }

    public User findUserByEmailAndPassword(String email, String password) {
       TypedQuery<User> query = entityManager.createQuery("SELECT u FROM User u WHERE u.email = :email AND u.password = :password", User.class);
        query.setParameter("email", email);
        query.setParameter("password", password);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    public Optional<User> findById(int id) {
        return userRepository.findById(id);
    }
    
    public User updateUser(int id , UserDto userDto) {
        User user = userRepository.findById(id).get();
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        return userRepository.save(user);
    }
    
    public String addReview(int id , ReviewDto reviewDto) {
        User user = userRepository.findById(id).get();

        Review review = new Review(); 
        review.setContent(reviewDto.getContent());
        user.setReview(review);
        userRepository.save(user);
        return "Review added successfully";
    }

    public Review getReview(int id) {
        User user = userRepository.findById(id).get();
        return user.getReview().get(0);
    }
}
