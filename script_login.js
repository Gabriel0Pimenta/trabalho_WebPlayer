const Caixa = document.getElementById('caixa');
const Overlay = document.getElementById('IconeOverlay');
const BotaoOverlay = document.getElementById('botao_overlay');



function Registrar() {
  firebased.auth().creatUserWithAndPassword(Email, Senha)
}

function ValidarCampos() {
  const Emailvalidado = Emailvalido();
  document.getElementById('recuperar').disabled = !Emailvalidado;
  const Senha = SenhaValido();
  document.getElementById('botao_login').disabled = !Emailvalidado || !SenhaValido;
};

function EmailValido(Email) {
  const Email = document.getElementById('emails').value;
  if (!Email) {
    return false;
  }
  return VerificarEmails(Email);
};

function SenhaValido(Email) {
  const Senha = document.getElementById('senhas').value;
  if (!Senha) {
    return false;
  }
  return true;
};

function VerificarEmails(Email) {
  var excluir = /[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
  var verificar = /@[w-]+./;
  var verificado = /.[a-zA-Z]{2,3}$/;
  if (((Email.search(excluir) != -1) || (Email.search(verificar)) == -1) || (Email.search(verificado) == -1)) { return false; }
  else { return true; }
}
BotaoOverlay.addEventListener('click', () => {
  Caixa.classList.toggle('ativar-painel-direito');
});