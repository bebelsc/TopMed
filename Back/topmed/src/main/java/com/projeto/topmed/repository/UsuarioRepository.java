package com.projeto.topmed.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.topmed.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Usuario findByUsername(String username);
}
