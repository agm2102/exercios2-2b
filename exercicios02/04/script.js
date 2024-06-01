
function calcular() {
    let ipPrimeiroSabor = document.querySelector("#ipPrimeiroSabor");
    let ipSegundoSabor = document.querySelector("#ipSegundoSabor");
    let ipTerceiroSabor = document.querySelector("#ipTerceiroSabor");
    let ipQuartoSabor = document.querySelector("#ipQuartoSabor");
    let ipQtdRefri = document.querySelector("#ipQtdRefri")
    let resultado = document.querySelector("#resultado")

    let listaSaboresEscolhidos = [String(ipPrimeiroSabor.value), String(ipSegundoSabor.value), String(ipTerceiroSabor.value), String(ipQuartoSabor.value)]

    ipQtdRefri = Number(ipQtdRefri.value)
    resultado.textContent = "Sabores de Pizza: "

    for (let i = 0; i < listaSaboresEscolhidos.length; i++) {
        switch (listaSaboresEscolhidos[i]) {
            case "1":
                listaSaboresEscolhidos[i] = "Calabresa"
                break;
            case "2":
                listaSaboresEscolhidos[i] = "Quatro Queijos"
                break;
            case "3":
                listaSaboresEscolhidos[i] = "Moda da Casa"
                break;
            case "4":
                listaSaboresEscolhidos[i] = "Catufilé"
                break;
            case "5":
                listaSaboresEscolhidos[i] = "Strogonoff"
                break;
        }

        if ((Number(listaSaboresEscolhidos[i]) < 1) || Number(listaSaboresEscolhidos[i]) > 5) {
            resultado.textContent = "Por favor escolha um sabor do menu."
            return
        }
    }

    listaSaboresEscolhidos = new Set(listaSaboresEscolhidos)
    listaSaboresEscolhidos = Array.from(listaSaboresEscolhidos)

    for (let i = 0; i < listaSaboresEscolhidos.length; i++) {
        if (i == listaSaboresEscolhidos.length - 1) {
            resultado.textContent = resultado.textContent + listaSaboresEscolhidos[i]
        }
        else if (i < listaSaboresEscolhidos.length - 1) {
            resultado.textContent = resultado.textContent + listaSaboresEscolhidos[i]
            if (i < listaSaboresEscolhidos.length - 1) {
                resultado.textContent = resultado.textContent + ", "
            }
        }
    }
    resultado.innerHTML = resultado.textContent + "<br>Quantidades de Refris: " + ipQtdRefri + "<br>Valor a pagar: R$" + ((listaSaboresEscolhidos.length * 12) + (ipQtdRefri * 7))
}
let btPedir = document.querySelector("#btPedir").addEventListener('click', () => {
    calcular()
})