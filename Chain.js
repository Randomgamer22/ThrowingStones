class Chain {
    constructor(pointA, bodyB) {
        var options = {
            pointA: pointA,
            bodyB: bodyB, 
            stiffness: 0.1
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display() {
        if(this.chain.bodyB){
            push();
            strokeWeight(4);
            line(this.chain.pointA.x, this.chain.pointA.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
            pop();
        }
    }

    fly(){
        this.chain.bodyB = null;
    }

    attach(body) {
        this.chain.bodyB = body;
    }
}