class Validacpf {
    constructor(enviocpf) {
        Object.defineProperty(this, 'cpflimpo', {
            value: enviocpf.replace(/\D+/g, '')
        })
    }

    isSequencis() {
        const sequencia = this.cpflimpo[0].repeat(this.cpflimpo.length);
        return sequencia === this.cpflimpo;
    }

    valida() {
        if (typeof this.cpflimpo !== "string") return false;
        if (this.cpflimpo.length !== 11) return false;
        if (this.isSequencis()) return false;
        this.criaDigito();
        return this.novocpf === this.cpflimpo;
    }

    criaDigito() {
        const cpfparcial = this.cpflimpo.slice(0, -2);
        const digito1 = this.criandoDigito(cpfparcial);
        const digito2 = this.criandoDigito(cpfparcial + digito1);
        this.novocpf = cpfparcial + digito1 + digito2;

    }

    criandoDigito(parcial) {
        let tot = 0;
        let re = parcial.length + 1;

        for (let cp of parcial) {
            tot += re * Number(cp)
            re--;
        }

        const digito = 11 - (tot % 11);
        return digito <= 9 ? String(digito) : '0';
    }
}