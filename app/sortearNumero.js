const menorValor = 1
const maiorValor = 100

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número secreto:', numeroSecreto);

const elementoMenorValor = document.getElementById('valor-menor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('valor-maior')
elementoMaiorValor.innerHTML = maiorValor
