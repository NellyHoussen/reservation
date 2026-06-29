package com.nellyhoussen.backend.Error;

import com.nellyhoussen.backend.Error.AppException;
import org.springframework.http.HttpStatus;

public class RessourceNotFoundException extends AppException {
    public RessourceNotFoundException(String message, Long id) {
        super(id != null
                        ? message + " not found with id " + id
                        : message + " introuvable",
                HttpStatus.NOT_FOUND);
    }
}