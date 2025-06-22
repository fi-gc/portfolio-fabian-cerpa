package dev.fabiancerpa.portfolio.controller;

import dev.fabiancerpa.portfolio.model.Snippet;
import dev.fabiancerpa.portfolio.repository.SnippetRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/snippets")
public class SnippetController {

    private final SnippetRepository repository;

    public SnippetController(SnippetRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Snippet> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Snippet getById(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Snippet no encontrado"));
    }

    @PostMapping
    public Snippet create(@RequestBody Snippet snippet) {
        return repository.save(snippet);
    }

    @PostMapping("/batch")
    public ResponseEntity<Map<String, Object>> createBatch(@RequestBody List<Snippet> snippets) {
        try {
            List<Snippet> savedSnippets = repository.saveAll(snippets);
            return ResponseEntity.ok(Map.of(
                "message", "Snippets creados exitosamente",
                "count", savedSnippets.size(),
                "snippets", savedSnippets
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of(
                "error", "Error al crear los snippets: " + e.getMessage()
            ));
        }
    }

    @GetMapping("/tech/{tech}")
    public List<Snippet> getByTech(@PathVariable String tech) {
        return repository.findByTechIgnoreCase(tech);
    }

    @GetMapping("/search")
    public List<Snippet> searchByDescription(@RequestParam String query) {
        return repository.findByDescriptionContainingIgnoreCase(query);
    }

    @PutMapping("/{id}")
    public Snippet update(@PathVariable Long id, @RequestBody Snippet updated) {
        Snippet existing = repository.findById(id).orElseThrow(() -> new RuntimeException("Snippet no encontrado"));
        existing.setTech(updated.getTech());
        existing.setDescription(updated.getDescription());
        existing.setCode(updated.getCode());
        return repository.save(existing);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @DeleteMapping("/batch")
    public ResponseEntity<Map<String, Object>> deleteBatch(@RequestBody List<Long> ids) {
        try {
            repository.deleteAllById(ids);
            return ResponseEntity.ok(Map.of(
                "message", "Snippets eliminados exitosamente",
                "count", ids.size()
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of(
                "error", "Error al eliminar los snippets: " + e.getMessage()
            ));
        }
    }
}
