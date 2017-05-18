#pragma strict
public var badPrefab : Transform;
var overpopulation : GameObject[];

function Start () {
	InvokeRepeating("badfeeling", 1.0f, 1.0f);
}

function Update () {
	overpopulation = GameObject.FindGameObjectsWithTag("Bad");
	Cease();
}

function badfeeling()
{
	Instantiate(badPrefab, transform.position, transform.rotation);
}

function Cease () {
	if (GameObject.FindWithTag("Player") == null || overpopulation.length >= 250) {
		CancelInvoke();
	}
}