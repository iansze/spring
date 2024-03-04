package dev.ian.movies.respository;
import org.springframework.data.jpa.repository.JpaRepository;
import dev.ian.movies.entity.Review;


public interface ReviewRepository extends JpaRepository<Review, Integer>{

}
    