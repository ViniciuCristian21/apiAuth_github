# Autenticação para o github

## Usando node com
- Fastify
- github OAuth
- Typescript
- prisma
- JWT
#### e outros...

## Como testar?

<small>Inicialmente você prescisara ler o <a href="https://docs.github.com/pt/apps/creating-github-apps/writing-code-for-a-github-app/building-a-login-with-github-button-with-a-github-app">Tutorial</a> de criação de aplicações do github para poder testar!. depois de criar a aplicação segue o <a href="https://docs.github.com/pt/apps/creating-github-apps/writing-code-for-a-github-app/building-a-login-with-github-button-with-a-github-app">Tutorial</a> de como obter o client_id, após obter segue o tutorial.</small>

## iniciando o projeto
```
npm install

npm run dev
```

## Em alguma ferramenta de requisições HTTP ex: Insomnia ou Postman

```
POST
{
    code: code
}
http://localhost:3333/register

Response
{
    token: 'Barer 5d15a1d5a1d5a15d15a15d15a15d1a51d5a51d5a5d15a5a6f62a62f6a26f26a26f2a62f6a26f26a26f6a2f62a62f6a6f26a6f6a26f26a6f6a2f6af26af26a26f26a2f62a6f62a6262f62a62f6a62f6a2f62a6f2af2fa'
}
```

<small><stonger>OBS: O code usado na requisição é aquele que você pega no tutorial do client_id, seguindo o tutorial é possivel pega-lo.</stonger></small>

<div align="center" ><font color="green">Em breve um SWAGGER com uma documentação especifica e um abiente para testar a API.</font></div>