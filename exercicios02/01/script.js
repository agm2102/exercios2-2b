
function calcularAumentoCotacao() {
    let ipValorCotacao = document.querySelector("#ipValorCotacao")
    let resultado = document.querySelector("#resultado")
    let btCalcular = document.querySelector("#btCalcular");
    ipValorCotacao = Number(ipValorCotacao.value)

    resultado.innerHTML = "Aumento de 1% = " + (ipValorCotacao + ((ipValorCotacao * 1) / 100)) + "<br>" +
        "Aumento de 2% = " + (ipValorCotacao + ((ipValorCotacao * 2) / 100)) + "<br>" +
        "Aumento de 5% = " + (ipValorCotacao + ((ipValorCotacao * 5) / 100)) + "<br>" +
        "Aumento de 10% = " + (ipValorCotacao + ((ipValorCotacao * 10) / 100)) + "<br>"
}
btCalcular.addEventListener('click', () => {
    calcularAumentoCotacao()
})