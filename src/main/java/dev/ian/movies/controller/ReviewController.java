package dev.ian.movies.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ian.movies.dto.ReviewDto;
import dev.ian.movies.entity.Review;
import dev.ian.movies.entity.User;
import dev.ian.movies.service.ReviewService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class ReviewController {

    private ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }
    
     @GetMapping("/review/movie/{id}")
    public ResponseEntity<?> getAllReview(@PathVariable int id) {
        try{
            List<ReviewDto> movie = reviewService.getAllReviews(id);
            return ResponseEntity.ok(movie);
        }catch(Exception e){
            return ResponseEntity.badRequest().body("Error message: " + e.getMessage());
        }
        
     }

     @PostMapping("/review/add/{id}")
     public ResponseEntity<?> addReview(@PathVariable int id , @RequestBody ReviewDto reviewDto) {
        try{
            System.out.println(id);
            Review review = reviewService.addReview(id, reviewDto);
            System.out.println(review);
            return ResponseEntity.ok(review);
        }catch(Exception e){
            return ResponseEntity.badRequest().body("Error message: " + e.getMessage());
        }
        
     }

    @PutMapping("/review/update/{id}")
    public ResponseEntity<?> updateReview(@PathVariable int id , @RequestBody ReviewDto reviewDto) {
        try{
            Review review = reviewService.updateReview(id, reviewDto);
            return ResponseEntity.ok(review);
        }catch(Exception e){
            return ResponseEntity.badRequest().body("Error message: " + e.getMessage());
        }
        
     }
}
