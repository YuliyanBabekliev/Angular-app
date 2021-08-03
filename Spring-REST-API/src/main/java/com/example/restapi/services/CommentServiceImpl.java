package com.example.restapi.services;

import com.example.restapi.controllers.UserRestController;
import com.example.restapi.entities.CommentEntity;
import com.example.restapi.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;


    public CommentServiceImpl(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;

    }

    @Autowired

    @Override
    public void seedComments() {
        CommentEntity comment = new CommentEntity();
        comment.setComment("Very beautiful and clean dog!");
        comment.setDateAndTime(LocalDateTime.now());

       // this.commentRepository.saveAndFlush(comment);
    }
}
