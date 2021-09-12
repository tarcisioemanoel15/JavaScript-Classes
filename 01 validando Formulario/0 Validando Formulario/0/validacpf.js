function Validacpf(enviocpf){
    Object.defineProperty(this, "cpflimpo", {
        enumerable: true,
        get: function(){
            return enviocpf.replace(/\D+/g, '');
        }
    });
}

Validacpf.prototype.isSequencia = function(){
    const sequencia = this.cpflimpo[0].repeat(this.cpflimpo.length);
    return sequencia === this.cpflimpo;
}
Validacpf.prototype.valida = function(){
    if(typeof this.cpflimpo === 'undefined')return false;
if(this.cpflimpo.length !== 11) return false;
if( this.isSequencia()) return false;

const cpfparcial = this.cpflimpo.slice(0, -2);
const digito1 = this.criaDigito(cpfparcial)
const digito2 = this.criaDigito(cpfparcial + digito1)
const novocpf = cpfparcial + digito1 + digito2;
return novocpf === this.cpflimpo;

}

Validacpf.prototype.criaDigito = function(parcial){
    const cpfArray = Array.from(parcial);
    let re = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (re * Number(val))
        re--;
        return ac; 
    }, 0)
    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}


const cpf = new Validacpf('211.111.111-20');
// console.log(cpf.valida());

if(cpf.valida()){
    console.log("Valido")
}else{
    console.log("Invalido")

}