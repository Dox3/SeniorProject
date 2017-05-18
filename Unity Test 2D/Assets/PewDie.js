#pragma strict

var speed : float = 1;

function Start() {
	Destroy(gameObject, 1.5f);
}
function Update () {
}


function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Bad")
		Destroy(gameObject);
}