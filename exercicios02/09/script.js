function dividirTurmas(){

    let ipNumPessoas = document.querySelector("#ipNumPessoas")
    let ipNumTurmas = document.querySelector("#ipNumTurmas")
    let resultado = document.querySelector("#resultado")

    resultado.innerHTML = "Quantidade de pessoas por turma: " + parseInt(ipNumPessoas.value / ipNumTurmas.value) + 
                            "<br>Quantidade de pessoas sem turma: " + Number(ipNumPessoas.value % ipNumTurmas.value)
}

let btnCalcular = document.querySelector("#btnCalcular").addEventListener('click', ()=>{
    dividirTurmas()
})