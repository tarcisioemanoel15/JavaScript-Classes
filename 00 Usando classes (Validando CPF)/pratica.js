// 705.484.450-52    070.987.720-03     211.111.111-20
class Validandocpf{
       constructor(enviocpf){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: enviocpf.replace(/\D+/g, '')
        })
    }
    
    isSequncia(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }

    static criaDigito(parcial){
        let tot = 0;
        let re = parcial.length + 1;
        for(let sn of parcial){
            tot += re * Number(sn);
            re--;
        }
        const digito = 11 - (tot % 11);
        return digito <= 9 ? String(digito) : '0';
        
    }

    geracpf(){
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = Validandocpf.criaDigito(cpfParcial);
    const digito2 = Validandocpf.criaDigito(cpfParcial + digito1);
    this.novoCPF = cpfParcial + digito1 + digito2;
}
      
valida(){
    if(!this.cpfLimpo) return false;
    if(!typeof this.cpfLimpo === 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequncia()) return false;
    
    this.geracpf();
    console.log(`cpf criado: ${this.novoCPF}`);
    return this.novoCPF === this.cpfLimpo;
    }
}
            
   const cpf = new Validandocpf('200.000.000-27');
   console.log(`cpf limpo: ${cpf.cpfLimpo}`);
   console.log(`cpf enviado V/F: ${cpf.valida()}`);

   console.log();
   console.log();

   if(cpf.valida()){
       console.log("CPF VALIDO");
   }else{
       console.log('CPF INVALIDO');
   }