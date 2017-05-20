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
		player.GetComponent(PlayerDead).hp -= 10;
		Destroy(gameObject);
	}
	if (coll.gameObject.tag == "Pew") {
		hp -= 1;
		if (hp <= 0) {
			spawns = GameObject.FindGameObjectsWithTag("Spawn");
			player.GetComponent(SpawnSpawn).stop = true;
			for (i in spawns) {
				i.GetComponent(BadSpawn).stop = true;
			}
			Destroy(gameObject);
			if (player.GetComponent(PlayerDead).hp < 100) {
				player.GetComponent(PlayerDead).hp = 100;
			}
		}
	}
}