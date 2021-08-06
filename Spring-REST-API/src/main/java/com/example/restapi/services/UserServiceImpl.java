package com.example.restapi.services;

import com.example.restapi.entities.UserEntity;
import com.example.restapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void seedUsers() {
        UserEntity user = new UserEntity();
        user.setUsername("Admin");
        user.setEmail("admin@abv.bg");
        user.setPassword("123");
        user.setGender("male");
//        user.setDogs(Set.of());
//        user.setComments(Set.of());

        this.userRepository.saveAndFlush(user);
    }
}
