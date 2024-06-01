function verificarAtingimentoMetas() {

    let ipValorVendido = document.querySelector("#ipValorVendido")
    let ipValorMetaMinima = document.querySelector("#ipValorMetaMinima")
    let ipValorMeta = document.querySelector("#ipValorMeta")
    let resultado = document.querySelector("#resultado")

    ipValorVendido = Number(ipValorVendido.value)
    ipValorMetaMinima = Number(ipValorMetaMinima.value)
    ipValorMeta = Number(ipValorMeta.value)

    if (ipValorMetaMinima > ipValorMeta) {
        resultado.textContent = "Valor da meta mínima tem que ser menor que meta padrão."
    }
    else {
        if (ipValorVendido >= ipValorMetaMinima) {
            if (ipValorVendido >= ipValorMeta) {
                resultado.textContent = "Meta mínima e meta atingidas!"
            }
            else {
                resultado.textContent = "Meta mínima atingida."
            }
        }
        else {
            resultado.textContent = "Metas não atingidas..."
        }
        resultado.innerHTML = resultado.textContent + "<br>Percentual de atingimento da meta: " + (ipValorVendido / ipValorMeta) + "%" +
            "<br>Percentual de atingimento da meta mínima: " + (ipValorVendido / ipValorMetaMinima) + "%"
    }
}
let btnVerificar = document.querySelector("#btnVerificar").onclick = function () {
    verificarAtingimentoMetas()
}