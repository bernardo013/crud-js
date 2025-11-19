<h1>Sistema CRUD simples para gerenciamento de pacientes</h1>

<h2>Funcionalidades Principais:</h2>

✔️ **Cadastrar pacientes**

*Formulário com validação de dados (peso, altura, nome, gordura).
Inserção dinâmica na tabela com JavaScript.*

✔️ **Calcular IMC automaticamente**

*Script dedicado (calcula-imc.js) que percorre os pacientes e exibe IMC válido ou mensagens de erro.*

✔️ **Filtrar pacientes**

*Barra de busca filtrando resultados em tempo real.*
*Implementação via input + regex, usando o arquivo filtra.js.*

✔️ **Remover pacientes**

*Remoção com duplo clique na linha da tabela.
Animação de fade-out.*

✔️ **Buscar pacientes de uma API**

*Requisição assíncrona com XMLHttpRequest em buscar-paciente.js.
Adição automática dos pacientes retornados.*

  
<h2>Dependências:</h2>


**body-parser** – leitura de JSON

**cors** – permitir requisições externas

**pacientes.json** – arquivo para simular base de dados local.

<h3>Instale as dependências do node e a biblioteca para json-server para rodar a aplicação</h3>

1.npm install

2.npm  install  JSON-server

**Abra o arquivo HTML**
   
1.index.html

