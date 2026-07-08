package com.nellyhoussen.backend.DTO.Inscription;

public record InscriptionGet(
        Long id,
        String identifiant,
        String password,
        String checkPassword
) {
}
