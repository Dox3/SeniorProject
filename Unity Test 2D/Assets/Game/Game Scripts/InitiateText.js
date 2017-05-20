#pragma strict

function Start () {
	Destroy(gameObject, 5.0f);
}

function Update () {
	if (GameObject.FindWithTag("Player") == null) {
		Destroy(gameObject);
	}
}