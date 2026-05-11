package com.tiago.itmanager.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Equipamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // O ID deve ser o primeiro e ter as anotações de chave primária

    private String nome;
    private String tipo;
    private String numeroSerie;
    private String status;

    @ManyToOne 
    @JoinColumn(name = "colaborador_id")
    private Colaborador colaborador; // O relacionamento fica aqui embaixo, sem o @Id
}