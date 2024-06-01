
function verificarMaisVelho() {

    let ipPrimeiraPessoa = document.querySelector("#ipPrimeiraPessoa")
    let ipSegundaPessoa = document.querySelector("#ipSegundaPessoa")
    let ipTerceiraPessoa = document.querySelector("#ipTerceiraPessoa")
    let ipAnoNascimentoUm = document.querySelector("#ipAnoNascimentoUm")
    let ipAnoNascimentoDois = document.querySelector("#ipAnoNascimentoDois")
    let ipAnoNascimentoTres = document.querySelector("#ipAnoNascimentoTres")
    let resultado = document.querySelector("#resultado")

    ipAnoNascimentoUm = Number(ipAnoNascimentoUm.value)
    ipAnoNascimentoDois = Number(ipAnoNascimentoDois.value)
    ipAnoNascimentoTres = Number(ipAnoNascimentoTres.value)

    let menorAno = ipAnoNascimentoUm
    let segundoMenor = ipAnoNascimentoDois;
    let terceiroMenor = ipAnoNascimentoTres;

    let pessoaMaisVelha = ipPrimeiraPessoa.value
    let segundaMaisVelha = ipSegundaPessoa.value
    let terceiraMaisVelha = ipTerceiraPessoa.value

    if (menorAno > ipAnoNascimentoDois) {

        menorAno = ipAnoNascimentoDois
        segundoMenor = ipAnoNascimentoUm

        pessoaMaisVelha = ipSegundaPessoa.value
        segundaMaisVelha = ipPrimeiraPessoa.value
    }
    
    if (menorAno > ipAnoNascimentoTres) {

        menorAno = ipAnoNascimentoTres
        terceiroMenor = ipAnoNascimentoUm

        terceiraMaisVelha = ipPrimeiraPessoa.value
        pessoaMaisVelha = ipTerceiraPessoa.value

    } 
    if(segundoMenor > terceiroMenor){
        let aux1 = segundoMenor
        let aux2 = segundaMaisVelha

        segundoMenor = terceiroMenor
        terceiroMenor = aux1

        segundaMaisVelha = terceiraMaisVelha
        terceiraMaisVelha = aux2
    }   

    resultado.innerHTML = "Pessoa mais velha: " + pessoaMaisVelha + " - idade: " + (2024 - menorAno) + " anos <br>" +
        "Segunda Pessoa: " + segundaMaisVelha + " - idade: " + (2024 - segundoMenor) + " anos <br>" +
        "Terceira Pessoa: " + terceiraMaisVelha + " - idade: " + (2024 - terceiroMenor) + " anos <br>"
}

let btnVerificar = document.querySelector("#btnVerificar").addEventListener('click', () => {
    verificarMaisVelho()
})
