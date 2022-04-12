# desafio-tecnico-backend
# Desafio Técnico Payfy


### Rodando o projeto em outro computador
* execute o comando **git clone https://github.com/GarconeAna/desafio-tecnico.git**
* abra a pasta do projeto no terminal e execute o comando **yarn install**

### Banco de dados usado
* foi usado o MongoDBAtlas, para conseguir conectar no projeto mude a extenção do arquivo env.js para .env e descomente

### Observações 
* foi feito todas as fumcionalidades básicas requeridas
* foi criado a tabela de usuarios e configurações e adicionado apenas uma referência de uma tabela para outra, adicionando o id gerado da tabela de configurações para a tabela de usuario

### Guia para as rotas
|URL BASE|http://localhost:3333|

#### Criar usuario
| URL | /register |
| MÉTODO | POST |
|----|-----|
| MODELO | EXEMPLO |
| name | Carol |
| age | 30 |
| email | carol@gmail.com |

* *modelo name é do tipo String*
* *modelo age é do tipo Number **>=18***
* *modelo email é do tipo String*

