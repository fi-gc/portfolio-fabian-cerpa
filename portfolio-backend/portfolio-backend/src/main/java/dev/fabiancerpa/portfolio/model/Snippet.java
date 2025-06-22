package dev.fabiancerpa.portfolio.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Snippet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tech;
    private String description;

    @Column(length = 10000)
    private String code;

    private LocalDateTime createdAt;

    public Snippet() {
        this.createdAt = LocalDateTime.now();
    }

    public Snippet(String tech, String description, String code) {
        this.tech = tech;
        this.description = description;
        this.code = code;
        this.createdAt = LocalDateTime.now();
    }

    // Getters y Setters

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTech() { return tech; }
    public void setTech(String tech) { this.tech = tech; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
