const quadrado = document.querySelectorAll('.quadrado')
const topeira = document.querySelectorAll('.topeira')
const tempo_restante = document.querySelector('#tempo_restante')
let pontuacao = document.querySelector('#pontuacao')

let resultado = 0

function quadradoAleatorio() {
    quadradoAleatorio.forEach(className => {
        className.classList.remove('mole')
    })
    let posicaoAleatoria = quadradrado[Math.floor(Math.random() * 9)]
    posicaoAleatoria.classList.add('mole')


    //Verifica a posicao do ID da posicaoAleatoria para a posicaoAcertada
    //para ser utilizado depois
    posicaoAcertada = posicaoAleatoria.id


}

quadrado.forEach(id => {
    id.addEventListener
})