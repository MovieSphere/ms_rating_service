package com.upao.infraestructura.ms_rating_service.models;

public class Movie {
    private int id;
    private String name;
    private String image;
    private int rating;

    public Movie() {
    }

    public Movie(int id, String name, String image, int rating) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.rating = rating;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return image;
    }

    public void setEmail(String email) {
        this.image = email;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}

