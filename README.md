# Finances-back

## Requisitos
Para a execução desse projeto será necessário as seguintes ferramentas:

- Obrigatórios
  - [PostgresSQL](https://www.postgresql.org/)
- Não obrigatórios, mas recomendados
  - [Docker](https://docs.docker.com/)

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [PostgresSQL](#postgressql)
  - [Iniciar Container](#iniciar-container)
  - [Parar Container](#parar-container)
- [Docker](#docker)
- [Iniciar Projeto](#iniciar-o-projeto)


### PostgresSQL
  Para a execução desse projeto será necessário que você possua uma versão do postgres instalado.
  Para usar a configuração default pré configurada pelos desenvolvedores precisa ser utilizado o seguinte script:

  ```$ docker-compose up -d```

#### Iniciar Container
  Para inicar um container precisa ser utilizar o seguinte script:

  ```$ docker-compose start```
#### Parar Container
  Para parar o contianer precisa ser utilizado o seguinte script:
  
  ```$ docker-compose stop```

### Docker
  Para a instalação do Docker siga as [instruções](https://docs.docker.com/engine/install/).

  Para instalação do docker-compose siga as [instruções](https://docs.docker.com/compose/install/).

### Iniciar o projeto
  Antes de tudo é importante da o yarn

  ``` $ yarn ```

  Depois você precisa rodar as migrations 
  ```$ yarn migration ```

  Depois já pode rodar o projeto.

  ``` $ yarn dev ```
