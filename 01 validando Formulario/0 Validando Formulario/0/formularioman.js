class Validaformulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.hsubmit(e);
        })
    }

    hsubmit(e){
        e.preventDefault();
        console.log('fformulario na')
    }










}

const valida = new Validaformulario();