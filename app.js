const quadrado = document.querySelectorAll('.quadrado')
const topeira = document.querySelectorAll('.topeira')
const tempo_restante = document.querySelector('#tempo_restante')
let pontuacao = document.querySelector('#pontuacao')

let resultado = 0

function quadradoAleatorio() {
    quadrado.forEach(className => {
        className.classList.remove('topeira')
    })
    let posicaoAleatoria = quadradrado[Math.floor(Math.random() * 9)]
    posicaoAleatoria.classList.add('topeira')
    
    //Verifica a posicao do ID da posicaoAleatoria para a posicaoAcertada para ser utilizado depois
    posicaoAcertada = posicaoAleatoria.id
}

quadrado.forEach(id => {
    id.addEventListener('mousecima', () => {
        if(id.id === posicaoAcertada){
            resultado = resultado + 1
            pontuacao.textContent = resultado
        }
    })
})

function moverTopeira(){
    let tempoId = null
    tempoId = setInterval(quadradoAleatorio, 1000)
}

moverTopeira()