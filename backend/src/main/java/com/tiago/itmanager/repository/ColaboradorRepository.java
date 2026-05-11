package com.tiago.itmanager.repository;

import com.tiago.itmanager.model.Colaborador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColaboradorRepository extends JpaRepository<Colaborador, Long> {
    // Aqui o Spring Data JPA já cria automaticamente os métodos de Salvar, Listar e Deletar
}