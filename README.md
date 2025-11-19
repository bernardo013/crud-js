sistema CRUD simples para gerenciamento de pacientes, incluindo cálculo de IMC, filtragem dinâmica, busca em API e validações de formulário. Foi desenvolvido para fins de estudo, utilizando apenas tecnologias web fundamentais e alguns recursos adicionais para melhorar a organização e a experiência de desenvolvimento.

Funcionalidades Principais
✔️ Cadastrar pacientes

Formulário com validação de dados (peso, altura, nome, gordura).

Inserção dinâmica na tabela com JavaScript.

✔️ Calcular IMC automaticamente

Script dedicado (calcula-imc.js) que percorre os pacientes e exibe IMC válido ou mensagens de erro.

✔️ Filtrar pacientes

Barra de busca filtrando resultados em tempo real.

Implementação via input + regex, usando o arquivo filtra.js.

✔️ Remover pacientes

Remoção com duplo clique na linha da tabela.

Animação de fade-out.

✔️ Buscar pacientes de uma API

Requisição assíncrona com XMLHttpRequest em buscar-paciente.js.

Adição automática dos pacientes retornados.

🗂️ Estrutura de Pastas
crud em JS/
 ├── index.html
 ├── css/
 │    ├── index.css
 │    └── reset.css
 ├── js/
 │    ├── calcula-imc.js
 │    ├── form.js
 │    ├── filtra.js
 │    └── buscar-paciente.js
 ├── pacientes.json
 ├── node_modules/
 ├── package.json
 └── package-lock.json

🧠 Tecnologias e recursos utilizados
Frontend

HTML5 – Estrutura semântica da página.

CSS3 – Estilização e layout (incluindo reset.css).

JavaScript puro (Vanilla JS) – Toda a lógica do CRUD, IMC, filtros e requisições.

Backend (local)

Node.js (usado para rodar um servidor local)

Dependências:

express – servidor backend simples

body-parser – leitura de JSON

cors – permitir requisições externas

pacientes.json – arquivo para simular base de dados local.

Instale as dependências do node e a biblioteca para json-server para rodar a aplicação 
1.npm install
2.npm install json-server

3. Abra o arquivo HTML
index.html

