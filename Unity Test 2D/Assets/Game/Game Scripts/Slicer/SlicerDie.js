#pragma strict

public var hp : int = 3;
var player : GameObject;
var spawns : GameObject[];
var minions : GameObject[];

function Start () {
	/*minions = GameObject.FindGameObjectsWithTag("Bad");
	for (i in minions) {
		Destroy(i);
	}*/
	player = GameObject.Find("Player");
}

function OnCollisionEnter2D(coll : Collision2D) {
	if (coll.gameObject.tag == "Player") {
		yield WaitForSeconds(1.0f);
		player.GetComponent(PlayerDead).hp -= 50;
		Destroy(gameObject);
	}
	if (coll.gameObject.tag == "Pew") {
		hp -= 1;
		if (hp <= 0) {
			Destroy(gameObject);
		}
	}
}