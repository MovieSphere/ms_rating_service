package com.upao.infraestructura.ms_rating_service.controllers;

import com.upao.infraestructura.ms_rating_service.models.Movie;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/movies-rating")
public class MoviesController {
    @GetMapping
    public int getMovieRating() {
        Movie movie = new Movie(1,"Titanic", "https://example.com/titanic.jpg", 1);
        return movie.getRating();
    }
}
