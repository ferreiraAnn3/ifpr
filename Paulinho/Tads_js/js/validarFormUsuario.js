//Selecionar o formulario  e o paragrafo de mensagens

const form = document.getElementById("formUsuario");
const mensagemForm = document.getElementById("mensagemForm");

//Adiciona evento de 'submit'
form.addEventListener("submit",(erroPreenchimento) =>{
    erroPreenchimento.preventDefault();//impede o envio automatico(recarregamento da pagina)

    //capturar os vaores digitados e remover espaços extras
    const nomeUsuario = document.getElementById("nomeUsuario").value.trim();
    const emailUsuario = document.getElementById("emailUsuario").value.trim();
    const senhaUsuario = document.getElementById("senhaUsuario").value.trim();

    //verificar se todos os campos foram preenchidos
    if(nomeUsuario === "" || emailUsuario === "" || senhaUsuario === ""){
        mensagemForm.textContent = "Atenção! Todos os campos são obrigatórios.";
        mensagemForm.style.color = "red";
    }

    //Verificar tamanho minimo da senha
    else if(senhaUsuario.length < 6){
        mensagemForm.textContent = "A senha deve possuir, no mínimo, 6 caracteres.";
        mensagemForm.style.color = "orange";    }

    //Verificar se o email possui "@"
    else if(!emailUsuario.includes("@")){
        mensagemForm.textContent = "Digite um email válido.";
        mensagemForm.style.color = "purple";    }

    // Caso o preenchimento estiver correto,
    else{
        mensagemForm.textContent = "Usuário cadastrado com sucesso!";
        mensagemForm.style.color = "green";   
        form.reset();
    }
});