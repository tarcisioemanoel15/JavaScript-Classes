class Validaformulario {
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }



    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.pararenvio(e);
        });
    }

    pararenvio(e){
        e.preventDefault()
        
        const camposValidos = this.camposSaoValidos();
        const senhasValidos = this.senhasSaoValidos();
        
        if(camposValidos && senhasValidos){
            alert('envio com suceso');
            this.formulario.submit();
        }

    }

    senhasSaoValidos(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            this.errorText(senha, 'campo senha precisa ser igual a repetir senha')
            this.errorText(repetirSenha, 'campo repetir senha precisa ser igual a senha')
        }
        
        if(senha.length < 6 || senha.length > 12){
            this.errorText(senha, 'campo senha precisa estar entre 6 e12 caracter')
            valid = false;
        }


        return valid;
    }

    camposSaoValidos(){
        let valid = true;


        for(let errort of this.formulario.querySelectorAll('.error-text')){
            errort.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
        
            const label = campo.previousElementSibling.innerText;
            
            if(!campo.value){
                this.errorText(campo, `campo ${label} Não pode estar vazio`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validacpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.usuarioValida(campo)) valid = false;
            }


                
                

                
        }
    
    
        return valid;
    }

  //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


  usuarioValida(campo){
      const usuario = campo.value;
      let valid = true;


      if(usuario.length < 3 || usuario.length > 12){
          this.errorText(campo, 'usuario precisa estar entre 3 e 12 caractere');
          valid = false;
      }
      if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
          this.errorText(campo, 'campo usuario só pode conter letras e numeros');
          valid = false;
      }


      return valid;
  }

 validacpf(campo){
    const cpf = new Validacpf(campo.value);

    if(!cpf.valida()){
            this.errorText(campo, 'CPF invalido');
            return false;
        }
        return true;
    }
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    
        
    





    errorText(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)

    }
}

const valida = new Validaformulario();