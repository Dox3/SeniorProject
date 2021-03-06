#pragma strict

public var hp : int = 10;
public var damage : int = 1;
public var damageplayer : int = 50;
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

function OnTriggerEnter2D(coll : Collider2D) {
	if (coll.gameObject.tag == "Player") {
		yield WaitForSeconds(1.0f);
		player.GetComponent(PlayerDead).hp -= damageplayer;
		Destroy(gameObject);
	}
	if (coll.gameObject.tag == "Pew") {
		Destroy(coll.gameObject);
		hp -= damage;
		if (hp <= 0) {
			Destroy(gameObject);
		}
	}
	if (coll.gameObject.tag == "Pulse") {
		Destroy(gameObject);
	}
}