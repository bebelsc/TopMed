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
      <header className="Tela4-header">

        <div className="modal-container">
          <div className="modal-branco">

            <div class="row">
              <p className="teste-requisitos-texto">Teste de requisitos técnicos</p>
            </div>
            <div class="row">
              <div className="retangulo-vermelho">
                <img src={vermelho} className="icone-vermelho" alt="vermelho" />
                <p className="texto-vermelho">Câmera não encontrada.</p>
              </div>
            </div>
            <div class="row">
              <div className="retangulo-vermelho2">
                <img src={vermelho} className="icone-vermelho" alt="vermelho" />
                <p className="texto-vermelho">Acesso a câmera bloqueado.</p>
              </div>
            </div>
            <div class="row">
              <div className="retangulo-verde">
                <img src={verde} className="icone-verde" alt="verde" />
                <p className="texto-verde">Microfone disponível.</p>
              </div>
            </div>
            <div class="row">
              <div className="retangulo-verde2">
                <img src={verde} className="icone-verde" alt="verde" />
                <p className="texto-verde">Acesso ao microfone disponível.</p>
              </div>
            </div>
            <div class="row">
              <div className="retangulo-vermelho3">
                <img src={vermelho} className="icone-vermelho" alt="vermelho" />
                <p className="texto-vermelho">Navegador não compatível - Favor utilizar o Google Chrome</p>
              </div>
            </div>
            <div class="row">
              <div className="retangulo-verde3">
                <img src={verde} className="icone-verde" alt="verde" />
                <p className="texto-verde">Velocidade da internet suficiente.</p>
              </div>
            </div>
            
            <div  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <img src={topmed_logo} className="TopMed-logo" alt="topmed_logo" style={{ gridColumn: '1',marginRight: '10px' }} />
              <img src={nextplus_logo} className="nextplus-logo" alt="nextplus_logo" style={{ gridColumn: '2' }} />
            </div>
          </div>
          <div className="modal-verde">

            <div class="row">
              <img src={camera} className="camera" alt="camera" />
              <p className="camera-texto">Câmera</p>
            </div>
            <div class="row">
              <img src={imagem} className="imagem" alt="imagem" />
            </div>
            <div class="row">
              <button className="botao-concluido" onClick={handleClick}>
                <p className="botao-texto" onClick={handleClick}>
                  Concluido
                </p>
              </button>
            </div>
          </div>
        </div>

      </header>
  );
}

export default Tela4;