function verificarImparPar(){
     
    let ipValor = document.querySelector("#ipValor")
    let resultado = document.querySelector("#resultado")

    if(Number(ipValor.value) % 2 == 0){
        resultado.textContent = ipValor.value + " é par"
    }
    else{
        resultado.textContent = ipValor.value + " é ímpar"
    }
}
let btnVerificar = document.querySelector("#btnVerificar").addEventListener('click', ()=>{
    verificarImparPar()
})