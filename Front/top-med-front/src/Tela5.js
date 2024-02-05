import topmed_logo from './topmed_logo2.png'
import './Tela5.css';

function Tela5() {
  const handleClick = () => {
    alert('Texto clicado!'); // Substitua por qualquer lógica desejada
  };

  return (
      <header className="Tela5-header">

        <div className="modal-container">

        <div className="column">
          <div className="modal-verde">
            <div className='row'>
              <p className="redefinicao-texto">Redefinição de senha</p>
            </div>
          </div>

          <div className="modal-branco">
            <div className='row'>
                <p className="texto-1">Olá, 
                  Recebemos sua solicitação de redefinição de senha do Consultório Pró.

                  Clique no botão abaixo para redefinir sua senha.</p>
            </div>
            <div className='row'>
              <button className="botao-redefinir" onClick={handleClick}>
                <p className="texto-botao">
                  REDEFINIR SENHA
                </p>
              </button>
            </div>
            <div className='row'>
              <p className="texto-2">Esta deve ser uma senha de acesso exclsuiva do usuário, que não deve ser compartilhada com terceiros.
              
              Se necessário, a senha pode ser alterada posteriormente através do menu “Alterar minha senha” no Consultório Pró.</p>
            </div>
            <div className='row'>
              <img src={topmed_logo} className="topmed-logo2" alt="topmed_logo" />
            </div>
          </div>
        </div>
          

          
        </div>

      </header>
  );
}

export default Tela5;