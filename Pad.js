
class Pad {
    constructor(ctx,teclado){
        this.ctx = ctx
        this.teclado = teclado 
        this.x = 0
        this.vel = 5
        this.largura = 20
        this.altura = 100
        this.y = (H_canvas - this.altura)/2
        
        
    }

    gerenciar(){
        if(this.teclado.cima){
            this.y > 0? this.y -= this.vel: this.y = this.y
            
        }
        if(this.teclado.baixo){
            this.y = this.y < H_canvas - this.altura? this.y +=this.vel: this.y = this.y
        }
        if(this.teclado.esquerda){
            this.x > 0? this.x -= this.vel: this.x = this.x
        }
        if(this.teclado.direita){
            this.x = this.x < W_canvas/4 - this.largura? this.x +=this.vel: this.x = this.x
        }
    



    }
    desenhar(){
        this.gerenciar()
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
        
    
    }
       
}