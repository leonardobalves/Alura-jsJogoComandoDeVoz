const menorValor = 1;
const maiorValor = 100;

const gerarNumeroAleatorio = () => {
    return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

const numeroSecreto = gerarNumeroAleatorio();

console.log(numeroSecreto);