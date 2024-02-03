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
      <header className="App-header">

        <div className="modal-container">

          <div className="modal-branco">

            <div class="row">
              <p className="bem-vindo-texto">Bem Vindo,</p>
            </div>
            <div class="row">
              <p className="faca-login-texto">Faça o login para continuar.</p>
            </div>
            <div class="row">
                <img src={Usuario} className="Usuario" alt="Usuario" />
                <p className="usuario-texto">Usuário</p>
            </div>
            <div class="row">
              <p className="line-2"></p>
            </div>
            <div class="row">
              <img src={Senha} className="Senha" alt="Senha" />
              <p className="senha-texto">Senha</p>
            </div>
            <div class="row">
              <p className="line-4"></p>
            </div>
            <div class="row">
              <p className="esqueceu-senha-texto" onClick={handleClick}>
                Esqueceu sua senha?
              </p>
            </div>
            <div class="row">
              <button className="Botao_entrar" onClick={handleClick}>
                <p className="entrar-texto" onClick={handleClick}>
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
            <div class="row">
              <p className="teste-requisitos-texto">Teste de requisitos</p>
            </div>
            <div class="row">
              <p className="teste-acessos-texto">Teste seus acessos a câmera, microfone e velocidade da internet.</p>
            </div>
            <img src={ondas} className="ondas" alt="ondas" />
            <img src={camera} className="camera" alt="camera" />
            <div class="row">
              <button className="Botao_teste" onClick={handleClick}>
                <p className="realizar-teste-texto" onClick={handleClick}>
                  Realizar Teste
                </p>
              </button>
            </div>

            
            
          </div>
        </div>

      </header>
  );
}

export default App;