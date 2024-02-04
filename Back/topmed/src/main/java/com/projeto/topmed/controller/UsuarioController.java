package com.projeto.topmed.controller;

import java.time.LocalDateTime;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.projeto.topmed.model.DadosLogin;
import com.projeto.topmed.model.Usuario;
import com.projeto.topmed.service.LoginService;
import com.projeto.topmed.service.UsuarioService;

@RestController
@RequestMapping("/api/usuario")
@CrossOrigin(origins = "http://localhost:3000")
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
    public ResponseEntity<String> login(@RequestBody Map<String, String> loginRequest) {
        String username = loginRequest.get("username");
        String senha = loginRequest.get("senha");
        ObjectMapper objectMapper = new ObjectMapper();

        int tentativas=0;

        // verifica se os campos foram preenchidos
        if (username == null || senha == null) {
            JsonNode errorResponse = objectMapper.createObjectNode().put("error", "Preencha os campos corretamente");

            return ResponseEntity.status(403).body(errorResponse.toString());
        }
        

        //verifica no bd de qual usuario são os dados
        Usuario usuario = usuarioService.procurarPorUsername(username);

        // Verifica se o usuário está bloqueado
        if (loginService.loginBloqueado(usuario)) {
            JsonNode errorResponse = objectMapper.createObjectNode().put("error", "Usuário bloqueado devido a múltiplas tentativas incorretas.");

            return ResponseEntity.status(403).body(errorResponse.toString());
        }

        //Verifica o ultimo login do username
        DadosLogin ultimoLoginFeito = loginService.obterUltimoLoginDoUsuario(username);
        tentativas= ultimoLoginFeito.getNumeroTentativas(); 
        LocalDateTime ultimaTentativaBloqueio = ultimoLoginFeito.getDiaHoraLogin();  
         //verifica se a senha e usuario sao compativeis
         Boolean verificacao= usuarioService.verificaDados(username, senha, usuario);

        //se sim, faz o login
        if (verificacao)
        {
            tentativas=0;
            status= "Sucesso";
            loginController.cadastrarLogin(username, senha, LocalDateTime.now(), status,tentativas, usuario);

            JsonNode successResponse = objectMapper.createObjectNode().put("success", "Login realizado com sucesso");

            return ResponseEntity.status(200).body(successResponse.toString());
        }   

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

        JsonNode errorResponse = objectMapper.createObjectNode().put("error", "Login incorreto. Tentativas restantes: ");

        return ResponseEntity.status(403).body(errorResponse.toString());
    }
    
}
