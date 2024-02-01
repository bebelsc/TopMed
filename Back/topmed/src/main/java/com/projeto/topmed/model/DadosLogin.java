package com.projeto.topmed.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;



@Entity 
@Table(name = "dados_login")
public class DadosLogin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "iddados_login")
    private Long id;

    @Column(name = "username", length=100)
    @NotNull(message = "Campo Obrigatório")
    private String username;

    @Column(name = "senha", length=20)
    @NotNull(message = "Campo Obrigatório")
    private String senha;

    @Column(name = "dia_hora_login")
    @NotNull(message = "Campo Obrigatório")
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime diaHoraLogin;

    @Column(name = "status_login", length=10)
    @NotNull(message = "Campo Obrigatório")
    private String statusLogin;

    @ManyToOne
    @JoinColumn(name = "idusuario")
    private Usuario usuario;

    @Column(name = "numero_tentativas")
    private Integer numeroTentativas;

    public Integer getNumeroTentativas() {
        return numeroTentativas;
    }

    public void setNumeroTentativas(Integer numeroTentativas) {
        this.numeroTentativas = numeroTentativas;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public LocalDateTime getDiaHoraLogin() {
        return diaHoraLogin;
    }

    public void setDiaHoraLogin(LocalDateTime diaHoraLogin) {
        this.diaHoraLogin = diaHoraLogin;
    }

    public String getStatusLogin() {
        return statusLogin;
    }

    public void setStatusLogin(String statusLogin) {
        this.statusLogin = statusLogin;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

}
