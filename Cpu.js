class Cpu {
    constructor(ctx,bola,element,name){
        this.name = name
        this.elementName = element
        this.ctx = ctx
        this.bola = bola
        this.vel = 5
        this.largura = 20
        this.altura = 100
        this.y = (H_canvas - this.altura)/2
        this.x = W_canvas- this.largura
        this.inicioX = this.x
        this.inicioY = this.y
        this.songC = new Audio('./songs/toque.mp3')
        this.meioY = Math.random()*this.altura
        
    }

    gerenciar(){
        if(this.bola.dirx > 0 && this.bola.x > this.ctx.canvas.width/2){
            if(this.bola.y > this.y + this.meioY){
                this.y += this.vel
            }
            if(this.bola.y < this.y + this.meioY){
                this.y -= this.vel
            }
            if(this.bola.x +(this.bola.largura)< this.x){
                this.x -= this.vel
            }


            
        }
        else{
            if(this.y>this.inicioY){
                this.y -= this.vel
            }
            if(this.y<this.inicioY){
                this.y += this.vel
            }
            if(this.x>this.inicioX){
                this.x -= this.vel
            }
            if(this.x < this.inicioX){
                this.x += this.vel
            }
        }
        //colisão com a bola
        if(this.x <= this.bola.x + this.bola.largura && this.x+this.largura >= this.bola.x && this.y <= this.bola.y + this.bola.altura && this.y+this.altura >= this.bola.y){
            
            this.bola.dirx =- 1
            this.bola.diry = ((this.bola.y+(this.bola.altura)/2) -(this.y+(this.altura)/2))/20
            this.meioY = Math.random()*this.altura
            this.songC.play()

            
        } 
    }
   
    desenhar(){
        this.gerenciar()
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)

    }
       
}