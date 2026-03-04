export default class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    getEstadoCaixaAlta() { 
        return String(this.estado).toUpperCase()
    }

    getEstadoCaixaBaixa() { 
        return String(this.estado).toLowerCase()
    }
    
    getCidadeCaixaAlta() { 
        return String(this.cidade).toUpperCase()
    }

    getCidadeCaixaBaixa() { 
        return String(this.cidade).toLowerCase()
    }
    
    getRuaCaixaAlta() { 
        return String(this.rua).toUpperCase()
    }

    getRuaCaixaBaixa() { 
        return String(this.rua).toLowerCase()
    }
}
