class ValidaFormulario{
  constructor(){
    this.formu = document.querySelector('.formulario');
    this.envio();
  }

  envio(){
    this.formu.addEventListener('submit', e => {
      this.previnir(e);
    })
  }

  previnir(e){
    e.preventDefault()
    const camposValidos = this.camposSaoValidos();
    const senhasValidos = this.senhasSaoValidos();

    if(camposValidos && senhasValidos){
      alert('formulario enviado')
      this.formu.submit();
    }
  }
  
  errorText(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('errorText');
    campo.insertAdjacentElement( 'afterend', div );
  }
  
  camposSaoValidos () {
    let valid = true;

    for(let errortext of this.formu.querySelectorAll(".errorText")){
      errortext.remove();
    }
    
    for (let campo of this.formu.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerHTML;
      if(!campo.value){
        valid = false;
        this.errorText(campo, `campo ${label} não pode estar vazio`);
      }

      if(campo.classList.contains('cpf')){
        this.validacpf(campo);
      }

      if(campo.classList.contains('usuario')){
        this.campousuario(campo);
      }
    }
    return valid;
  }
  
  validacpf(campo){
    const valida = new Validacpf(campo.value)
    if(!valida.valida()){
      this.errorText(campo, 'CPF Invalido');
      return false;
    }
    return true;
  }
  
  campousuario(campo){
    
    let usuario = campo.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12){
      this.errorText(campo, 'Campo usuario tem que estar entre 3 e 12 caractere ');
      valid = false;
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
      this.errorText(campo, 'usuario só pode conter numeros ou letras');
      valid = false;
    }
    return valid;
  }
  
  senhasSaoValidos(){   
    let valid = true;
    const senha = this.formu.querySelector('.senha');
    const repetirSenha = this.formu.querySelector('.repetir-senha');
    
    if(senha.value.length < 3 && repetirSenha.value.length > 6 ){
      this.errorText(senha, 'xxxxxxxxxxxxx');
      validao = false;
    }
    
    if(senha.value !== repetirSenha.value){
      this.errorText(senha, 'campo senha INVALIDO')
      this.errorText(repetirSenha, 'campo repetir senha tem que ser igual a senha')
      valid = false;
    }
    return valid;
  }
}

const validao = new ValidaFormulario();