function valorValido(chute) {
    const numero = +chute;
    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += `
            <div>
                Valor inválido
            </div>
        `;
        return;
    }

    if(numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
            <div>
                Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}
            </div>
        `;
        return;
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secrto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
                <div>
                    O número secreto é menor <i class="fa-solid fa-arrow-up"></i>
                </div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div>
                O número secreto é maior <i class="fa-solid fa-arrow-up"></i>
            </div>
        `;
    }

}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})