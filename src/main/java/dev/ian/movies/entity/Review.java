package dev.ian.movies.entity;

import java.util.List;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "review")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "review_id")
public class Review {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int review_id;

    @Column(name = "content")
    private String content;

    @Column(name = "rate")
    private int rate;

    @ManyToMany(mappedBy = "reviews")
    private List<User> users;

    public Review() {
    }

    public Review(int review_id, String content, int rate ) {
        this.review_id = review_id;
        this.content = content;
        this.rate = rate;

    }

    public int getReview_id() {
        return review_id;
    }

    public void setReview_id(int review_id) {
        this.review_id = review_id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public List<User> getUser() {
        return users;
    }

    public void setUser(List<User> users) {
        this.users = users;
    }
}
