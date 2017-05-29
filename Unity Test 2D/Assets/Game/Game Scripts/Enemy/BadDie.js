#pragma strict

var player : GameObject;

function Start () {
	player = GameObject.FindWithTag("Player");
}

function OnTriggerEnter2D(coll: Collider2D) {
	if (coll.gameObject.tag == "Pew") {
		Destroy(coll.gameObject);
		Destroy(gameObject);
	}
}
