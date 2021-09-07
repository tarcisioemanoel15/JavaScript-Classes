/* Getters e Setters*/
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    get velocidade() {
        return this[_velocidade];
    }
    set velocidade(val) {
        if (typeof val !== 'number') return;
        if (val >= 100 || val <= 0) return;
        this[_velocidade] = val;
    }
    
    acelera() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('fusca');

// for(let i = 0; i <= 200; i++ ){ c1.acelera();}

c1.velocidade = 10;
// c1.acelera()
console.log(c1);
