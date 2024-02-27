package dev.ian.movies.respository;
import org.springframework.data.jpa.repository.JpaRepository;
import dev.ian.movies.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{

    User findByEmailAndPassword(String email, String password);
    
}
