class Roof{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }

        this.object = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.object);

        this.width = width;
        this.height = height;
    }

    display() {
        var pos = this.object.position;

        push();
        rectMode(CENTER);
        fill("gold");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}