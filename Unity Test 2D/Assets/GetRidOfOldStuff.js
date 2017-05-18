#pragma strict

var target : GameObject;
var target1 : GameObject;
var target2 : GameObject;

function Start () {
	target = GameObject.Find("HP");
	target1 = GameObject.Find("Cooldown");
	target2 = GameObject.Find("Time");
	Destroy(target);
	Destroy(target1);
	target2.transform.position = Vector3(0,0,0);
}

function Update () {
} 