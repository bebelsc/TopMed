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
    <div className="Tela6">
      <header className="Tela6-header">

        <div className="modal-container">
          <div className="modal-branco">
            <p className="redefinicao-texto">Redefinição de senha</p>

            <div className="linha">
              <img src={icone1} className="icone1" alt="icone1" />
              <p className="usuario-texto">Nova senha</p>
            </div>
            <div className="linha">
              <img src={icone2} className="icone2" alt="icone2" />
              <p className="usuario-texto">Confirme a nova senha</p>
            </div>

            <button className="botao-redefinir" onClick={handleClick}>
              <p className="texto-botao1" onClick={handleClick}>
                REDEFINIR SENHA
              </p>
            </button>
            <button className="botao-cancelar" onClick={handleClick}>
              <p className="texto-botao2" onClick={handleClick}>
                Cancelar
              </p>
            </button>

            <img src={nextplus_logo} className="nextplus-logo" alt="nextplus_logo" />
            <img src={topmed_logo} className="topmed-logo" alt="topmed_logo" />
          </div>
        </div>

      </header>
    </div>
  );
}

export default Tela6;