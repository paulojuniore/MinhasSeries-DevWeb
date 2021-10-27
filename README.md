<p align="center">
  <img src="https://raw.githubusercontent.com/paulojuniore/MinhasSeries-DevWeb/master/frontend/src/assets/logo-myseries.png">
  <h2 align="center">Minhas séries</h2>
  <p align="center">"Gerenciamento de filmes/séries assistidos(as) por um usuário."</p>
</p>

Repositório dedicado ao projeto da disciplina Princípios de Desenvolvimento Web  - Computação@UFCG no período 2020.3

O projeto "Minhas séries" tem a finalidade de gerenciar os(as) filmes/séries assistido(a)s por um usuário. Onde o usuário pode: - cadastrar/editar/remover categorias e cadastrar/editar/remover filmes ou séries que por sua vez devem pertencem a uma determinada categoria previamente cadastrada.

## Features

* #### Cadastro de gêneros

O usuário pode cadastrar gêneros, que posteriormente serão usados para cadastrar novas séries/filmes que poderão ser vinculadas a esses gêneros. Todo gênero possui um nome.

* #### Cadastro de filmes/séries

O usuário pode cadastrar novos filmes/séries que serão vinculados obrigatoriamente a um gênero que deve ser previamente cadastrado. Todo filme/série possui nome, gênero e uma classificação de faixa etária.

* #### Editar/Remover gêneros

O usuário pode editar o nome dos gêneros ou então remover o gênero.

* #### Editar/Remover filmes/séries

O usuário pode editar o nome, gênero e classificação do filme/série, ou então remover o filme/série.

* #### Favoritar filmes/séries

O usuário pode favoritar um filme/série que já foi assistido(a) e que o mesmo possui um carinho especial.

## Como executar

Primeiramente é necessário clonar o repositório.
```
git clone https://github.com/paulojuniore/MinhasSeries-DevWeb.git
```

Após clonar o projeto, entre na pasta /frontend:
```
cd frontend
```

e logo após (para instalar as dependências)
```
npm install
```
ou
```
yarn install
```

Por fim, para executar, rode o comando:
```
npm start
```
ou
```
yarn start
```

### IDE

- [VScode](https://code.visualstudio.com/).
