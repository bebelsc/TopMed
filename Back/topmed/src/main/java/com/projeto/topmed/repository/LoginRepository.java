package com.projeto.topmed.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.topmed.model.DadosLogin;

public interface LoginRepository extends JpaRepository<DadosLogin, Long> {
    List<DadosLogin> findByUsernameOrderByDiaHoraLoginDesc(String username);
}
