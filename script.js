'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

function criarDiv(texto) {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`); /* endereço do som, pega {sons, e a [posição letra escolhida]} */
    audio.play();
}

const adicionarEfeito = (letra) => document.getElementById(letra).classList.add('active');

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
}

const ativarDiv = (Event) => {

    let letra = '';
    if(Event.type == 'click') {
        letra = Event.target.id;
    } else {
        letra = Event.key.toUpperCase();
    }

    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}

/*const ativarId = (Event) => {
    const letra = Event.target.id;
    console.log(Event);
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
} */

exibir(sons);

document.getElementById('container').addEventListener('click', ativarDiv);

window.addEventListener('keyup', ativarDiv);