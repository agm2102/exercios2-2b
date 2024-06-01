
function calcular() {
    let ipPessoas = document.querySelector("#ipPessoas")
    let resultado = document.querySelector("#resultado")

    ipPessoas = Number(ipPessoas.value)
    resultado.textContent = "Serão necessarios "+ ipPessoas * 2 + " ovos e " + (ipPessoas * 0.50).toFixed(2) + "Kg de queijo"
}
let btCalcular = document.querySelector("#btCalcular").addEventListener('click', ()=>{
    calcular()
})