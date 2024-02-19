 package dev.ian.movies.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.ian.movies.entity.Movie;

public interface MovieDAO extends JpaRepository<Movie, Integer>{

    
}