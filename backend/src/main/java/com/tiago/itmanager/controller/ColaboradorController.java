package com.tiago.itmanager.controller;

import com.tiago.itmanager.model.Colaborador;
import com.tiago.itmanager.repository.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/colaboradores")
@CrossOrigin(origins = "*") // Permite que o seu Frontend acesse a API sem erros de CORS
public class ColaboradorController {

    @Autowired
    private ColaboradorRepository repository;

    // Rota para listar todos os colaboradores (será usada no Select do formulário)
    @GetMapping
    public List<Colaborador> listarTodos() {
        return repository.findAll();
    }

    // Rota para cadastrar um novo colaborador
    @PostMapping
    public Colaborador salvar(@RequestBody Colaborador colaborador) {
        return repository.save(colaborador);
    }
}