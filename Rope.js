class Rope { 
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display() {
        var posA = this.rope.bodyA.position;
        var posB = this.rope.pointB;

        push();
        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
    }
}