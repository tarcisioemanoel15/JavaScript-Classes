// 705.484.450-52    070.987.720-03

class Validacpf {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'Limpacpf', {
            writable: true,
            enumerable: true,
            configurable: false,

            value: cpfEnviado.replace(/\D+/g, '')
        })
    }
    isValida(){
        const repetiNo = this.Limpacpf[0].repeat(this.Limpacpf.length); 
        return repetiNo === this.Limpacpf;
    }
    valida(){
        if(!this.Limpacpf) return false;
        if(typeof this.Limpacpf === 'undefined')return false;
        if(this.Limpacpf.length !== 11) return false;
        if(this.isValida()) return false;

        const cpfS = this.Limpacpf.slice(0, -2);
        const digito1 = this.conta(cpfS);
        const digito2 = this.conta(cpfS + digito1);
        const novocp = cpfS + digito1 + digito2;
        

        return novocp === this.Limpacpf;
    }


    conta(cpar){
        const cpfArray = Array.from(cpar);
        let re = cpfArray.length + 1;
        const tot = cpfArray.reduce((ac, val) => {
            ac += (re * Number(val));
            re--;
            return ac;
        }, 0);
        const digito = 11 - (tot % 11);
        return digito > 9 ? '0' : String(digito);
    }


}

const cpf = new Validacpf('705.484.450-52');
if(cpf.valida()){
    console.log('CPF Valido');
}else{
    console.log("Invalido");
}