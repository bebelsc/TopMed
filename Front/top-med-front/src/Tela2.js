import './Tela2.css';
import nextplus_logo from './nextplus-logo.png'
import email from './email.png'
import topmed_logo from './topmed_logo.png'

function Tela2() {
  const handleClick = () => {
    alert('Texto clicado!'); // Substitua por qualquer lógica desejada
  };

  return (
      <header className="Tela2-header">

        <div className="modal-container">
          <div className="modal-branco">
           
            <div class="row">
              <p className="esqueceu-senha-texto">Esqueceu sua senha?</p>
            </div>
            <div class="row">
            <p className="informe-texto">Informe o endereço de e-mail cadastrado para receber o link de redefinição de senha.</p>
            </div>
            <div className="row">
              <img src={email} className="email" alt="email" />
              <p className="email-texto">Email</p>
            </div>
            <div className="row">
              <p className="line-4"></p>
            </div>
            <div className="row">
              <button className="botao-enviar" onClick={handleClick}>
                <p className="enviar-texto" onClick={handleClick}>
                  ENVIAR
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

export default Tela2;
