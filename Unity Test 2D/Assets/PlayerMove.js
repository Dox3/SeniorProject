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
 	 
     if(Input.GetKey("up") && transform.position.y < 5)//Press up arrow key to move forward on the Y AXIS
     {
        transform.Translate(transform.up * (5 * playerSpeed) * Time.deltaTime);
     }
     if(Input.GetKey("down") && transform.position.y > -5)//Press up arrow key to move forward on the Y AXIS
     {
        transform.Translate(transform.up * (-5 * playerSpeed) * Time.deltaTime);
     }
     if(Input.GetKey("right") && transform.position.x < 11)//Press up arrow key to move forward on the Y AXIS
     {
        transform.Translate(transform.right * (5 * playerSpeed) * Time.deltaTime);
     }
     if(Input.GetKey("left") && transform.position.x > -11)//Press up arrow key to move forward on the Y AXIS
     {
        transform.Translate(transform.right * (5 * -playerSpeed) * Time.deltaTime);
     }
 }