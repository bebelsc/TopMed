package com.projeto.topmed.controller;

import com.projeto.topmed.model.DadosLogin;
import com.projeto.topmed.model.Usuario;
import com.projeto.topmed.service.LoginService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class LoginControllerTest {

    @Mock
    private LoginService loginService;

    @InjectMocks
    private LoginController loginController;

    @Test
    void cadastrarLogin_Success() {
        Usuario usuario = new Usuario();
        usuario.setUsername("testuser");

        ResponseEntity<String> responseEntity = loginController.cadastrarLogin("testuser", "password", LocalDateTime.now(), "Sucesso", 0, usuario);

        assertEquals(200, responseEntity.getStatusCodeValue());
        assertEquals("Login adicionado.", responseEntity.getBody());
    }

    @Test
    void cadastrarLogin_Failure() {
        Usuario usuario = new Usuario();
        usuario.setUsername("testuser");

        // Simulando uma exceção ao adicionar o login
        Mockito.doThrow(new RuntimeException("Erro ao adicionar login")).when(loginService).adicionarLogin(Mockito.any(DadosLogin.class));

        ResponseEntity<String> responseEntity = loginController.cadastrarLogin("testuser", "password", LocalDateTime.now(), "Erro", 3, usuario);

        assertEquals(500, responseEntity.getStatusCodeValue());
        assertEquals("Erro ao adicionar login", responseEntity.getBody());
    }
}

