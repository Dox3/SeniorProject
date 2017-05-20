#pragma strict

public var hp : int = 100;
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
		player.GetComponent(PlayerDead).hp -= 50;
	}
	if (coll.gameObject.tag == "Pew") {
		Destroy(coll.gameObject);
		hp -= 1;
		if (hp <= 0) {
			spawns = GameObject.FindGameObjectsWithTag("Spawn");
			player.GetComponent(SpawnSpawn).stop = true;
			for (i in spawns) {
				i.GetComponent(BadSpawn).stop = true;
			}
			Destroy(gameObject);
			if (player.GetComponent(PlayerDead).hp < 200) {
				player.GetComponent(PlayerDead).hp = 200;
			}
		}
	}
}