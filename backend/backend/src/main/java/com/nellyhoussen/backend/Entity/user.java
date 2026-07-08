package com.nellyhoussen.backend.Entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "user")
@Builder
public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(unique = true, nullable = false)
    String identifiant;
    @Column(nullable = false)
    String password;
    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @Builder.Default
    private List<Car> cars = new ArrayList<>();

}
