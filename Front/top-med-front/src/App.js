import React, { useState } from 'react';
import topmed_logo from './topmed_logo.png'
import Usuario from './Usuario.png'
import Senha from './Senha.png'
import nextplus_logo from './nextplus-logo.png'
import ondas from './ondas.jpg'
import camera from './camera.png'
import Popup from './Popup';

import './App.css';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');


  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          senha: password,
        }),
      });
  
      if (response.status===200) {
        const data = await response.json();
        console.log('Sucesso:', data);
        // Faça algo com a resposta do backend em caso de sucesso
        setPopupMessage('Login realizado com sucesso');
        setShowPopup(true);
      } else {
        const errorData = await response.json();
        console.error('Erro:', errorData.error);
        // Faça algo em caso de erro
        setPopupMessage(`Erro: ${errorData.error}`);
        setShowPopup(true);
      }
    } catch (error) {
      console.error('Erro:', error);
      setPopupMessage('Erro inesperado');
      setShowPopup(true);
    }
  };  

  return (
      <header className="App-header">

        <div className="modal-container">

          <div className="modal-branco">

            <div className="row">
              <p className="bem-vindo-texto">Bem Vindo,</p>
            </div>
            <div className="row">
              <p className="faca-login-texto">Faça o login para continuar.</p>
            </div>
            <div className="row">
              <label htmlFor="usuario" className="Usuario-label">
                  <img src={Usuario} className="Usuario" alt="Usuario" />
              </label>
              <input type="text" id="usuario" className="Usuario-input"
                  placeholder="Usuário" value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={(e) => e.target.placeholder = ""}
                  onBlur={(e) => e.target.placeholder = "Usuário"}/>
            </div>
            <div className="row">
              <p className="line-2"></p>
            </div>
            <div className="row">
              <label htmlFor="senha" className="Senha-label">
                <img src={Senha} className="Senha" alt="Senha" />
              </label>
              <input type="password" id="senha" className="Senha-input"
                  placeholder="Senha" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={(e) => e.target.placeholder = ""}
                  onBlur={(e) => e.target.placeholder = "Senha"}/>
            </div>
            <div className="row">
              <p className="line-4"></p>
            </div>
            <div className="row">
              <p className="esqueceu-senha-texto" onClick={handleClick}>
                Esqueceu sua senha?
              </p>
            </div>
            <div className="row">
              <button className="Botao_entrar" onClick={handleClick}>
                <p className="entrar-texto">
                  ENTRAR
                </p>
              </button>
            </div>

            <div  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <img src={topmed_logo} className="TopMed-logo" alt="topmed_logo" style={{ gridColumn: '1',marginRight: '10px' }} />
              <img src={nextplus_logo} className="nextplus-logo" alt="nextplus_logo" style={{ gridColumn: '2' }} />
            </div>
            
          </div>
          <div className="modal-verde">
            <div className="row">
              <p className="teste-requisitos-texto">Teste de requisitos</p>
            </div>
            <div className="row">
              <p className="teste-acessos-texto">Teste seus acessos a câmera, microfone e velocidade da internet.</p>
            </div>
            <img src={ondas} className="ondas" alt="ondas" />
            <img src={camera} className="camera" alt="camera" />
            <div className="row">
              <button className="Botao_teste" onClick={handleClick}>
                <p className="realizar-teste-texto">
                  Realizar Teste
                </p>
              </button>
            </div>

            
            
          </div>
        </div>

        {showPopup && <Popup message={popupMessage} onClose={handleClosePopup} />}
      </header>
  );
}

export default App;