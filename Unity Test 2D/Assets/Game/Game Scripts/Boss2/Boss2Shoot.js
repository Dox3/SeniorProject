#pragma strict

public var diePrefab : GameObject;
var boss : GameObject;
var cd : boolean = true;
var speed : int = 1;
var canFire : boolean = true;
var roturrent : int = 0;
var rate : float = 0.01;

function Start () {
	boss = GameObject.Find("Boss");
}

function Update () {
	deathtoplayer();
}

function deathtoplayer () {
	if (canFire) {
		transform.rotation = Quaternion.Euler(0,0,roturrent);
		roturrent += 10;
		canFire = false;
		var shotsfired : GameObject = Instantiate(diePrefab, transform.position, transform.rotation);
		shotsfired.GetComponent(Rigidbody2D).AddForce(transform.up * (400 * speed));
		canFire = true;
	}
}



