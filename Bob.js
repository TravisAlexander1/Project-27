class Bob {
    constructor(x,y,radius) {
        this.object = Bodies.circle(x,y,radius);
        World.add(world,this.object);

        this.radius = radius;
    }

    display() {
        var pos = this.object.position;
        
        push();
        ellipseMode(CENTER);
        fill("silver");
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}