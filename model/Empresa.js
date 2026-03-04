export default class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.endereco = endereco
        this.clientes = new Set()
        this.telefones = new Set()
        this.#cnpj = cnpj
    }

    getCnpj() { 
        return this.#cnpj
    }

    getRazaoSocialCaixaAlta() { 
        return String(this.razaoSocial).toUpperCase()
    }

    getRazaoSocialCaixaBaixa() { 
        return String(this.razaoSocial).toLowerCase()
    }
    
    getNomeFantasiaCaixaAlta() { 
        return String(this.nomeFantasia).toUpperCase()
    }

    getNomeFantasiaCaixaBaixa() { 
        return String(this.nomeFantasia).toLowerCase()
    }
    
    getCnpjCaixaAlta() { 
        return String(this.#cnpj).toUpperCase()
    }

    getCnpjCaixaBaixa() { 
        return String(this.#cnpj).toLowerCase()
    }

    detalhe() {
        let desc = "Razão Social: " + this.razaoSocial + "\n" +
                   "Nome fantasia: " + this.nomeFantasia + "\n" +
                   "-------------------------\n"
        
        let arrayClientes = Array.from(this.clientes)
        
        for (let i = 0; i < arrayClientes.length; i++) {
            let cliente = arrayClientes[i]
            
            desc += "Nome: " + cliente.nome + "\n"
            desc += "Estado: " + cliente.endereco.estado + 
                    " cidade: " + cliente.endereco.cidade + 
                    " rua: " + cliente.endereco.rua + 
                    " numero: " + cliente.endereco.numero + 
                    "\n"
            
            let arrayTelefones = Array.from(cliente.telefones)
            
            for (let j = 0; j < arrayTelefones.length; j++) {
                desc += "ddd: " + arrayTelefones[j].ddd + " numero: " + arrayTelefones[j].numero + "\n"
            }
            
            desc += "\n"
        }

        return desc
    }
}