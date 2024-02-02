import topmed_logo from './topmed_logo2.png'
import './Tela5.css';

function Tela5() {
  const handleClick = () => {
    alert('Texto clicado!'); // Substitua por qualquer lógica desejada
  };

  return (
    <div className="Tela5">
      <header className="Tela5-header">

        <div className="modal-container">
          <div className="modal-verde">
            <p className="redefinicao-texto">Redefinição de senha</p>

          </div>

          <div className="modal-branco">
            <p className="texto-1">Olá, 

            Recebemos sua solicitação de redefinição de senha do Consultório Pró.

            Clique no botão abaixo para redefinir sua senha.</p>

            <button className="botao-redefinir" onClick={handleClick}>
              <p className="texto-botao" onClick={handleClick}>
                REDEFINIR SENHA
              </p>
            </button>

            <p className="texto-2">Esta deve ser uma senha de acesso exclsuiva do usuário, que não deve ser compartilhada com terceiros.
            
            Se necessário, a senha pode ser alterada posteriormente através do menu “Alterar minha senha” no Consultório Pró.</p>

            <img src={topmed_logo} className="topmed-logo" alt="topmed_logo" />
          </div>
        </div>

      </header>
    </div>
  );
}

export default Tela5;