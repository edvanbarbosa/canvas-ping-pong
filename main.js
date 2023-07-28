const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const H_canvas = canvas.height
const W_canvas = canvas.width
const namepj1 = document.querySelector('.name-pj1')
const namepj2 = document.querySelector('.name-pj2')
const btn = document.querySelector('.btn-container button')
const min = document.querySelector('.min')
const seg = document.querySelector('.seg')
let statusCronos = false
let pj1 = pj2 = 0

const audioTheme = new Audio('./songs/musicTheme.mp3')

const playAudio = ()=>{
    audioTheme.play()
    audioTheme.loop
}



const teclado  = {
    cima: false,
    baixo: false,
    esquerda: false,
    direita: false

}

const jogador = new Pad(ctx,teclado)
const jogador2 = new Pad2(ctx,teclado)
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
let verificInit = false
window.addEventListener('keydown',(event)=>{
    if(event.keyCode == 32 && verificInit == false){
        bola.iniciar()
        btn.style.backgroundColor = '#000'
        btn.style.color = "#fff"
        statusCronos = true
       

        window.addEventListener('keyup',(e)=>{
            if(event.keyCode == 32 ){
                btn.style.backgroundColor = '#fff'
                btn.style.color = "#000"
            }
        })
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
let segundos = 0
let minutos = 3
const cronometro = () =>{
    
    setInterval(()=>{
        if(statusCronos == true){
            if (minutos >=0){
                if (segundos == 0){
                    segundos = 60
                    minutos --
                }
                segundos --
                if (segundos < 10){
                    seg.innerHTML = `0${segundos}`
                }else{
                    seg.innerHTML = segundos
                }
                if (minutos < 10){
                    min.innerHTML = `0${minutos}`
                }else{
                    min.innerHTML = minutos
                }
            }
        }else{
            segundos = segundos
            minutos = minutos
            
        }
        
    },1000)
}

const winner = ()=>{
    let winner;
    if(pj1 > pj2){
        winner = 'Jogador 01'
    }
    else if(pj2 > pj1){
        winner = 'Cpu'
    }
    else{
        winner = 'Empate'
    }
    document.querySelector('.winner-container h1').innerHTML = winner
    document.querySelector('.winner').style.display = 'flex'
}

const winnerOcult = ()=>{
    document.querySelector('.winner').style.display = 'none'
}
const placar = () =>{
    document.querySelector('.pj1').innerHTML = pj1
    document.querySelector('.pj2').innerHTML = pj2
}

const game=()=>{
    ctx.clearRect(0,0,W_canvas,H_canvas)
    jogador.desenhar()
    // jogador2.desenhar()
    bola.desenhar()
    cpu.desenhar()
    placar()
    requestAnimationFrame(game)

    if(minutos == 0 && segundos == 0){
        statusCronos = false
        verificInit = false
        winner()
        minutos = 3
        segundos = 0
        min.innerHTML = '03'
        seg.innerHTML = '00'
        pj1 = pj2 = 0
        bola.movendo = false

        bola.y = (H_canvas - bola.altura)/2
        bola.x = (W_canvas - bola.largura)/2
    }

}
cronometro()
requestAnimationFrame(game)