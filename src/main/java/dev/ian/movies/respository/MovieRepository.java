 package dev.ian.movies.respository;



import org.springframework.data.jpa.repository.JpaRepository;


import dev.ian.movies.entity.Movie;

public interface MovieRepository extends JpaRepository<Movie, Integer>{



    
}