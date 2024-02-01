package com.projeto.topmed.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.topmed.model.DadosLogin;
import com.projeto.topmed.model.Usuario;
import com.projeto.topmed.service.LoginService;
import com.projeto.topmed.service.UsuarioService;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {

    private final UsuarioService usuarioService;
    private final LoginService loginService;
    private final LoginController loginController;

    private static int MAX_TENTATIVAS = 3;
    private static int MAX_TENTATIVAS_TEMPO_MINUTOS = 20;
    String status;

    @Autowired
    public UsuarioController(UsuarioService usuarioService, LoginService loginService, LoginController loginController) {
        this.usuarioService = usuarioService;
        this.loginService= loginService;
        this.loginController = loginController;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<String> cadastrarUsuario(@RequestBody Usuario usuario) {

        Usuario usuarioNovo = new Usuario();
        
        usuarioNovo.setNomeUsuario(usuario.getNomeUsuario());
        usuarioNovo.setDataNascimento(usuario.getDataNascimento());
        usuarioNovo.setTipoPlano(usuario.getTipoPlano());
        usuarioNovo.setUsername(usuario.getUsername());
        usuarioNovo.setSenha(usuario.getSenha());

        Usuario usuarioCriado = usuarioService.adicionarUsuario(usuarioNovo);

        return ResponseEntity.ok("Usuario adicionado com sucesso. ID: " + usuarioCriado.getId());
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody String username, String senha) {

        int tentativas=0;

        // verifica se os campos foram preenchidos
        if(username.isEmpty() || senha.isEmpty()){
            return ResponseEntity.status(403).body("Preencha os campos corretamente");
        }

        //verifica no bd de qual usuario são os dados
        Usuario usuario = usuarioService.procurarPorUsername(username);

        // Verifica se o usuário está bloqueado
        if (loginService.loginBloqueado(usuario)) {
            return ResponseEntity.status(403).body("Usuário bloqueado devido a múltiplas tentativas incorretas.");
        }

        //Verifica o ultimo login do username
        DadosLogin ultimoLoginFeito = loginService.obterUltimoLoginDoUsuario(username);
        tentativas= ultimoLoginFeito.getNumeroTentativas(); 
        LocalDateTime ultimaTentativaBloqueio = ultimoLoginFeito.getDiaHoraLogin();     

        if (tentativas < MAX_TENTATIVAS) {
            tentativas++;
            status = "Recusado";
            loginController.cadastrarLogin(username, senha, LocalDateTime.now(), status,tentativas, usuario);
        } else {
            // Bloqueia o usuário se o número de tentativas exceder o limite
            if (LocalDateTime.now().minusMinutes(MAX_TENTATIVAS_TEMPO_MINUTOS).isAfter(ultimaTentativaBloqueio)) {
                return ResponseEntity.status(403).body("Usuário bloqueado devido a múltiplas tentativas incorretas.");
            }
        }

         //verifica se a senha e usuario sao compativeis
         Boolean verificacao= usuarioService.verificaDados(username, senha, usuario);

        //se sim, faz o login
        if (verificacao)
        {
            tentativas=0;
            status= "Sucesso";
            loginController.cadastrarLogin(username, senha, LocalDateTime.now(), status,tentativas, usuario);
            return ResponseEntity.ok("Login realizado com sucesso ");
        }

        return ResponseEntity.status(403).body("Login incorreto. Tentativas restantes: " + (MAX_TENTATIVAS - tentativas));
    }
    
}
