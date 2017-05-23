 #pragma strict

 //Inspector Variables
 var playerSpeed : float = 0.1; //speed player moves
 var turnSpeed : float = 100; //speed player turns
 var camera1 : Camera;

 function Start () {
 	camera1 = GetComponent.<Camera>().main;
 }
 function Update () {
     Move();
 }
 
 function Move()
 {		
 	 var screenPos : Vector3 = camera1.WorldToScreenPoint(transform.position);
     if(Input.GetKey("up") && screenPos.y < (camera1.pixelHeight - 15)) //Press up arrow key to move up on the Y AXIS
     {
        transform.Translate(transform.up * (5 * playerSpeed) * Time.deltaTime);
     }
     if(Input.GetKey("down") && screenPos.y > 15) //Press up arrow key to move down on the Y AXIS
     {
        transform.Translate(transform.up * (-5 * playerSpeed) * Time.deltaTime);
     }
     if(Input.GetKey("right") && screenPos.x < (camera1.pixelWidth - 15)) //Press up arrow key to move right on the X AXIS
     {
        transform.Translate(transform.right * (5 * playerSpeed) * Time.deltaTime);
     }
     if(Input.GetKey("left") && screenPos.x > 15) //Press up arrow key to move left on the X AXIS
     {
        transform.Translate(transform.right * (5 * -playerSpeed) * Time.deltaTime);
     }
 }