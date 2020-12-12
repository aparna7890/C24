class Log{
    constructor(x,y,h, angle){
        var options = {
            restitution: 0.5,
            friction: 2
        }
        this.body = Bodies.rectangle(x,y,20,h,options);
        this.width = 20;
        this.height = h;

        Matter.Body.setAngle(this.body, angle)
        //console.log(this.body);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle
        push ()
        translate (this.body.position.x , this.body.position.y)
        rotate (angle)
        rectMode(CENTER);
        fill ("yellow")
        rect(0, 0, this.width, this.height);
        pop()
    }
}