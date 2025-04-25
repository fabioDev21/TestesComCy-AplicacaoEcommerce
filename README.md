# Sobre o projeto
Uma suíte de testes afim de validar fluxos básicos na aplicacao Advantage Demo afim de garantir a qualidade do produto.

## Pré-requisitos
Para utilizar esse projeto sem problemas voce irá precisar do Node.js e um gerenciador de pacotes instalado em sua máquina:
Comandos para verificar a versão do Node e npm ( gerenciador de pacotes padrão do Node.js )
```sh
$ node -v
v18.19.1

$ npm -v
9.2.0
```

## Passos para instalação do projeto
Após o clone do projeto em sua máquina, basta ir até a sua central de comandos dentro da pasta do projeto e usar o comando a seguir; Para os usuários de Visual Studio Code, segue a sua seção especial abaixo

- Em sua máquina, combine as teclas: ctrl + j
- Isso irá abrir a central de comando embutida ao VS Code, então rode o comando a seguir
```sh
npm install
```
Isso irá instalar as dependências necessárias para rodar o projeto!

## Passos para rodar os testes
Para rodar os testes, é muito simples. Rode os seguintes comandos em sua área de comandos disponível, são eles:

### Comando para rodar a suíte de testes em Cypress
```sh
npm run cy:open
```
