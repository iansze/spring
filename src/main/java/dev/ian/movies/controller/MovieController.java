package dev.ian.movies.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ian.movies.dto.ReviewDto;
import dev.ian.movies.entity.Backdrops;
import dev.ian.movies.entity.Movie;
import dev.ian.movies.entity.Review;
import dev.ian.movies.entity.User;
import dev.ian.movies.service.MovieService;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class MovieController {
    
    private MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/movies")
        public ResponseEntity<List<Movie>> getAllMovies() {
            List<Movie> movies = movieService.findAllMovies();
        return ResponseEntity.ok(movies); 
    }

    @GetMapping("/movie/backdrops/{id}")
    public ResponseEntity<List<Backdrops>> getMoviePoster(@PathVariable int id) {
        List<Backdrops> backdrops = movieService.findMovieBackdrop(id);
        return ResponseEntity.ok(backdrops);
    }

    @GetMapping("/movie/review/{id}")
    public ResponseEntity<?> getReview(@PathVariable int id) {
        try{
            List<ReviewDto> movie = movieService.getAllReviews(id);
            return ResponseEntity.ok(movie);
        }catch(Exception e){
            return ResponseEntity.badRequest().body("Error message: " + e.getMessage());
        }
        
     }


}
