#pragma strict

var current : Quaternion = Quaternion.identity;
function Update () {
	Move();
}

 function Move()
 {		
 	 
     if(Input.GetKey("up"))//Press up arrow key to move forward on the Y AXIS
     {
        transform.rotation = Quaternion.Euler(0,0,0);
     }
     if(Input.GetKey("down"))//Press up arrow key to move forward on the Y AXIS
     {
        transform.rotation = Quaternion.Euler(0,0,180);
     }
     if(Input.GetKey("right"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.rotation = Quaternion.Euler(0,0,-90);
     }
     if(Input.GetKey("left"))//Press up arrow key to move forward on the Y AXIS
     {
        transform.rotation = Quaternion.Euler(0,0,90);
     }
 }