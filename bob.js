class Bob{
    constructor(x,y,radius){
        var options={
            isStatc: false,
            restitution: 1.0,
            friction: 0,
            density:0.8
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}