
let titulo = document.querySelector(".titulo");

//Criando array 
let pacientes = document.querySelectorAll(".paciente");

for(let i= 0; i < pacientes.length; i++){

    paciente= pacientes[i];

    //Peso
    let tdPeso = paciente.querySelector(".info-peso");
    let pesoPaciente = tdPeso.textContent; 

    //Altura
    let tdAltura = paciente.querySelector(".info-altura");
    let alturaPaciente = tdAltura.textContent;

    //Criando variaveis para validação
    let pesoValido = validaPeso(pesoPaciente);
    let alturaValida = validaAltura(alturaPaciente);

    //Campo Imc
    let tdImc = paciente.querySelector(".info-imc");

    //Se false muda o valor da variavel- printar na tela mensagem
    if (!pesoValido){
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
        
    }

    if (!alturaValida){
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    
    }

    //Se true - Calcula Imc e printa na tela
    if(alturaValida && pesoValido){
        let imcPaciente = calculaImc(pesoPaciente,alturaPaciente);
        tdImc.textContent = imcPaciente;
    }
}

function validaPeso(peso){
    if (peso > 0 && peso < 1000){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >0 && altura <3.0){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura){
    var valorImc = 0;
    valorImc = parseFloat(peso/Math.pow(altura,2));
    return valorImc.toFixed(2).replace(".",",");
}
