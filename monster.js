class Monster {
  
    constructor(x,y,r) {
      var options = {
          density:5,
          frictionAir:0.0
          
      }
      this.r=r
     this.x=x
     this.y=y
this.image=loadImage("images/Monster-02.png");
      this.body = Bodies.circle(this.x,this.y,this.r/2,options);
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle
      push()
      translate (pos.x,pos.y-100);
     
      imageMode(CENTER);
      fill("brown");
      image(this.image,0, 0, this.r, this.r);
      pop()
    }
  };