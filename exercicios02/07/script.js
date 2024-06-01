function verificarMaiorMenorIgual() {

    let ipValorUm = document.querySelector("#ipValorUm")
    let ipValorDois = document.querySelector("#ipValorDois")
    let resultado = document.querySelector("#resultado")

    ipValorUm = Number(ipValorUm.value)
    ipValorDois = Number(ipValorDois.value)

    if (ipValorUm > ipValorDois) {
        resultado.textContent = ipValorUm + " é maior que " + ipValorDois
    }
    else if (ipValorUm == ipValorDois) {
        resultado.textContent = ipValorUm + " é igual a " + ipValorDois
    }
    else {
        resultado.textContent = ipValorUm + " é menor que " + ipValorDois
    }
}
let btnVerificar = document.querySelector("#btnVerificar").addEventListener('click', ()=>{
    verificarMaiorMenorIgual()
})