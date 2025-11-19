var botaoAdicionar = document.querySelector('#buscar-pacientes');
botaoAdicionar.addEventListener("click", function(){
   var xhr = new XMLHttpRequest;

    xhr.open("GET", "http://localhost:59277/pacientes");

    xhr.addEventListener('load', function(){
        const resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);


        pacientes.forEach( function(paciente){
            adicionarPacienteNaTabela(paciente)
        })
    })

    xhr.send()

})