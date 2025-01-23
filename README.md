![blip cover img](https://i.ibb.co/4tgV4r9/blip-img.png)
# Desafio Blip - Contato inteligente com consulta à API pública do GitHub

  

Este repositório contém a API desenvolvida como parte do desafio para me tornar uma Blipper! A API busca repositórios no GitHub `takenet`, filtra aqueles escritos em C# e retorna os 5 repositórios mais antigos. A API foi criada utilizando **Express** e está hospedada no **Railway**.

  

## Estrutura do Projeto

  

- **`/api`**: Diretório que contém a estrutura da api

- **`/flow`**: Diretório que contém o fluxo extraído do chatbot

- **`.env`**: Arquivo para armazenar variáveis de ambiente, como o GitHub Token.

- **`package.json`**: Arquivo de configuração do projeto com dependências e scripts.

  

## API Online

  

A API está hospedada no Railway e pode ser acessada através do seguinte link:

  

- [API](https://blip-challenge-production.up.railway.app/repos)

  

A requisição feita pela API busca os **5 primeiros repositórios** públicos do usuário `takenet` no GitHub, ordenados pela data de criação (do mais antigo ao mais recente).

Em seguida, a API já filtra os repositórios para mostrar apenas os escritos em **C#** e retorna um array com os 05 primeiros repositórios.

  

## Como Rodar Localmente

  

Para rodar a API localmente, siga os passos abaixo:

  

#### 1. Clone o repositório

  

```bash

git clone https://github.com/chrixtianny/blip-challenge.git

cd blip-challenge

```

#### 2. Instale as dependências

```bash

npm install

```

  

#### 3. Configure o arquivo .env

```

GIT_TOKEN=seu-github-token

```

#### 4. Inicie o servidor

```

node api/server.js

```

  

### Realizando a Primeira Requisição

  

A API realiza uma requisição para o GitHub para buscar os repositórios públicos do usuário `takenet`, ordenados pela data de criação, do mais antigo ao mais recente. A requisição é feita para o endpoint:

  

```http

GET https://api.github.com/users/takenet/repos?sort=created&direction=asc

```

A requisição já está configurada para ordenar os resultados de forma crescente pela data de criação (sort=created&direction=asc), o que significa que o repositório mais antigo será retornado primeiro.

  

- ##### GitHub Token é Obrigatório

Para realizar essa requisição, é necessário fornecer um GitHub Token para autenticar a requisição. O token deve ser incluído no arquivo .env, como mencionado anteriormente.

  

### A resposta da API é então filtrada para exibir apenas repositórios escritos em C#, e é retornado um array com os 5 primeiros repositórios.

Exemplo de resposta

```array

[

{

"fullname": "takenet/repo-1",

"description": "Descrição do repositório 1",

"url": "https://github.com/takenet/repo-1",

"created_at": "2023-01-01T00:00:00Z",

"avatar": "https://avatars.githubusercontent.com/u/1234567?v=4"

},

...

]

```

  

### Erros

  

Se algum erro ocorrer durante a execução da requisição ao GitHub, a API irá capturar o erro e retornar uma mensagem indicando o problema. O tipo de erro será descrito de forma clara para o usuário, com o código de status apropriado e a mensagem de erro detalhada.
##### Erros Comuns
- 401 - Unauthorized:
Ocorre quando o token do GitHub (GIT_TOKEN) não é fornecido ou é inválido.
#### Certifique-se de incluir um token válido no arquivo .env.

- 500 - Internal Server Error:
Indica que houve algum erro interno no servidor, como falha de conexão ou problema ao processar a requisição.
#### Verifique os logs para identificar o problema ou confira a conexão com o GitHub.

### Imagens do Carrossel de Valores

Abaixo estão as imagens utilizadas no carrossel de valores:

1. [Take.Be](https://i.ibb.co/FXq6Qjr/Component-1.png)
2. [Take.Team](https://i.ibb.co/WPf9NWn/Component-2.png)
3. [Take.Excellence](https://i.ibb.co/126qYF1/Component-3.png)
4. [Take.Charge](https://i.ibb.co/s5WTKQL/Component-4.png)
5. [Take.Simple](https://i.ibb.co/X5YVwmM/Component-5.png)
6. [Take.Higher](https://i.ibb.co/Rcsds7w/Component-6.png)
7. [Desafio](https://i.ibb.co/NLmVr39/Component-7.png)
