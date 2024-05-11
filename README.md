<div align="center">
  <img width="70%" src="https://github.com/LuisHenriqueDaSilv/QuestionIt/blob/main/git/Prints/desktop.png?raw=true"/>
  <h1>QuestionIt</h1>
  <strong>Sistema de perguntas e respostas desenvolvido utilizando Flask no backend e ReactJs (Setup com ViteJS) no Fronted.</strong>
</div>
</br>

## Informações do projeto

<p>Este projeto foi desenvolvido com o intuito de praticar e exemplificar diversos conceitos do desenvolvimento web full-stack. Entre eles, gerenciamento de banco de dados utilizando migrations e ORM's, gerenciamento de containers docker com docker-compose, configurações iniciais de um servidor Postgres rodando em container, design responsivo em interfaces web e desenvolvimento de API em python.</p>

## Como iniciar
**<p>Para executar o projeto é necessário ter instalado na sua máquina as seguintes ferramentas:</p>**
- [NodeJs](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker-Compose](https://docs.docker.com/compose/)
- [git](https://git-scm.com/) Apenas para clonar o repositório (Opcional)

</br>
<p>Tendo todas as ferramentas necessárias instaladas em sua máquina, execute os seguintes comandos em seu terminal para rodar a aplicação em um ambiente de desenvolvimento/testes (Não produção) </p>

```bash
git clone https://github.com/LuisHenriqueDaSilv/QuestionIt.git # Clona o respositório em sua maquina
cd ./QuestionIt/backend # Entra no diretório onde esta salvo o Backend
docker compose up -d --build # Inicia o servidor Postgres (banco de dados) e a aplicação flask, como descrito no arquivo docker-compose.yaml
cd ../web/ #Entra no diretório onde esta salvo o frontend
npm install # Instala todas as dependencias necessárias listadas no package.json
npm run dev # Executa o servidor em ambiente de desenvolvimento
```

<p>Caso nenhum imprevisto ocorra durante a execução do projeto, devemos ter os serviços sendo executados nos seguintes endereços locais:</p>

- http://localhost:3003 - Frontend (Aplicação React) 
- http://localhost:3000 - Backend (Servidor Flask)
- http://localhost:5432 - Postgres (Banco de dados)
