package com.example.restapi.repositories;

import com.example.restapi.entities.CommentEntity;
import com.example.restapi.entities.DogEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DogRepository extends JpaRepository<DogEntity, Long> {
}
