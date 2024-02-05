package com.projeto.topmed.controller;

import com.projeto.topmed.model.Usuario;
import com.projeto.topmed.service.LoginService;
import com.projeto.topmed.service.UsuarioService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;



import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;


@SpringBootTest
class UsuarioControllerTest {

    @Mock
    private UsuarioService usuarioService;

    @Mock
    private LoginService loginService;

    @Mock
    private LoginController loginController;

    @InjectMocks
    private UsuarioController usuarioController;

    @Test
    void cadastrarUsuario_Success() {
        Usuario usuario = new Usuario();
        usuario.setUsername("testuser");

        Mockito.when(usuarioService.adicionarUsuario(Mockito.any(Usuario.class))).thenReturn(usuario);

        ResponseEntity<String> responseEntity = usuarioController.cadastrarUsuario(usuario);

        assertEquals(200, responseEntity.getStatusCodeValue());
        assertTrue(responseEntity.getBody().contains("Usuario adicionado com sucesso"));
    }

    @Test
    void cadastrarUsuario_Failure() {
        Usuario usuario = new Usuario();
        usuario.setUsername("testuser");

        Mockito.when(usuarioService.adicionarUsuario(Mockito.any(Usuario.class))).thenThrow(new RuntimeException("Erro ao cadastrar usuário"));

        ResponseEntity<String> responseEntity = usuarioController.cadastrarUsuario(usuario);

        assertEquals(400, responseEntity.getStatusCodeValue());
        assertTrue(responseEntity.getBody().contains("Erro ao cadastrar usuário"));
    }

    @Test
    void login_Success() {
        Map<String, String> loginRequest = new HashMap<>();
        loginRequest.put("username", "testuser");
        loginRequest.put("senha", "password");

        Usuario usuario = new Usuario();
        usuario.setUsername("testuser");

        Mockito.when(usuarioService.procurarPorUsername(Mockito.anyString())).thenReturn(usuario);
        Mockito.when(usuarioService.verificaDados(Mockito.anyString(), Mockito.anyString(), Mockito.any(Usuario.class))).thenReturn(true);

        ResponseEntity<String> responseEntity = usuarioController.login(loginRequest);

        assertEquals(200, responseEntity.getStatusCodeValue());
        assertTrue(responseEntity.getBody().contains("Login realizado com sucesso"));
    }

    @Test
    void login_UserBlocked() {
        Map<String, String> loginRequest = new HashMap<>();
        loginRequest.put("username", "testuser");
        loginRequest.put("senha", "wrongpassword");

        Usuario usuario = new Usuario();
        usuario.setUsername("testuser");

        Mockito.when(usuarioService.procurarPorUsername(Mockito.anyString())).thenReturn(usuario);
        Mockito.when(usuarioService.verificaDados(Mockito.anyString(), Mockito.anyString(), Mockito.any(Usuario.class))).thenReturn(false);
        Mockito.when(loginService.loginBloqueado(Mockito.any(Usuario.class))).thenReturn(true);

        ResponseEntity<String> responseEntity = usuarioController.login(loginRequest);

        assertEquals(403, responseEntity.getStatusCodeValue());
        assertTrue(responseEntity.getBody().contains("Usuário bloqueado devido a múltiplas tentativas incorretas."));
    }

}

