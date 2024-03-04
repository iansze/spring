package dev.ian.movies.dto;

import java.util.List;

public class ReviewDto {
    private String content;

    private int rate;

    private String username;

    private int user_id;

    private int movie_id;


    public ReviewDto() {
    }



    public ReviewDto(String content, int rate , String username , int user_id, int movie_id) {
        this.content = content;
        this.rate = rate;
        this.username =username;
        this.user_id = user_id;
        this.movie_id = movie_id;
    }


    public String getContent() {
        return content;
    }

    public void setCeview(String content) {
        this.content = content;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }


    public String getUsername() {
        return username;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(int movie_id) {
        this.movie_id = movie_id;
    }


}
