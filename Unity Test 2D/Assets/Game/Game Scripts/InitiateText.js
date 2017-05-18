#pragma strict

function Start () {
	Destroy(gameObject, 10.0f);
}

function Update () {
	if (GameObject.FindWithTag("Player") == null) {
		Destroy(gameObject);
	}
}