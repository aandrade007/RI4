import Endereco from './model/Endereco.js'
import Telefone from './model/Telefone.js'
import Cliente from './model/Cliente.js'
import Empresa from './model/Empresa.js'

let enderecoEmpresa = new Endereco('SP', 'São Paulo', 'Avenida Paulista', '1000')
let empresa = new Empresa('ABC LTDA', 'Mercado Online', '12.345.678/0001-99', enderecoEmpresa)

empresa.telefones.add(new Telefone('11', '33333333'))
empresa.telefones.add(new Telefone('11', '44444444'))

let endC1 = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '987')
let c1 = new Cliente('João', '111.111.111-11', endC1)
c1.telefones.add(new Telefone('99', '99999999'))
c1.telefones.add(new Telefone('99', '99999999'))
empresa.clientes.add(c1)

let endC2 = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '412')
let c2 = new Cliente('Gabriel', '222.222.222-22', endC2)
c2.telefones.add(new Telefone('88', '88888888'))
c2.telefones.add(new Telefone('88', '88888888'))
empresa.clientes.add(c2)

let endC3 = new Endereco('SP', 'São José dos Campos', 'Av São João', '789')
let c3 = new Cliente('Barbara', '333.333.333-33', endC3)
c3.telefones.add(new Telefone('77', '77777777'))
c3.telefones.add(new Telefone('77', '77777777'))
empresa.clientes.add(c3)

let endC4 = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '452')
let c4 = new Cliente('Márcia', '444.444.444-44', endC4)
c4.telefones.add(new Telefone('66', '66666666'))
c4.telefones.add(new Telefone('66', '66666666'))
empresa.clientes.add(c4)

let endC5 = new Endereco('SP', 'São José dos Campos', 'Rua das Flores', '123')
let c5 = new Cliente('Lucas', '555.555.555-55', endC5)
c5.telefones.add(new Telefone('55', '55555555'))
c5.telefones.add(new Telefone('55', '55555555'))
empresa.clientes.add(c5)

console.log(empresa.detalhe())