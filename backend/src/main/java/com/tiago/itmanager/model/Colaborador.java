package com.tiago.itmanager.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Colaborador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nome;
    private String departamento;
    private String email;
}
