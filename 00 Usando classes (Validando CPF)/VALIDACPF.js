// 705.484.450-52    070.987.720-03

class Validacpf {
    constructor(enviocpf){
        Object.defineProperty(this, 'Limpo', {
           writable: false,
            enumerable: true,
            configurable:false,
            value: enviocpf.replace(/\D+/g, '')
        });
    }
     
    isSequencia(){return this.Limpo.charAt(0).replace(11) === this.Limpo.length;}
    

    geranovoCpf(){
        const cpfParcial = this.Limpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        this.novoCPF = cpfParcial + digito1 + digito2;
    }

    criaDigito(parcial){
        let total = 0;
        let reverso = parcial.length + 1;

        for(let stringNumerica of parcial){
            // console.log(stringNumerica, reverso)
            total += reverso * Number(stringNumerica);
            reverso--;
            // console.log(this.novoCPF);
        }
        console.log();

         const digito = 11 - (total % 11);
         return digito <= 9 ? String(digito) : '0';
    }


    valida(){
        if(!this.Limpo) return false;
        if(this.Limpo.length !== 11) return false;
        if(typeof this.Limpo !== 'string' ) return false;
        if(this.isSequencia()) return false;
        this.geranovoCpf();
        
// console.log(this.novoCPF);
        return this.novoCPF === this.Limpo;
    }
}
const cpf = new Validacpf('705.484.450-52');
// const cpf = new Validacpf('111.111.111-11');
if(cpf.valida()){
    console.log('VALIDO CPF')
}else{
    console.log('INVALIDO CPF')
}
