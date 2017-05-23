#pragma strict
public var delete : float = 5.0;

function Start () {
	Destroy(gameObject, delete);
}

function Update () {
	if (GameObject.FindWithTag("Player") == null) {
		Destroy(gameObject);
	}
}