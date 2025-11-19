var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) { 
event.preventDefault(); 

var form = document.querySelector('#form-adiciona');
var paciente = getInfoForm(form);



var erros = validaPaciente(paciente);
console.log(erros)
if(erros.length > 0 ) 
    {
     exibeMensagemErro(erros);
     return
    }

//adiciona o paciente na tabela
adicionarPacienteNaTabela(paciente)

form.reset();

var ul = document.querySelector("#mensagens-erro");
ul.innerHTML = ""
});
    


function adicionarPacienteNaTabela(pacinte){
    var pacienteTr = montaTr(pacinte);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function exibeMensagemErro(erros){
    var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = ''; 

        erros.forEach(function(erro) {
            var li = document.createElement('li');
            li.textContent = erro;
            ul.appendChild(li);
        })


}

function getInfoForm(form) {    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)

    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");
        
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = []

    if(!validaPeso(paciente.peso)) {
       erros.push("Peso inválido ")     
    }

    if(!validaAltura(paciente.altura)) {
         erros.push("Altura Inválida!")
    } 

    if(paciente.nome.length == 0) {
        erros.push("nome Inválido!")
    }

    if(paciente.gordura.length == 0 ) {
        erros.push("gordura não pode ser em branco")
    }
    if(paciente.peso.length == 0 ) {
        erros.push("peso não pode ser em branco")
    }
    if(paciente.altura.length == 0 ) {
        erros.push("altura não pode ser em branco")
    }


    return erros;
}
