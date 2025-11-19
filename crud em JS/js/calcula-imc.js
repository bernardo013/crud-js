var pacientes = document.querySelectorAll(".paciente");
var btn = document.querySelector(".botao.bto-principal"); // corrected

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = parseFloat(tdPeso.textContent);

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = parseFloat(tdAltura.textContent);

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);
 
    if (!pesoValido) {
        tdIMC.textContent = "peso inválido!";
        pesoValido = false;
        paciente.style.backgroundColor = "red";
    }

    if (!alturaValido) {
        tdIMC.textContent = "altura inválida!";
        alturaValido = false;
        paciente.style.backgroundColor = "lightcoral";
    }

    if (pesoValido && alturaValido) {
        var imc = calculaIMC(peso, altura);
        tdIMC.textContent = imc;
    }
}

function calculaIMC(peso, altura) {
    var imc;

    imc = peso / (altura * altura);

    return imc.toFixed(2);

}

function validaPeso(peso) {
    if(peso >=0 && peso <= 1000) 
    {
        return true 
    }
     else 
    {
        return false
    }

}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.00)
    {
        return true;
    }
    else 
    {
        return false;
    }
}
