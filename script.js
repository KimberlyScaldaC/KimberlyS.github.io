// function cadastrar(){ window.location.replace("https://apprefugiados.kimberlysc.repl.co/cadastrar.html")
// }

function locador(){ 
  window.location.replace("https://apprefugiados.kimberlysc.repl.co/cadastro_locador.html")
}

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

var $input    = document.getElementById('input-file'),
    $fileName = document.getElementById('file-name');

$input.addEventListener('change', function(){
  $fileName.textContent = this.value;
});


function mascaraCpf(){
  var cpf = document.getElementById('txtCpf').value;
  if(cpf.length==3){
  document.getElementById('txtCpf').value = cpf +'.';
}
  else if(cpf.length==7){
  document.getElementById('txtCpf').value = cpf +'.';
}
  else if (cpf.length==11){
  document.getElementById('txtCpf').value = cpf +'-';
}    
}  

function mascaraTelefone(){

   var telefone= document.getElementById('txtTelefone').value;
   if(telefone.length==1){
    document.getElementById('txtTelefone').value ='(' + telefone;
     }
   else if (telefone.length==3){
    document.getElementById('txtTelefone').value = telefone +')';
   }

   else if (telefone.length==8){
    document.getElementById('txtTelefone').value = telefone +'-';
   }
}

 function mascaraCep(){
   var cep = document.getElementById('txtCep').value;
    if(cep.length==5){
     document.getElementById('txtCep').value = cep +'-';
}
}
// function contato(){ 
//   window.location.replace("")
// }locador

// function sobre_nos(){ 
//   window.location.replace("")
// }

// function ajuda(){ 
//   window.location.replace("")
// }

// function moradia(){ 
//   window.location.replace("")
// }

// function cadastrar(){ 
//   window.location.replace("")
// }