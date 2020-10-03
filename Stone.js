class Stone {
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 20, 20);
        this.image = loadImage("sprites/stone.png")
        World.add(world, this.body);
    }

    display() {
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, 20, 20);
        pop();
    }
}