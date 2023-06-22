
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const H_canvas = canvas.height
const W_canvas = canvas.width

let pj1 = pj2 = 0

const teclado  = {
    cima: false,
    baixo: false,
    esquerda: false,
    direita: false

}

const jogador = new Pad(ctx,teclado)
const bola = new Bola(ctx,jogador)
const cpu = new Cpu(ctx,bola)





window.addEventListener("keydown",(event)=>{
    let tecla  =event.key

    if (tecla == "ArrowUp"){
        teclado.cima = true
    }
    if (tecla == "ArrowDown"){
        teclado.baixo = true
    }
    if (tecla == "ArrowLeft"){
        teclado.esquerda = true
    }
    if (tecla == "ArrowRight"){
        teclado.direita= true
    }
})


window.addEventListener("keyup",(event)=>{
    let tecla  =event.key

    if (tecla == "ArrowUp"){
        teclado.cima = false
    }
    if (tecla == "ArrowDown"){
        teclado.baixo = false
    }
    if (tecla == "ArrowLeft"){
        teclado.esquerda = false
    }
    if (tecla == "ArrowRight"){
        teclado.direita= false
    }
})


const placar = () =>{
    document.querySelector('.pj1').innerHTML = pj1
    document.querySelector('.pj2').innerHTML = pj2
}

const game=()=>{

    ctx.clearRect(0,0,W_canvas,H_canvas)
    jogador.desenhar()
    bola.desenhar()
    cpu.desenhar()
    placar()
    requestAnimationFrame(game)

}
requestAnimationFrame(game)