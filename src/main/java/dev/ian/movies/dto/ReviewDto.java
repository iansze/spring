package dev.ian.movies.dto;

import java.util.List;

public class ReviewDto {
    private String content;

    private int rate;

    private String username;


    public ReviewDto() {
    }

    public ReviewDto(String content, int rate , String username) {
        this.content = content;
        this.rate = rate;
        this.username =username;
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

    public void setUserNames(String username) {
        this.username = username;
    }


}
