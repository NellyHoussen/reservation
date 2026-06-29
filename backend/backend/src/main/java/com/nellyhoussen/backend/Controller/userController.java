package com.nellyhoussen.backend.Controller;

import com.nellyhoussen.backend.DTO.userGet;
import com.nellyhoussen.backend.DTO.userPost;
import com.nellyhoussen.backend.Service.userService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:5173")

public class userController {

    private final userService service;

    @PostMapping("/register")
    public ResponseEntity<userGet> register(@Valid @RequestBody userPost dto) {
        log.info("POST /api/v1/users/register - identifiant: {}", dto.identifiant());
        userGet response = service.registre(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<userGet> login(@Valid @RequestBody userPost dto) {
        log.info("POST /api/v1/users/login - identifiant: {}", dto.identifiant());
        userGet response = service.login(dto);
        return ResponseEntity.ok(response);
    }
}