import './Tela3.css';
import nextplus_logo from './nextplus-logo.png'
import topmed_logo from './topmed_logo.png'
import carta from './carta.png'

function Tela3() {
  const handleClick = () => {
    alert('Texto clicado!'); // Substitua por qualquer lógica desejada
  };

  return (
    <div className="Tela3">
      <header className="Tela3-header">

        <div className="modal-container">
          <div className="modal-branco">
           
           <p className="enviado-texto">E-mail enviado!</p>
           <p className="verifique-texto">Verifique sua caixa de entrada e acesso o link para redefinição de senha.</p>

           <img src={carta} className="carta" alt="carta" />

            <button className="botao-login" onClick={handleClick}>
              <p className="login-texto" onClick={handleClick}>
                Login
              </p>
            </button>

            <img src={topmed_logo} className="TopMed-logo" alt="topmed_logo" />
            <img src={nextplus_logo} className="nextplus-logo" alt="nextplus_logo" />
          </div>
        </div>

      </header>
    </div>
  );
}

export default Tela3;
