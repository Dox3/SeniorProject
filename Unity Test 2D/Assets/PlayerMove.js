 #pragma strict
 
 
 
 //Inspector Variables
 var playerSpeed : float = 0.1; //speed player moves
 var turnSpeed : float = 100; //speed player turns
 function Update () 
 {
     Move();
 }
 
 function Move()
 {		
 	 
     if(Input.GetKey("up"))//Press up arrow key to move forward on the Y AXIS
     {
        transform.Translate(transform.up * (5 * playerSpeed) * Time.deltaTime);
     }
     if(Input.GetKey("down"))//Press up arrow key to move forward on the Y AXIS
     {
        transform.Translate(transform.up * (-5 * playerSpeed) * Time.deltaTime);
     }
     if(Input.GetKey("right"))//Press up arrow key to move forward on the Y AXIS
     {
        transform.Translate(transform.right * (5 * playerSpeed) * Time.deltaTime);
     }
     if(Input.GetKey("left"))//Press up arrow key to move forward on the Y AXIS
     {
        transform.Translate(transform.right * (5 * -playerSpeed) * Time.deltaTime);
     }
 }