import topmed_logo from './topmed_logo.png'
import Usuario from './Usuario.png'
import Senha from './Senha.png'
import nextplus_logo from './nextplus-logo.png'
import ondas from './ondas.jpg'
import camera from './camera.png'
import './App.css';

function App() {
  const handleClick = () => {
    alert('Texto clicado!'); // Substitua por qualquer lógica desejada
  };

  return (
    <div className="App">
      <header className="App-header">

        <div className="modal-container">

          <div className="modal-branco">
            <p className="bem-vindo-texto">Bem Vindo,</p>
            <p className="faca-login-texto">Faça o login para continuar.</p>

            
            <div className="line-2">
              <img src={Usuario} className="Usuario" alt="Usuario" />
              <p className="usuario-texto">Usuário</p>
            </div>
            <div className="line-4">
              <img src={Senha} className="Senha" alt="Senha" />
              <p className="senha-texto">Senha</p>
            </div>

            <p className="esqueceu-senha-texto" onClick={handleClick}>
              Esqueceu sua senha?
            </p>

            <img src={topmed_logo} className="TopMed-logo" alt="topmed_logo" />
            <img src={nextplus_logo} className="nextplus-logo" alt="nextplus_logo" />
            
          </div>
          <div className="modal-verde">
            <p className="teste-requisitos-texto">Teste de requisitos</p>
            <p className="teste-acessos-texto">Teste seus acessos a câmera, microfone e velocidade da internet.</p>

            <img src={ondas} className="ondas" alt="ondas" />
            <img src={camera} className="camera" alt="camera" />
            <button className="Botao_teste" onClick={handleClick}>
              <p className="realizar-teste-texto" onClick={handleClick}>
                Realizar Teste
              </p>
            </button>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;