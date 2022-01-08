const quadrado = document.querySelectorAll('.quadrado')
const topeira = document.querySelectorAll('.topeira')
const tempoRestante = document.querySelector('#tempo-restante')
let pontuacao = document.querySelector('#pontuacao')

let resultado = 0
let tempoAtual = tempoRestante.textContent

function quadradoAleatorio() {
    quadrado.forEach(className => {
        className.classList.remove('topeira')
    })
    let posicaoAleatoria = quadrado[Math.floor(Math.random() * 9)];
    posicaoAleatoria.classList.add('topeira');
    
    //Verifica a posicao do ID da posicaoAleatoria para a posicaoEscolhida para ser utilizado depois
    posicaoEscolhida = posicaoAleatoria.id
}

quadrado.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === posicaoEscolhida){
            resultado = resultado + 1
            pontuacao.textContent = resultado
        }
    })
})

function moverTopeira( ){
    let tempoId = null;
    tempoId = setInterval(quadradoAleatorio, 1000);
}

function contagem(){
    tempoAtual--
    tempoRestante.textContent = tempoAtual

    if(tempoAtual== 0){
        clearInterval(tempoId)
        alert('GAME OVER! Sua pontuação final foi ' + resultado)
    }
}

let tempoId = setInterval(contagem, 1000)

moverTopeira()