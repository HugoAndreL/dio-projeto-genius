let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Criando a ordem aleatória de cores
let shuffleOrder = () => {
    let colorRandom = Math.floor(Math.random() * 4);
    order[order.length] = colorRandom;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acender a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
    element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
    element.classList.remove('selected');
    }, number + 250);
}

// Checa se os botões clicados são os mesmos da ordem
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

// Função de clique na cor
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createElement(color).classList.add('selected');

    setTimeout(() => {
        createElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

// Função que retorna a cor
let createElement = (color) => {
    // 0 - verde
    if (color == 0) {
        return green;
    }
    // 1 - vermelho
    else if (color == 1) {
        return red;
    }
    // 2 - amarelo
    else if (color == 2) {
        return yellow;
    }
    // 3 - azul
    else if (color == 3) {
        return blue;
    }
}

// Função para ir para o proximo level
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}.\n Game Over.\n Clique em Ok para iniciar o jogo`);
    order = [];
    clickedOrder = [];
    playGame();
}

// Função de iniciar um novo jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis');
    score = 0;
    nextLevel();
}

// Adicionando os clique das cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Iniciando o game
playGame();