# desafio-tecnico-backend
# Desafio Técnico Payfy


### Rodando o projeto em outro computador
* execute o comando **git clone https://github.com/GarconeAna/desafio-tecnico.git**
* abra a pasta do projeto no terminal e execute o comando **yarn install**
* conecte com o DB 
* execute o comando yarn dev

### Banco de dados usado
* foi usado o MongoDBAtlas. Para conseguir conectar o projeto crie um arquivo **.env** e adicione: DB_URL=mongodb+srv://user:GL5hUKq0CJd2eZjn@work.vnrfl.mongodb.net/work?retryWrites=true&w=majority
* sem segurança, apenas para o desafio

### Observações 
* foi feito todas as fumcionalidades básicas requeridas
* foi criado a tabela de usuarios e configurações e adicionado apenas uma referência de uma tabela para outra, adicionando o id gerado da tabela de configurações para a tabela de usuario

### Guia para as rotas
| URL BASE | http://localhost:3333 |
|----------|-----------------------|

#### Criar usuario
| URL    | /register       |
|--------|-----------------|
| método | POST            |

| MODELO | EXEMPLO         |
|--------|-----------------|
| name   | Carol           |
| age    | 30              |
| email  | carol@gmail.com |

* *modelo name é do tipo String*
* *modelo age é do tipo Number **>=18***
* *modelo email é do tipo String*

#### Criar configuração de usuario

* para acessar essa rota precisa ter um **id** válido de um usuario criado

| URL          | /config/:id |
|--------------|-------------|
| método       | POST        |


| MODELO       | EXEMPLO     |
|--------------|-------------|
| theme        | Dark        |
| notification | false       |

* *modelo theme tem três opções e é do tipo String: "Dark", "Medium", "Light"*
* *modelo notification é do tipo String*
* *o ID gerado aparecerá na tabela do usuario que foi colocado como params na url*

#### Listar usuarios
| URL    | /users |
|--------|--------|
| método | GET    |
