import topmed_logo from './topmed_logo.png'
import nextplus_logo from './nextplus-logo.png'
import vermelho from './vermelho.png'
import verde from './verde.png'
import imagem from './imagem.png'
import camera from './camera.png'
import './Tela4.css';

function Tela4() {
  const handleClick = () => {
    alert('Texto clicado!'); // Substitua por qualquer lógica desejada
  };

  return (
    <div className="Tela4">
      <header className="Tela4-header">

        <div className="modal-container">
          <div className="modal-branco">
            <p className="teste-requisitos-texto">Teste de requisitos técnicos</p>
            

            <div className="retangulo-vermelho">
              <img src={vermelho} className="vermelho" alt="vermelho" />
              <p className="texto-vermelho">Câmera não encontrada.</p>
            </div>
            <div className="retangulo-vermelho2">
              <img src={vermelho} className="vermelho" alt="vermelho" />
              <p className="texto-vermelho">Acesso a câmera bloqueado.</p>
            </div>
            <div className="retangulo-verde">
              <img src={verde} className="verde" alt="verde" />
              <p className="texto-verde">Microfone disponível.</p>
            </div>
            <div className="retangulo-verde">
              <img src={verde} className="verde" alt="verde" />
              <p className="texto-verde">Acesso ao microfone disponível.</p>
            </div>
            <div className="retangulo-vermelho">
              <img src={vermelho} className="vermelho" alt="vermelho" />
              <p className="texto-vermelho">Navegador não compatível - Favor utilizar o Google Chrome</p>
            </div>
            <div className="retangulo-verde">
              <img src={verde} className="verde" alt="verde" />
              <p className="texto-verde">Velocidade da internet suficiente.</p>
            </div>


            <img src={topmed_logo} className="TopMed-logo" alt="topmed_logo" />
            <img src={nextplus_logo} className="nextplus-logo" alt="nextplus_logo" />
          </div>
          <div className="modal-verde">

            <img src={camera} className="camera" alt="camera" />
            <p className="camera-texto">Câmera</p>


            <img src={imagem} className="imagem" alt="imagem" />
            
            <button className="botao-concluido" onClick={handleClick}>
              <p className="botao-texto" onClick={handleClick}>
                Concluido
              </p>
            </button>
          </div>
        </div>

      </header>
    </div>
  );
}

export default Tela4;