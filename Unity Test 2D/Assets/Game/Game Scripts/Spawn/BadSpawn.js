#pragma strict

public var badPrefab : Transform;
var overpopulation : GameObject[];
var limit : boolean = true;
var stop : boolean = true;
var opengates : float = 0.5;

function Update () {
	overpopulation = GameObject.FindGameObjectsWithTag("Bad");
	Cease();
	badfeeling();
}

function badfeeling()
{
	if (limit && stop) {
		limit = false;
		yield WaitForSeconds(opengates);
		Instantiate(badPrefab, transform.position, transform.rotation);
		yield WaitForSeconds(opengates);
		limit = true;
	}
}

function Cease () {
	if (GameObject.FindWithTag("Player") == null || overpopulation.length >= 80 || GameObject.FindWithTag("Boss") != null) {
		stop = false;
	}
}