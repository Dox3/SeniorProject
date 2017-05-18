#pragma strict

public var diePrefab : Rigidbody2D;
var target : Transform;
var cd : boolean = true;
var speed : int = 1;

function Start () {
	target = GameObject.FindWithTag("Player").transform;
	InvokeRepeating("deathtoplayer", 0.5f, 0.5f);
}

function Update () {
	transform.LookAt(target);
}

function deathtoplayer () {
	var shotsfired : Rigidbody2D = Instantiate(diePrefab, transform.position, transform.rotation);
	shotsfired.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
}