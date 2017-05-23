#pragma strict

public var diePrefab : GameObject;
var boss : GameObject;
var cd : boolean = true;
var speed : int = 1;
var canFire : boolean = true;
var burstfire : boolean = false;

function Start () {
	boss = GameObject.Find("Boss");
}

function Update () {
	deathtoplayer();
}

function deathtoplayer () {
	if (canFire && burstfire) {
		canFire = false;
		var shotsfired : GameObject = Instantiate(diePrefab, transform.position, transform.rotation);
		shotsfired.GetComponent(Rigidbody2D).AddForce(transform.up * (400 * speed));
		yield WaitForSeconds(0.1f);
		canFire = true;
		
	}
}

