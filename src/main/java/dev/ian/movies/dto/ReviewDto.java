package dev.ian.movies.dto;

public class ReviewDto {
    private String content;

    private int rate;

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
}
