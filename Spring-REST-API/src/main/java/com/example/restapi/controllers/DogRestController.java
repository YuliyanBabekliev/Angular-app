package com.example.restapi.controllers;

import com.example.restapi.entities.CommentEntity;
import com.example.restapi.entities.DogEntity;
import com.example.restapi.entities.UserEntity;
import com.example.restapi.repositories.CommentRepository;
import com.example.restapi.repositories.DogRepository;
import com.example.restapi.repositories.UserRepository;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class DogRestController {

    @Autowired
    private DogRepository dogRepository;

    /**
     * Get all comments list.
     *
     * @return the list
     */
    @GetMapping("/dogs")
    public List<DogEntity> getAllDogs() {
        return dogRepository.findAll();
    }

    /**
     * Gets dogs by id.
     *
     * @param dogId the user id
     * @return the dogs by id
     * @throws //ResourceNotFoundException the resource not found exception
     */
    @GetMapping("/dogs/{id}")
    public ResponseEntity<DogEntity> getDogById(@PathVariable(value = "id") Long dogId)
            throws Exception {
        DogEntity dog =
                dogRepository
                        .findById(dogId)
                        .orElseThrow(() -> new Exception("Dog not found on :: " + dogId));
        return ResponseEntity.ok().body(dog);
    }

    /**
     * Create dog dog.
     *
     * @param dog the dog
     * @return the dog
     */
    @PostMapping("/dogs")
    public DogEntity createDog(@Valid @RequestBody DogEntity dog) {
        return dogRepository.save(dog);
    }

    /**
     * Update dog response entity.
     *
     * @param dogId the dog id
     * @param dogDetails the dog details
     * @return the response entity
     * @throws //ResourceNotFoundException the resource not found exception
     */
    @PutMapping("/dogs/{id}")
    public ResponseEntity<DogEntity> updateDog(
            @PathVariable(value = "id") Long dogId, @Valid @RequestBody DogEntity dogDetails)
            throws Exception {

        DogEntity dog =
                dogRepository
                        .findById(dogId)
                        .orElseThrow(() -> new Exception("Dog not found on :: " + dogId));

        dog.setBreed(dog.getBreed());
        dog.setDescription(dog.getDescription());
        dog.setMaleWeight(dog.getMaleWeight());
        dog.setFemaleWeight(dog.getFemaleWeight());
        dog.setLife(dog.getLife());
        dog.setImgUrl(dog.getImgUrl());

        final DogEntity updateDog = dogRepository.save(dog);
        return ResponseEntity.ok(updateDog);
    }


    /**
     * Delete dog map.
     *
     * @param dogId the user id
     * @return the map
     * @throws Exception the exception
     */
    @DeleteMapping("/dogs/{id}")
    public Map<String, Boolean> deleteDog(@PathVariable(value = "id") Long dogId) throws Exception {
        DogEntity dog =
                dogRepository
                        .findById(dogId)
                        .orElseThrow(() -> new Exception("Dog not found on :: " + dogId));

        dogRepository.delete(dog);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}