package com.projeto.topmed.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.topmed.model.DadosLogin;
import com.projeto.topmed.model.Usuario;
import com.projeto.topmed.repository.LoginRepository;

@Service
public class LoginService {

    private final LoginRepository loginRepository;

    @Autowired
    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public DadosLogin adicionarLogin(DadosLogin login) {
        return loginRepository.save(login);
    }

    public Boolean loginBloqueado(Usuario usuario){
        DadosLogin ultimoLoginFeito = new DadosLogin();

        ultimoLoginFeito= obterUltimoLoginDoUsuario(usuario.getUsername());

        if(ultimoLoginFeito.getNumeroTentativas().equals(3)){
            return true;
        }else{
            return false;
        }

    }

    public DadosLogin obterUltimoLoginDoUsuario(String username) {
        List<DadosLogin> logins = loginRepository.findByUsernameOrderByDiaHoraLoginDesc(username);

        if (!logins.isEmpty()) {
            return logins.get(0);
        }

        return null;
    }
    
}