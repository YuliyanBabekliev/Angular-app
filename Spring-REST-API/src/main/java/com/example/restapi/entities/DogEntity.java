package com.example.restapi.entities;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;

import javax.persistence.*;
import java.awt.*;
import java.util.Set;

@Entity
@Table(name = "dogs")
public class DogEntity extends BaseEntity{
    private String breed;
    private String description;
    private String maleWeight;
    private String femaleWeight;
    private String life;
    private String imgUrl;
    private Set<CommentEntity> comments;
    private String username;

    public DogEntity() {
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    @Column(name = "description", columnDefinition = "TEXT")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMaleWeight() {
        return maleWeight;
    }

    @Column(name = "male_weight")
    public void setMaleWeight(String maleWeight) {
        this.maleWeight = maleWeight;
    }

    public String getFemaleWeight() {
        return femaleWeight;
    }

    @Column(name = "female_weight")
    public void setFemaleWeight(String femaleWeight) {
        this.femaleWeight = femaleWeight;
    }

    public String getLife() {
        return life;
    }

    @Column(name = "img_url", columnDefinition = "TEXT")
    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public void setLife(String life) {
        this.life = life;
    }

    @OneToMany(fetch = FetchType.EAGER)
    public Set<CommentEntity> getComments() {
        return comments;
    }

    public void setComments(Set<CommentEntity> comments) {
        this.comments = comments;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
