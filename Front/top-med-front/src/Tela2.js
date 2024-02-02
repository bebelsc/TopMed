import './Tela2.css';
import nextplus_logo from './nextplus-logo.png'
import email from './email.png'
import topmed_logo from './topmed_logo.png'

function Tela2() {
  const handleClick = () => {
    alert('Texto clicado!'); // Substitua por qualquer lógica desejada
  };

  return (
    <div className="Tela2">
      <header className="Tela2-header">

        <div className="modal-container">
          <div className="modal-branco">
           
           <p className="esqueceu-senha-texto">Esqueceu sua senha?</p>
           <p className="informe-texto">Informe o endereço de e-mail cadastrado para receber o link de redefinição de senha.</p>

            <div className="line-4">
              <img src={email} className="email" alt="email" />
              <p className="email-texto">Email</p>
            </div>

            <button className="botao-enviar" onClick={handleClick}>
              <p className="enviar-texto" onClick={handleClick}>
                ENVIAR
              </p>
            </button>

            <div  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <img src={topmed_logo} className="TopMed-logo" alt="topmed_logo" style={{ gridColumn: '1',marginRight: '10px' }} />
              <img src={nextplus_logo} className="nextplus-logo" alt="nextplus_logo" style={{ gridColumn: '2' }} />
            </div>
            
          </div>
        </div>

      </header>
    </div>
  );
}

export default Tela2;
