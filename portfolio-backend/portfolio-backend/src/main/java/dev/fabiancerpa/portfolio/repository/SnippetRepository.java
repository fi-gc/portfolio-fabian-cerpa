package dev.fabiancerpa.portfolio.repository;

import dev.fabiancerpa.portfolio.model.Snippet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SnippetRepository extends JpaRepository<Snippet, Long> {
    
    // Buscar snippets por tecnología (ignorando mayúsculas/minúsculas)
    List<Snippet> findByTechIgnoreCase(String tech);
    
    // Buscar snippets por descripción que contenga el texto (ignorando mayúsculas/minúsculas)
    List<Snippet> findByDescriptionContainingIgnoreCase(String description);
    
    // Buscar snippets por tecnología y descripción
    @Query("SELECT s FROM Snippet s WHERE LOWER(s.tech) = LOWER(:tech) AND LOWER(s.description) LIKE LOWER(CONCAT('%', :description, '%'))")
    List<Snippet> findByTechAndDescriptionContaining(@Param("tech") String tech, @Param("description") String description);
}
