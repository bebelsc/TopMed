import './Tela3.css';
import nextplus_logo from './nextplus-logo.png'
import topmed_logo from './topmed_logo.png'
import carta from './carta.png'

function Tela3() {
  const handleClick = () => {
    alert('Texto clicado!'); // Substitua por qualquer lógica desejada
  };

  return (
      <header className="Tela3-header">
        <div className="modal-container">
          <div className="modal-branco">
            <div class="row">
              <p className="enviado-texto">E-mail enviado!</p>
            </div>
            <div class="row">
              <p className="verifique-texto">Verifique sua caixa de entrada e acesso o link para redefinição de senha.</p>
            </div>
            <div class="row">
              <img src={carta} className="carta-imagem" alt="carta" />
            </div>
            <div class="row">
              <button className="botao-login" onClick={handleClick}>
                <p className="login-texto" onClick={handleClick}>
                  Login
                </p>
              </button>
            </div>
            <div  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <img src={topmed_logo} className="TopMed-logo" alt="topmed_logo" style={{ gridColumn: '1',marginRight: '10px' }} />
              <img src={nextplus_logo} className="nextplus-logo" alt="nextplus_logo" style={{ gridColumn: '2' }} />
            </div>
          </div>
        </div>

      </header>
  );
}

export default Tela3;
