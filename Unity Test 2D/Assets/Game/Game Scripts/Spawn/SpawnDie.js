#pragma strict

public var hp : int = 10;
public var regen : int = 10;
var player : GameObject;

function Start () {
	player = GameObject.Find("Player");
}

function Update () {
	if (GameObject.Find("Boss2") != null) {
		regen = 0;
	}
}

function OnTriggerEnter2D(coll: Collider2D) {
	if (coll.gameObject.tag == "Pew") {
		Destroy(coll.gameObject);
		hp -= 1;
		if (hp <= 0) {
			Destroy(gameObject, 0.1f);
			player.GetComponent(PlayerDead).hp += regen;
		}
	}
}

