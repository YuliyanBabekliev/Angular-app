package com.example.restapi.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
public class UserEntity extends BaseEntity {
    private String username;
    private String email;
    private String password;
    private String gender;
    private Set<DogEntity> dogs;
    private Set<CommentEntity> comments;

    public UserEntity() {
    }

    public UserEntity(String username, String email, String password, String gender, Set<DogEntity> dogs, Set<CommentEntity> comments) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.dogs = dogs;
        this.comments = comments;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @OneToMany(fetch = FetchType.EAGER)
    public Set<DogEntity> getDogs() {
        return dogs;
    }

    public void setDogs(Set<DogEntity> dogs) {
        this.dogs = dogs;
    }

    @OneToMany(fetch = FetchType.EAGER)
    public Set<CommentEntity> getComments() {
        return comments;
    }

    public void setComments(Set<CommentEntity> comments) {
        this.comments = comments;
    }
}
