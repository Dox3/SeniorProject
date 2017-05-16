#pragma strict

public var badPrefab : Transform;
var player : GameObject;

function Start () {
	player = GameObject.FindWithTag("Player");
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Pew") {
		Destroy(gameObject);
		player.GetComponent(PlayerDead).hp += 1;
	}
}
