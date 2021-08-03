package com.example.restapi.controllers;

import com.example.restapi.entities.CommentEntity;
import com.example.restapi.entities.UserEntity;
import com.example.restapi.repositories.CommentRepository;
import com.example.restapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class CommentRestController {

    @Autowired
    private CommentRepository commentRepository;

    /**
     * Get all comments list.
     *
     * @return the list
     */
    @GetMapping("/comments")
    public List<CommentEntity> getAllComments() {
        return commentRepository.findAll();
    }

    /**
     * Gets comments by id.
     *
     * @param commentId the user id
     * @return the comments by id
     * @throws //ResourceNotFoundException the resource not found exception
     */
    @GetMapping("/comments/{id}")
    public ResponseEntity<CommentEntity> getCommentById(@PathVariable(value = "id") Long commentId)
            throws Exception {
        CommentEntity comment =
                commentRepository
                        .findById(commentId)
                        .orElseThrow(() -> new Exception("Comment not found on :: " + commentId));
        return ResponseEntity.ok().body(comment);
    }

    /**
     * Create comment comment.
     *
     * @param comment the comemnt
     * @return the comment
     */
    @PostMapping("/comments")
    public CommentEntity createComment(@Valid @RequestBody CommentEntity comment) {
        return commentRepository.save(comment);
    }

    /**
     * Update user response entity.
     *
     * @param commentId the comment id
     * @param commentDetails the comment details
     * @return the response entity
     * @throws //ResourceNotFoundException the resource not found exception
     */
    @PutMapping("/comments/{id}")
    public ResponseEntity<CommentEntity> updateComment(
            @PathVariable(value = "id") Long commentId, @Valid @RequestBody CommentEntity commentDetails)
            throws Exception {

        CommentEntity comment =
                commentRepository
                        .findById(commentId)
                        .orElseThrow(() -> new Exception("Comment not found on :: " + commentId));

        comment.setComment(commentDetails.getComment());
        comment.setDateAndTime(LocalDateTime.now());
//        user.setComments(userDetails.getComments());
//        user.setDogs(userDetails.getDogs());
        final CommentEntity updateComment = commentRepository.save(comment);
        return ResponseEntity.ok(updateComment);
    }

    /**
     * Delete user map.
     *
     * @param commentId the user id
     * @return the map
     * @throws Exception the exception
     */
    @DeleteMapping("/comment/{id}")
    public Map<String, Boolean> deleteComment(@PathVariable(value = "id") Long commentId) throws Exception {
        CommentEntity comment =
                commentRepository
                        .findById(commentId)
                        .orElseThrow(() -> new Exception("Comment not found on :: " + commentId));

        commentRepository.delete(comment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}