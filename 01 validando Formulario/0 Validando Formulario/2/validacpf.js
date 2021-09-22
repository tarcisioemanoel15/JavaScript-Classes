

class Validacpf{
    constructor(enviocpf){
        Object.defineProperty(this, 'cpflimpo', {
            enumerable: true,
            value: enviocpf.replace(/\D+/g, '')
        })
    }

    isSequncia(){
        return this.cpflimpo.charAt(0).repeat(11) === this.cpflimpo;    
    }
        
    valida(){
        if(typeof this.cpflimpo === 'undefined') return false;
        if(this.cpflimpo.length !== 11) return false;
        if(this.isSequncia()) return false;

        this.criaDigito();
        return this.novocpf === this.cpflimpo;
    }

    criaDigito(){
        const cpfParcial = this.cpflimpo.slice(0, -2);
        const digito1 = Validacpf.criandoDigito(cpfParcial);
        const digito2 = Validacpf.criandoDigito(cpfParcial + digito1);
        this.novocpf = cpfParcial + digito1 + digito2;
    }


    static criandoDigito(parcial){
        let total = 0;
        let reverso = parcial.length + 1;
        for (let conta of parcial){
            total += reverso * Number(conta);
            reverso--;
        }
        
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

}
