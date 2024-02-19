package dev.ian.movies.restapi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ian.movies.dao.MovieDAO;
import dev.ian.movies.entity.Movie;


@RestController
@RequestMapping("/api")
public class Controller {
    
    private final MovieDAO movieDAO;

    @Autowired
    public Controller(MovieDAO movieDAO) {
        this.movieDAO = movieDAO;
    }

    @GetMapping("/movies")
        public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movies = movieDAO.findAll();
        return ResponseEntity.ok(movies); 
    }
}
