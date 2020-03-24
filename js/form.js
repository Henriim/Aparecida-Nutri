
function stopAction(event){
    event.preventDefault();
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value.replace(",","."),
        altura: form.altura.value.replace(",","."),
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value.replace(",","."),form.altura.value.replace(",","."))
        
    }
    return paciente;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function montaTr(paciente){

    //criando elementos como tr e td's
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome,"info-nome");
    var pesoTd = montaTd(paciente.peso,"info-peso");
    var alturaTd = montaTd(paciente.altura,"info-altura");
    var gorduraTd = montaTd(paciente.gordura,"info-gordura");
    var imcTd = montaTd(paciente.imc,"info-imc");

    //adicionando os elementos filhos Td's dentro do elemento pai Tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function validaPaciente(paciente){

    var erros = []
    
    if (paciente.nome.length == 0) erros.push("Insira seu nome");
    if (!validaPeso(paciente.peso)) erros.push ("Peso inválido");
    if (paciente.peso.length == 0) erros.push("Insira o peso");
    if (!validaAltura(paciente.altura)) erros.push ("Altura inválida");
    if (paciente.altura.length ==0) erros.push("Insira a altura");
    if (paciente.gordura.length == 0) erros.push("Insira a porcentagem de gordura");
    
    return erros;
}


function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });
}



function adicionaPaciente(){
    stopAction(event);

    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
    }

    adicionarPacienteNaTabela(paciente);
    
    // limpando o formulario depois de clicar no botão
    form.reset();

    var mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML="";

}

function adicionarPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

let botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", adicionaPaciente);

