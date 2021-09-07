/* Heransa */
class DispositivoEletronico{
    
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + " Ja esta ligado");
            return;
        }
        this.ligado = true;
    }

    desligado(){
        if(!this.ligado){
            console.log(this.nome + " Desligado");
            return;
        }
        this.ligado = false;
    }
}


class SmartPhone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

}



class Tablet extends DispositivoEletronico{
    constructor(nome, cor, wiffi){
        super(nome);
        this.cor = cor;
        this.wiffi = wiffi;
    }

}

const d1 = new DispositivoEletronico('Motorola');
d1.ligar();
d1.ligar();
console.log(d1)

console.log();
console.log();

const s1 = new SmartPhone('LG', 'Preto', 's10');
s1.desligado();
console.log(s1)

console.log();
console.log();

const t1 = new Tablet('tablett', 'Amarelo', 'tem Wifi');
t1.ligar();
console.log(t1)
