package com.example.restapi.entities;

import javax.persistence.*;

@MappedSuperclass
public class BaseEntity {
    private Long id;

    public BaseEntity() {
    }

    @Id
    @Column(name = "id", unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
