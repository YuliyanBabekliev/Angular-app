package com.example.restapi.payload.response;

import com.example.restapi.entities.CommentEntity;
import com.example.restapi.entities.DogEntity;

import java.util.Set;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String username;
    private String email;
    private String gender;
    private Set<DogEntity> dogs;
    private Set<CommentEntity> comments;

    public JwtResponse(String accessToken, Long id, String username, String email, String gender, Set<DogEntity> dogs, Set<CommentEntity> comments) {
        this.token = accessToken;
        this.id = id;
        this.username = username;
        this.email = email;
        this.gender = gender;
        this.dogs = dogs;
        this.comments = comments;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Set<DogEntity> getDogs() {
        return dogs;
    }

    public void setDogs(Set<DogEntity> dogs) {
        this.dogs = dogs;
    }

    public Set<CommentEntity> getComments() {
        return comments;
    }

    public void setComments(Set<CommentEntity> comments) {
        this.comments = comments;
    }
}