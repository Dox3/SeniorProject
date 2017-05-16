#pragma strict
public var badPrefab : Transform;

function Start () {
	
	InvokeRepeating("badfeeling", 0f, 1.0f);
}

function Update () {
	Cease();
}

function badfeeling()
{
	Instantiate(badPrefab, transform.position, transform.rotation);
}

function Cease () {
	if (GameObject.FindWithTag("Player") == null) {
		CancelInvoke();
	}
}