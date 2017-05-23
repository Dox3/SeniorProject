#pragma strict

public var hp : int = 100;

function Update () {
	if (hp <= 0) {
		Destroy(gameObject);
	}
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Bad") {
		hp -= 10;
	}
}



