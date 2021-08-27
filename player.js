class Player {
    constructor(){
        this.size=50;
        this.x = 50
        this.y = height-this.size;
        this.velocityY=0;
        this.gravity=0.3
    }
    show() {
        image(playerImg,this.x, this.y, this.size,this.size);
    }
    
    jump(){
        if (this.y == height - this.size){

            this.velocityY = -10;
        }
       
        
    }
 move(){
     this.velocityY=this.velocityY+this.gravity
     this.y = this.y+this.velocityY;
     this.y = constrain(this.y, 0, height-this.size)

}
     collided(currentObs){
         let iscolliding = collideRectRect(
             this.x,
             this.y,
             this.size-10,
             this.size-10,

             currentObs.x,
             currentObs.y,
             currentObs.size,
             currentObs.size
         )
         
     return iscolliding
}
}
