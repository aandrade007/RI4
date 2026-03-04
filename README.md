# RI4

Este documento detalha uma atividade de programação focada na construção de módulos em JavaScript, utilizando o contexto de cadastro de clientes e empresas. A atividade está dividida em três partes de objetivos.

**Estrutura das Classes (Módulo a ser Desenvolvido):**

  * **Cliente:**
      * Possui atributos `nome`, `endereco`, e `telefones`.
      * O `cpf` deve ser um atributo privado (`#cpf`) e não pode mudar após a criação.
      * `telefones` é inicializado como um `Set`.
  * **Empresa:**
      * Possui atributos `razaoSocial`, `nomeFantasia`, `endereco`, `clientes`, e `telefones`.
      * O `cnpj` deve ser um atributo privado (`#cnpj`) e não pode mudar após a criação.
      * `clientes` e `telefones` são inicializados como `Set`.
  * **Telefone e Endereço:**
      * Não devem possuir atributos privados.
      * Serão usados tanto em clientes quanto na empresa.
      * `Telefone` tem `ddd` e `numero`.
      * `Endereco` tem `estado`, `cidade`, `rua`, e `numero`.

**Objetivos da Atividade:**

1.  **Parte 1 - Construção do Módulo ES6:**
      * O módulo deve ter métodos construtores para cada tipo de objeto.
      * Deve ser um módulo ES6 e estar em uma plataforma de versionamento (ex: GitHub).
      * Deve ter métodos de acesso `get` para cada atributo privado.
      * Deve ter métodos para recuperar o valor de cada atributo em caixa alta e caixa baixa.
2.  **Parte 2 - Teste do Módulo:**
      * Criar um módulo de teste, importando o módulo criado com ES6.
      * Criar uma empresa com endereço e pelo menos dois telefones.
      * Criar cinco clientes, cada um com endereço e dois telefones, e adicioná-los ao conjunto de clientes da empresa.
3.  **Parte 3 - Geração de Descrição:**
      * O módulo de teste deve gerar uma descrição formatada da empresa e de seus clientes, como no exemplo fornecido.
      * Deve ser capaz de executar `console.log(empresa.detalhe())`.



<br><br>

# 🚀 Guia: Como Rodar o Projeto
Siga os passos abaixo para baixar e executar o projeto

## 1. Clonar o Repositório
Abra o terminal do seu computador (CMD, PowerShell ou Terminal do Mac/Linux) e digite o comando abaixo para baixar o projeto:

git clone https://github.com/aandrade007/RI4

## 2. Abrir no VS Code
Abra o Visual Studio Code.

Vá em Arquivo (File) > Abrir Pasta (Open Folder).

Selecione a pasta que você acabou de clonar.

## 3. Abrir o Terminal do VS Code
Dentro do VS Code, abra o terminal integrado para facilitar o trabalho:

Use o atalho: Ctrl + ' (crase/aspas simples).

Ou vá no menu superior: Terminal > Novo Terminal.

## 4. Instalar o Node.js (Caso não tenha)
O comando node só funciona se o Node estiver instalado. Para verificar, digite no terminal:

node -v
Se aparecer uma versão (ex: v20.x.x): Você já tem o Node! Pule para o próximo passo.

Se der erro: Baixe e instale a versão "LTS" no site oficial: nodejs.org. Após instalar, reinicie o VS Code.

## 5. Executar o Projeto
Agora, com o terminal aberto na pasta do projeto, digite o comando para rodar o script:

### node index.js
