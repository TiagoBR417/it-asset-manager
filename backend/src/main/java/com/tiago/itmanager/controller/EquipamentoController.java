package com.tiago.itmanager.controller;

import com.tiago.itmanager.model.Equipamento;
import com.tiago.itmanager.repository.EquipamentoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipamentos")
@CrossOrigin("*") // Essencial: permite que o seu HTML converse com o Java
public class EquipamentoController {

    private final EquipamentoRepository repository;

    public EquipamentoController(EquipamentoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Equipamento> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Equipamento salvar(@RequestBody Equipamento equipamento) {
        return repository.save(equipamento);
    }
}