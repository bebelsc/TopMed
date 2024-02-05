package com.projeto.topmed.service;

import com.projeto.topmed.model.Usuario;
import com.projeto.topmed.repository.UsuarioRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;

@SpringBootTest
class UsuarioServiceTest {

    @Mock
    private UsuarioRepository usuarioRepository;

    @InjectMocks
    private UsuarioService usuarioService;

    @Test
    void adicionarUsuario_Sucesso() {
        Usuario usuario = new Usuario();
        usuario.setUsername("usuario");

        Mockito.when(usuarioRepository.save(any(Usuario.class))).thenReturn(usuario);

        Usuario usuarioCriado = usuarioService.adicionarUsuario(usuario);

        assertNotNull(usuarioCriado);
        assertEquals("usuario", usuarioCriado.getUsername());
    }

    @Test
    void procurarPorUsername_Sucesso() {
        Usuario usuario = new Usuario();
        usuario.setUsername("usuario");

        Mockito.when(usuarioRepository.findByUsername("usuario")).thenReturn(usuario);

        Usuario usuarioEncontrado = usuarioService.procurarPorUsername("usuario");

        assertNotNull(usuarioEncontrado);
        assertEquals("usuario", usuarioEncontrado.getUsername());
    }

    @Test
    void verificaDados_Sucesso() {
        Usuario usuario = new Usuario();
        usuario.setUsername("usuario");
        usuario.setSenha("senha");

        assertTrue(usuarioService.verificaDados("usuario", "senha", usuario));
    }

    @Test
    void verificaDados_Erro_Username() {
        Usuario usuario = new Usuario();
        usuario.setUsername("usuario");
        usuario.setSenha("senha");

        assertFalse(usuarioService.verificaDados("usuarioerrado", "senhaerrada", usuario));
    }

    @Test
    void verificaDados_Erro_Senha() {
        Usuario usuario = new Usuario();
        usuario.setUsername("usuario");
        usuario.setSenha("senha");

        assertFalse(usuarioService.verificaDados("usuario", "senhaerrada", usuario));
    }
}

