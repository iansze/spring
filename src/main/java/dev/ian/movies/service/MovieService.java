package dev.ian.movies.service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.ian.movies.entity.Backdrops;
import dev.ian.movies.entity.Movie;
import dev.ian.movies.entity.Review;
import dev.ian.movies.entity.User;
import dev.ian.movies.respository.MovieRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.TypedQuery;
import dev.ian.movies.dto.ReviewDto;


@Service
public class MovieService  {
    

    private MovieRepository movieReposity;

    private EntityManager entityManager;

    
    @Autowired
    public MovieService(MovieRepository movieReposity, EntityManager entityManager) {
        this.movieReposity = movieReposity;
        this.entityManager = entityManager;
    }

    public List<Movie> findAllMovies() {
        return movieReposity.findAll();
    }

    public List<Backdrops> findMovieBackdrop(int id) {
        TypedQuery<Backdrops> query = entityManager.createQuery("SELECT b.url FROM Backdrops b WHERE b.movie.id = :id", Backdrops.class);
        query.setParameter("id", id);
        try {
            return query.getResultList();
        } catch (NoResultException e) {
            return null;
        }
    }

    public Optional<Movie> findMovieById(int id) {
        return movieReposity.findById(id);
    }

    
}
