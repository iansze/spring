package dev.ian.movies.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ian.movies.dto.LoginRequest;
import dev.ian.movies.dto.ReviewDto;
import dev.ian.movies.dto.UserDto;
import dev.ian.movies.entity.Review;
import dev.ian.movies.entity.User;
import dev.ian.movies.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/auth/signup" ,consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> signup(@RequestBody UserDto userDto) {
        try {

            User savedUser = userService.saveUser(userDto);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error message: " + e.getMessage());
        }
    }

    @PostMapping(value ="/auth/login",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest  ) {
       try{
        User user = userService.findUserByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
        if(user != null){
            return ResponseEntity.ok(user);
        }else{
            return ResponseEntity.badRequest().body("User not found");
        }
        }catch(Exception e){
              return ResponseEntity.badRequest().body("Error message: " + e.getMessage());
    }
    }

    @PutMapping("/auth/update/{id}")
    public ResponseEntity<?> update(@PathVariable int id, @RequestBody UserDto userDto ) {
        try{
         User user = userService.updateUser(id, userDto);
         if(user != null){
             return ResponseEntity.ok(user);
         }else{
             return ResponseEntity.badRequest().body("User not found");
         }
         }catch(Exception e){
               return ResponseEntity.badRequest().body("Error message: " + e.getMessage());
     }
     }

     

}
