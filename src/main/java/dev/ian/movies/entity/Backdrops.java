package dev.ian.movies.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "backdrops")
public class Backdrops {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int backdropId;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name = "movie_id")
    @JsonBackReference
    private Movie movie;

    @Column(name = "url")
    private String url;

    public Backdrops() {
    }

    public Backdrops(int backdropId, Movie movie, String url) {
        this.backdropId = backdropId;
        this.movie = movie;
        this.url = url;
    }

    public int getBackdropId() {
        return backdropId;
    }

    public void setBackdropId(int backdropId) {
        this.backdropId = backdropId;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


}
