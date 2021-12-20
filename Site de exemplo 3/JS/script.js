function validar(){
    if(validarUsuario() == true && validarSenha() == true){
        return true;
    }else{
        return false;
    }
}

function validarUsuario(){
    var user = formulario.username.value;

    if(user == ""){
        alert("Preencha o campo usuario");
        formulario.username.focus();
        return false;
    }else{
        if(user == "Diego"){
             return true;
        }else{
            alert("Login não tem acesso");
            formulario.username.focus();
            return false;
        }
    }
}

function validarSenha(){
    var senha = formulario.password.value;

    if(senha == ""){
        alert("Preencha o campo senha");
       formulario.password.focus();
       return false;
   }else{
       if(senha == "123"){
            return true;
       }else{
            alert("Login não tem acesso");
            formulario.password.focus();
           return false;
       }
   }
}

function chamaTela() {
    var radios = document.getElementsByName("escolha");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == "FALTAS"){
                window.location.href='Adicionar.html';
            }else{
                window.location.href='Nota.html';
            }   
        }
    }
}