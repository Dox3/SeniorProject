#pragma strict

public var hp : int = 100;

function Update () {
	if (hp <= 0) {
		Destroy(gameObject);
	}
}

function OnTriggerEnter2D(coll: Collider2D) {
	if (coll.gameObject.tag == "Bad") {
		hp -= 10;
	}
}

