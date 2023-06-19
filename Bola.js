
class Bola{
    constructor(ctx,jogador){
        this.ctx = ctx
        this.jogador = jogador
        this.movendo = false
        this.dirx = -1
        this.diry = 0
        this.vel = 5
        this.largura = 20
        this.altura = 20
        this.y = (H_canvas - this.altura)/2
        this.x = (W_canvas - this.largura)/2
        
        
    }

    iniciar(){
        this.movendo = true
        this.diry = 0
   
        
        
        
    }

    gerenciar(){
        if (this.movendo == true){
            //movimentação 
            this.x += this.dirx*this.vel
            this.y += this.diry*this.vel

            //colisão com o bordas
            if(this.x >= W_canvas-this.largura){
                this.dirx = -1
                pj1 ++
                this.resetarBola()
                this.dirx = -1
            }
            if(this.x <= 0){
                this.dirx = 1
                pj2++
                this.resetarBola()
                this.dirx = 1
            }
            if(this.y >= H_canvas-this.altura){
                this.diry *= -1
            }
            if(this.y <= 0){
                this.diry *= -1
            }

            //colisão com o jogador
            if(this.x <= this.jogador.x + this.jogador.largura && this.x+this.largura >= this.jogador.x && this.y <= this.jogador.y + this.jogador.altura && this.y+this.altura >= this.jogador.y){
                this.dirx *= -1
                this.diry = ((this.y+(this.altura)/2)-(this.jogador.y+(this.jogador.altura)/2))/20

                
            } 
           
            
        
    }
}
    resetarBola(){
        this.movendo = false
         this.x = (W_canvas - this.largura)/2
         this.y = (H_canvas - this.altura)/2
         this.jogador.y = (H_canvas - this.jogador.altura)/2

         this.jogador.x = 0
         
       
    }
    desenhar(){
        this.gerenciar()
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
        
    
    }
       
}