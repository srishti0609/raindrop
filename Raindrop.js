class Raindrop{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution:0.3
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill("purple");
        ellipseMode(CENTER);
        strokeWeight(2);
        ellipse(this.body.position.x,this.body.position.y,this.r*2);
        pop();

    }

    }

    

