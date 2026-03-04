export default class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    getCpf() { 
        return this.#cpf
    }

    getNomeCaixaAlta() { 
        return String(this.nome).toUpperCase()
    }

    getNomeCaixaBaixa() { 
        return String(this.nome).toLowerCase()
    }
    
    getCpfCaixaAlta() { 
        return String(this.#cpf).toUpperCase()
    }

    getCpfCaixaBaixa() { 
        return String(this.#cpf).toLowerCase()
    }
} 