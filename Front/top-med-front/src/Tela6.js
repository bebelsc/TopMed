import topmed_logo from './topmed_logo.png'
import nextplus_logo from './nextplus-logo.png'
import icone1 from './Senha.png'
import icone2 from './icone2.png'
import './Tela6.css';

function Tela6() {
  const handleClick = () => {
    alert('Texto clicado!'); // Substitua por qualquer lógica desejada
  };

  return (
      <header className="Tela6-header">

        <div className="modal-container">
          <div className="modal-branco">
            <div className='row'>
              <p className="redefinicao-texto">Redefinição de senha</p>
            </div>
            <div className='row'>
                <img src={icone1} className="icone1" alt="icone1" />
                <p className="usuario-texto">Nova senha</p>
            </div>
            <div className='row'>
              <p className="linha"></p>
            </div>
            <div className='row'>
                <img src={icone2} className="icone2" alt="icone2" />
                <p className="usuario-texto">Confirme a nova senha</p>
            </div>
            <div className='row'>
              <p className="linha"></p>
            </div>
            <div className='row'>
              <button className="botao-redefinir" onClick={handleClick}>
                <p className="texto-botao1" onClick={handleClick}>
                  REDEFINIR SENHA
                </p>
              </button>
            </div>
            <div className='row'>
              <button className="botao-cancelar" onClick={handleClick}>
                <p className="texto-botao2" onClick={handleClick}>
                  Cancelar
                </p>
              </button>
            </div>
            <div className='row'>
              <div  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <img src={topmed_logo} className="TopMed-logo" alt="topmed_logo" style={{ gridColumn: '1',marginRight: '10px' }} />
                <img src={nextplus_logo} className="nextplus-logo" alt="nextplus_logo" style={{ gridColumn: '2' }} />
              </div>
            </div>
          </div>
        </div>

      </header>
  );
}

export default Tela6;