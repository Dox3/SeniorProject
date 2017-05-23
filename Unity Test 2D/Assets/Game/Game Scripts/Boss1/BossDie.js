#pragma strict

public var hp : int = 200;
var player : GameObject;
var spawns : GameObject[];
var minions : GameObject[];

function Start () {
	minions = GameObject.FindGameObjectsWithTag("Bad");
	for (i in minions) {
		Destroy(i);
	}
	player = GameObject.Find("Player");
}

function OnTriggerEnter2D(coll : Collider2D) {
	if (coll.gameObject.tag == "Player") {
		player.GetComponent(PlayerDead).hp -= 100;
	}
	if (coll.gameObject.tag == "Pew") {
		Destroy(coll.gameObject);
		hp -= 1;
		if (hp <= 0) {
			Destroy(gameObject);
			spawns = GameObject.FindGameObjectsWithTag("Spawn");
			player.GetComponent(SpawnSpawn).stop = true;
			for (i in spawns) {
				i.GetComponent(BadSpawn).stop = true;
			}
			if (player.GetComponent(PlayerDead).hp < 100) {
				player.GetComponent(PlayerDead).hp = 100;
			}
		}
	}
}