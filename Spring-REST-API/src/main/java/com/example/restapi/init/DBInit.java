package com.example.restapi.init;

import com.example.restapi.controllers.CommentRestController;
import com.example.restapi.controllers.DogRestController;
import com.example.restapi.controllers.UserRestController;
import com.example.restapi.services.CommentService;
import com.example.restapi.services.DogService;
import com.example.restapi.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DBInit implements CommandLineRunner {
    private final UserService userService;
    private final DogService dogService;
    private final CommentService commentService;
    private final DogRestController dogRestController;
    private final UserRestController userRestController;
    private final CommentRestController commentRestController;

    public DBInit(UserService userService, DogService dogService, CommentService commentService, DogRestController dogRestController, UserRestController userRestController, CommentRestController commentRestController) {
        this.userService = userService;

        this.dogService = dogService;
        this.commentService = commentService;
        this.dogRestController = dogRestController;
        this.userRestController = userRestController;
        this.commentRestController = commentRestController;
    }

    @Override
    public void run(String... args) throws Exception {
//        this.userService.seedUsers();
//        this.commentService.seedComments();
//      this.dogService.seedDogs();


    }
}
