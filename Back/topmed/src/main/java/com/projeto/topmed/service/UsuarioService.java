package com.projeto.topmed.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.topmed.model.Usuario;
import com.projeto.topmed.repository.UsuarioRepository;

@Service
public class UsuarioService {
    
    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public Usuario adicionarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario procurarPorUsername(String username){
        return usuarioRepository.findByUsername(username);
    }

    public boolean verificaDados(String username, String senha, Usuario usuario){
        
        if(username.equals(usuario.getUsername())){
            if(senha.equals(usuario.getSenha())){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
}
