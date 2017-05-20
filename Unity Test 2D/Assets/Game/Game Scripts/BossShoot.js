#pragma strict

public var diePrefab : GameObject;
var cd : boolean = true;
var speed : int = 1;
var canFire : boolean = true;

function Start () {
}

function Update () {
	deathtoplayer();
}

function deathtoplayer () {
	if (canFire) {
		canFire = false;
		var shotsfired : GameObject = Instantiate(diePrefab, transform.position, Quaternion.identity);
		shotsfired.GetComponent(Rigidbody2D).AddForce(transform.up * (400 * speed));
		yield WaitForSeconds(0.1f);
		canFire = true;
		
	}
}