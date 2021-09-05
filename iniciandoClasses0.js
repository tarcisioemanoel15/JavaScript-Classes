// Casses=====> é muito parecido com a funçao construtora
/**/

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    fala() {console.log(`${this.nome} esta falando`)}
    comer() {console.log(`${this.nome} ${this.sobrenome} estão comendo`)}
}

const p1 = new Pessoa('Tarcisio', 'Emanoel');
const p2 = new Pessoa('Andressa', 'Bispo');
console.log(p1.nome, p1.sobrenome); console.log(p2.comer()); 

console.log()
console.log()

function Pessoa0(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa0.prototype.beber = function(){
    console.log(`${this.nome} ${this.sobrenome} estão bebendo`)
}

const p3 = new Pessoa0('Ivaneide', 'Rosa');
const p4 = new Pessoa0('Tais', 'Emanoela');
console.log(p3.nome, p3.sobrenome);
console.log(p4.beber());
