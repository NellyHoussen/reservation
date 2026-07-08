package com.nellyhoussen.backend.DTO.Inscription;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record InscriptionPost(
        @NotBlank(message = "veuillez saisiz l'identifiant")
        String identifiant,
        @Size(min = 8)
        String password,
        @Size(min = 8)
        String checkPassword
) {
}
