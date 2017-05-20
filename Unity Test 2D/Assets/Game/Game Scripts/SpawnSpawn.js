#pragma strict

public var spawnPrefab : Transform;
public var spawnRepeat : int = 5;
var limit : boolean = true;
var stop : boolean = true;

function Update () {
	if (Time.timeSinceLevelLoad >= 5.0f) {
		Spawn();
	}
	Cease();
}

function Spawn() {
	if (limit && stop) {
		limit = false;
		Instantiate(spawnPrefab, new Vector3(Random.Range(-6,6), Random.Range(-4.5,4.5), 0), Quaternion.identity);
		yield WaitForSeconds(spawnRepeat);
		limit = true;
	}
}

function Cease () {
	if (GameObject.FindWithTag("Player") == null || GameObject.FindWithTag("Boss") != null) {
		stop = false;
	}
}