#pragma strict

public var hp : int = 10;
public var regen : int = 10;
var player : GameObject;
var cease : boolean = true;

function Start () {
	player = GameObject.Find("Player");
}

function Update () {
	if (hp <= 0) {
		Destroy(gameObject, 0.1f);
	}
}

function OnTriggerEnter2D(coll: Collider2D) {
	if (coll.gameObject.tag == "Pew") {
		Destroy(coll.gameObject);
		if (cease) {
			hp -= 1;
		}
	}
	if (coll.gameObject.tag == "Pulse") {
		hp -= 15;
	}
}

/*function OnDestroy () {
	if (gameObject.FindWithTag("Pulse") == null) {
		if (GameObject.FindWithTag("Boss") == null) {
			player.GetComponent(PlayerDead).hp += regen;
		}
	}
}*/

