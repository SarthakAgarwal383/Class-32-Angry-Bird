class SlingShot{
constructor(bodyA,pointB){
    var options={
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.4,
        length: 10
      
    }
    this.sling1= loadImage("sprites/sling1.png");
    this.sling2= loadImage("sprites/sling2.png");
    this.sling3= loadImage("sprites/sling3.png");

    this.sling= Matter.Constraint.create(options);
    this.pointB= pointB;
    World.add(world,this.sling);

}

display(){
    image(this.sling1,200,225);
    image(this.sling2,170,225);
    if(this.sling.bodyA){

        var Pa= this.sling.bodyA.position;
        var Pb= this.pointB;
        push();
        stroke(48,22,8);
        if(Pa.x<250){
        strokeWeight(7);
        line(Pa.x-20,Pa.y,Pb.x-10,Pb.y);
        line(Pa.x-20,Pa.y,Pb.x+30,Pb.y-10);
        image(this.sling3,Pa.x-30,Pa.y-10,15,30);
        }
        else{
            strokeWeight(4);
        line(Pa.x+25,Pa.y,Pb.x-10,Pb.y);
        line(Pa.x+25,Pa.y,Pb.x+30,Pb.y-10);
        image(this.sling3,Pa.x+25,Pa.y-10,15,30);
        }
        pop();

    }
}
 fly(){
this.sling.bodyA= null;
}
 attach(body){
     this.sling.bodyA= body;
 }
}
