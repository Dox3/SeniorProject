#pragma strict

var speed : float = 1;
var target : GameObject;

function Start() {
	target = GameObject.FindWithTag("Player");
	Destroy(gameObject, 5f);
}
function Update () {
}


function OnTriggerEnter2D(coll: Collider2D) {
	if (coll.gameObject == target) {
		target.GetComponent(PlayerDead).hp -= 5;
	}
	if (coll.gameObject.tag == "Pulse") {
		Destroy(gameObject);
	}
}