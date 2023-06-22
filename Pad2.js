
class Pad2 {
    constructor(ctx,teclado,element,name){
        this.name = name
        this.elementName = element
        this.ctx = ctx
        this.teclado = teclado 
        this.vel = 5
        this.largura = 20
        this.altura = 100
        this.x = W_canvas- this.largura
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
    nomear(name,element){
        element.innerHTML = name
    }
    desenhar(){
        this.nomear(this.name,this.elementName)
        this.gerenciar()
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
        
    
    }
       
}