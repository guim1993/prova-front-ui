# PROVA FRONT UI

Projeto em React, para avaliação de conhecimento.

## Requerimentos

Para o desenvolvimento, você precisa ter Node.js instalado em sua máquina.

Para testar a versão de produção, é recomendado instalar o [serve](https://www.npmjs.com/package/serve), mas pode ser qualquer outro servidor (se usar um servidor como Apache, cuidar os paths, "homepage" - package.json).

O projeto utiliza o plugin [Editorconfig](http://editorconfig.org/), recomendado ter instalado (opcional).

## Instalação

    $ git clone https://github.com/guim1993/prova-front-ui.git
    $ cd prova-front-ui
    $ npm install

## Ambiente de desenvolvimento

    $ npm start

## Build para produção

    $ npm run build

### Testar build para produção

  Caso não tenho um servidor para rodar o projeto

    $ npm install -g serve

  Subir o projeto

    $ serve -s build

## Rodar testes

  Rotina simples de testes do próprio React
  
    $ npm run test
  
  E siga os passos que o console disponibilizar

## Tecnologias

### HTML / Javascript

- [React](https://reactjs.org/)

### CSS

- [SASS](https://sass-lang.com/)
