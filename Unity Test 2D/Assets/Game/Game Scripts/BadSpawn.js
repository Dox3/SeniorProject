#pragma strict
public var badPrefab : Transform;
var overpopulation : GameObject[];
var limit : boolean = true;
var stop : boolean = true;
function Start () {
	//InvokeRepeating("badfeeling", 1.0f, 1.0f);
}

function Update () {
	overpopulation = GameObject.FindGameObjectsWithTag("Bad");
	badfeeling();
	Cease();
}

function badfeeling()
{
	if (limit && stop) {
		limit = false;
		Instantiate(badPrefab, transform.position, transform.rotation);
		yield WaitForSeconds(1.0f);
		limit = true;
	}
}

function Cease () {
	if (GameObject.FindWithTag("Player") == null || overpopulation.length >= 250 || GameObject.FindWithTag("Boss") != null) {
		stop = false;
	}
}