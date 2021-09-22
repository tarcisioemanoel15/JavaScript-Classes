
class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.hsubmit(e);
        });
    }

    hsubmit(e){
        e.preventDefault();
        
       const camposValidos = this.camposSaoValidos();
       const senhasValidos = this.senhasSaoValidos();


       if(camposValidos && senhasValidos){
           alert('formulario enviadOOOOOO');
           this.formulario.submit();
       }
    }

    senhasSaoValidos(){

        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');


        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'campo senha e repetir senha precisam ser iguais')
            this.criaErro(repetirSenha, 'campo senha e repetir senha precisam ser iguais')
        }

        if(senha.length < 6 || senha.length > 12){
            valid = false;
            this.criaErro(senha, 'senha precisa estar entre 6 e 12 caracteres')
        }


        return valid;
    }
    


    camposSaoValidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.erro-text')){
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')){
          
          const label = campo.previousElementSibling.innerText;

            if(!campo.value){
                this.criaErro(campo, `Campo ${label} não pode tar vazio`);
                 valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validacpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validausuario(campo)) valid = false;
            }

        }

        return valid;




    }
    
    
    validausuario(campo){
        const usuario = campo.value;
        let valid = true

        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracter')
        valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'nome de usuario presisa conter apenas letras e numeros')
        valid = false;
        }



        return valid;
    }
    


    validacpf(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo, 'cpf INVALIDO');
            return false;
        }
        return true;
    }

    
    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('erro-text');
        campo.insertAdjacentElement('afterend', div)

    }

}

const valida = new ValidaFormulario();