package com.nellyhoussen.backend.Service;

import com.nellyhoussen.backend.DTO.userGet;
import com.nellyhoussen.backend.DTO.userPost;
import com.nellyhoussen.backend.Entity.user;
import com.nellyhoussen.backend.Error.ConflitException;
import com.nellyhoussen.backend.Error.RessourceNotFoundException;
import com.nellyhoussen.backend.Error.BusinessRuleException;
import com.nellyhoussen.backend.Repository.userRepository;
import com.nellyhoussen.backend.mapStruct.userMap;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


@Service
@Slf4j
public class userService {

    private final userRepository repository;
    private final userMap mapper;
    public userService(userRepository repository,userMap mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Transactional
    public userGet registre(userPost dto) {
        if (repository.existsByIdentifiant(dto.identifiant())) {
            log.warn("Identifiant déjà utilisé : {}", dto.identifiant());
            throw new ConflitException("Identifiant déjà utilisé");
        }

        user entity = mapper.toEntity(dto);
        user saved = repository.save(entity);

        log.info("Utilisateur enregistré avec succès : {}", saved.getIdentifiant());
        return mapper.toDto(saved);
    }

    public userGet login(userPost dto) {
        user found = repository.findByIdentifiant(dto.identifiant())
                .orElseThrow(() -> {
                    log.warn("Identifiant introuvable : {}", dto.identifiant());
                    return new RessourceNotFoundException("User", null);
                });

        if (!dto.password().equals(found.getPassword())) {
            log.warn("Mot de passe incorrect pour : {}", dto.identifiant());
            throw new BusinessRuleException("Mot de passe incorrect");
        }

        log.info("Connexion réussie : {}", found.getIdentifiant());
        return mapper.toDto(found);
    }
}