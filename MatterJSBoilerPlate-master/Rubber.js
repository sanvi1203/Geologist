class Rubber {
    constructor (x,y,radius) {
        var options =  {
            'density': 1,
            'friction' : 5,
            'restitution' : 0.3
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
         }
         display () {
             var pos = this.body.position;
             fill("yellow")
          ellipse(pos.x, pos.y,this.radius)
         }
}