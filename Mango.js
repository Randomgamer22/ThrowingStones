class Mango {
    constructor(x, y, size) {
        this.size = size;
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, size/2, options);
        this.image = loadImage("sprites/mango.png")
        World.add(world, this.body);
    }

    display() {
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y)
        image(this.image, 0, 0, this.size, this.size);
        pop();
    }
}