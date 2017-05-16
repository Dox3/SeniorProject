#pragma strict
public var pewPrefab : Rigidbody2D;
var player : GameObject;
var nerfed : boolean = true;
var speed : float = 100;

function Start () {
	player = GameObject.FindWithTag("Player");
}

function Update () {
	pew();
}

function pew()
{
	if(Input.GetButton("Fire1") && nerfed) {
		var shotsfired : Rigidbody2D = Instantiate(pewPrefab, transform.position, Quaternion.identity);
		shotsfired.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
		nerfed = false;
		if (player.GetComponent(PlayerDead).hp <= 15) {
			yield WaitForSeconds(0f);
		}
		else if (player.GetComponent(PlayerDead).hp <= 50) {
			yield WaitForSeconds(0.05f);
		}
		else {
			yield WaitForSeconds(0.1f);
		}
		nerfed = true;
	}
}