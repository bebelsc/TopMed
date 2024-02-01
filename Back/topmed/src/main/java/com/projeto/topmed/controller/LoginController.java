package com.projeto.topmed.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.topmed.model.DadosLogin;
import com.projeto.topmed.model.Usuario;
import com.projeto.topmed.service.LoginService;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    public ResponseEntity<String> cadastrarLogin(@RequestBody String username, String senha, LocalDateTime diaEHoraLogin, String status, Integer numeroTentativas, Usuario usuario) {

        DadosLogin login = new DadosLogin();
        
        login.setUsername(username);
        login.setSenha(senha);
        login.setDiaHoraLogin(diaEHoraLogin);
        login.setStatusLogin(status);
        login.setNumeroTentativas(numeroTentativas);
        login.setUsuario(usuario);

        loginService.adicionarLogin(login);

        return ResponseEntity.ok("Login adicionado.");
    }
    
}
