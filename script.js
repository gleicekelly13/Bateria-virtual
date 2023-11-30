'use strict';

const sons = { //Objeto sons, mapeando letras para arquivos de som
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

function criarDiv(texto) {
    const div = document.createElement('div'); //Cria um novo elemento div
    div.classList.add('key'); //Adiciona a classe 'key' ao elemento div
    div.textContent = texto;
    div.id = texto;  //o ID da div é definido como sendo o mesmo que o texto (letra)
    document.getElementById('container').appendChild(div); // Adiciona o elemento div ao elemento com o ID 'container'
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

    const letraPermitida = sons.hasOwnProperty(letra); //##
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}

exibir(sons); //Chama a função exibir para criar as divs iniciais para cada tecla.

//Ambas chamam a função  para processar as interações do usuário
document.getElementById('container').addEventListener('click', ativarDiv); // Adiciona ouvintes de eventos para clicks no container

window.addEventListener('keyup', ativarDiv); //Adiciona ouvintes de eventos para eventos de tecla solta (keyup) na janela.


/*
* Function criarDiv // Cria uma <div> para cada letra (tecla) no objeto `sons`. A classe `key` e o ID da div são definidos, 
e a div é adicionada ao elemento com o ID 'container'.

* Function exibir// Usa Object.keys(sons) para obter todas as chaves do objeto sons (letras A, S, D, etc.) 
e, em seguida, aplica a função criarDiv a cada chave usando `forEach`.

* Object.keys é uma função integrada do JavaScript que retorna um array contendo as chaves de um objeto.

* function tocarSom// Esta função cria um elemento de áudio e o configura para 
tocar o som associado à letra passada como argumento.

*function adicionarEfeito// Esta função adiciona a classe 'active' à div correspondente à letra (tecla) 
passada como argumento.

*function removerEfeito// Esta função adiciona um ouvinte de evento transitionend à div correspondente à letra. 
Quando a transição CSS é concluída, a classe 'active' é removida.

*function ativarDiv// Esta função é responsável por ativar uma div quando ocorre um clique ('click') ou uma tecla é pressionada ('keyup'). Ela obtém a letra correspondente e, se for permitida (verificada usando hasOwnProperty), adiciona o efeito, toca o som e inicia o processo de remoção do efeito.

* ## `hasOwnProperty` é um método disponível em todos os objetos JavaScript. Ele é usado para verificar se um objeto possui uma propriedade específica. `sons` é um objeto que mapeia letras para arquivos de som. `letra` é a chave que está sendo verificada para determinar se está presente em `sons`. letraPermitida será true se a letra estiver presente em sons e false caso contrário.
*/