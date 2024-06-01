function calcular() {

    let ipValorUm = document.querySelector("#ipValorUm")
    let ipValorDois = document.querySelector("#ipValorDois")
    let resultado = document.querySelector("#resultado")

    ipValorUm = Number(ipValorUm.value)
    ipValorDois = Number(ipValorDois.value)

    resultado.innerHTML = "Soma = " + (ipValorDois + ipValorDois) + "<br>" +
        "Subtração = " + (ipValorUm - ipValorDois) + "<br>" +
        "Multiplicação = " + (ipValorUm * ipValorDois) + "<br>" +
        "Divisão = " + (ipValorUm / ipValorDois)
}
let btCalcular = document.querySelector("#btCalcular").addEventListener('click', () => {
    calcular()
})