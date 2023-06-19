class Placar {
    constructor(ctx){
        this.ctx = ctx
        this.direita = this.ctx.canvas.width
        this.margem= 10
        this.largura = 100
        this.fontSize = 50
        
    }
    desenhar(){
        this.ctx.font = `${this.fontSize}px monospace`
        this.ctx.fillStyle = "#000"
        this.ctx.fillText(pj1,this.margem,this.margem+this.fontSize,this.largura)
        this.ctx.fillText(pj2,this.direita-this.largura-this.margem,this.margem+this.fontSize,this.largura)

    }
       
}