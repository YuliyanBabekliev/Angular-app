package com.example.restapi.controllers;

import com.example.restapi.entities.DogEntity;
import com.example.restapi.entities.UserEntity;
import com.example.restapi.payload.request.LoginRequest;
import com.example.restapi.payload.request.SignupRequest;
import com.example.restapi.payload.response.JwtResponse;
import com.example.restapi.payload.response.MessageResponse;
import com.example.restapi.repositories.DogRepository;
import com.example.restapi.repositories.UserRepository;
import com.example.restapi.security.jwt.JwtUtils;
import com.example.restapi.security.services.UserDetailsImpl;
import com.example.restapi.services.DogService;
import com.example.restapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.security.Principal;
import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/api/v1")
public class UserRestController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private DogRepository dogRepository;


    /**
     * Get all users list.
     *
     * @return the list
     */
    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    /**
     * Gets users by id.
     *
     * @param userId the user id
     * @return the users by id
     * @throws //ResourceNotFoundException the resource not found exception
     */
    @GetMapping("/users/{id}")
    public ResponseEntity<UserEntity> getUsersById(@PathVariable(value = "id") Long userId)
            throws Exception {
        UserEntity user =
                userRepository
                        .findById(userId)
                        .orElseThrow(() -> new Exception("User not found on :: " + userId));
        return ResponseEntity.ok().body(user);
    }

    /**
     * Create user user.
     *
     * @param user the user
     * @return the user
     */
    @PostMapping("/users")
    public UserEntity createUser(@Valid @RequestBody UserEntity user) {
        return userRepository.save(user);
    }

    /**
     * Update user response entity.
     *
     * @param userId      the user id
    // * @param userDetails the user details
     * @return the response entity
     * @throws //ResourceNotFoundException the resource not found exception
     */
    @PutMapping("/users/{id}")
    public ResponseEntity<UserEntity> updateUser(
            @PathVariable(value = "id") Long userId, @Valid @RequestBody int id)
            throws Exception {

        UserEntity user =
                userRepository
                        .findById(userId)
                        .orElseThrow(() -> new Exception("User not found on :: " + userId));

        Long idInLong = Long.parseLong(String.valueOf(id));
        DogEntity dog =
                dogRepository
                .findById(idInLong)
                .orElseThrow(() -> new Exception("Dog not found on :: " + id));

        user.setFavouriteDogs(Set.of(dog));
        final UserEntity updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }



    /**
     * Delete user map.
     *
     * @param userId the user id
     * @return the map
     * @throws Exception the exception
     */
    @DeleteMapping("/user/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId) throws Exception {
        UserEntity user =
                userRepository
                        .findById(userId)
                        .orElseThrow(() -> new Exception("User not found on :: " + userId));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                userDetails.getGender(),
                userDetails.getDogs(),
                userDetails.getComments()));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        UserEntity user = new UserEntity(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                passwordEncoder.encode(signUpRequest.getPassword()),
                        signUpRequest.getGender(), Set.of(), Set.of());

        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}
