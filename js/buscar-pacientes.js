var botaoBuscar = document.querySelector("#buscar-pacientes")

botaoBuscar.addEventListener("click",function(){
    
    var xhr = new XMLHttpRequest();
    var erroAjax = document.querySelector("#erroAjax");

    xhr.open('GET',"https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load",function(){

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            erroAjax.classList.remove("mensagens-erro");

            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(function(paciente){
                adicionarPacienteNaTabela(paciente);
            }) 
        }else{
            console.warn(xhr.status);
            
            erroAjax.classList.remove("invisivel");
            erroAjax.classList.add("mensagens-erro")
        }
        

    });
    
    xhr.send();
})