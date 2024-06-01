function verificarNota() {
    let ipNota = document.querySelector("#ipNota")
    let resultado = document.querySelector("#resultado")

    ipNota = Number(ipNota.value)
    if(ipNota < 6 && ipNota > 4){
        resultado.textContent = "Precisa fazer prova substitutiva"
    }
    else if(ipNota >= 6){
        resultado.textContent = "Aprovado"
    }
    else{
        resultado.textContent = "Reprovado"
    }
}
let btnVerificar = document.querySelector("#btnVerificar").addEventListener('click', ()=>{
    verificarNota()
})