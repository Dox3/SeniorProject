#pragma strict

public var spawnPrefab : GameObject;
var rifts : GameObject[];
var limit : boolean = true;
var stop : boolean = true;

function Start () {
	InvokeRepeating("warp", 3f, 3f);
}

function Update () {
	rifts = GameObject.FindGameObjectsWithTag("Spawn");
	if (rifts.length < 10) {
		spawn();
	}
	cease();
}

function warp () {
	transform.position = rifts[Random.Range(0,rifts.length)].transform.position + Vector3(0,1.5,0);
}

function spawn() {
	if (limit && stop) {
		limit = false;
		Instantiate(spawnPrefab, new Vector3(Random.Range(-6,6), Random.Range(-4.5,4.5), 0), Quaternion.Euler(0,0,Random.Range(0,360)));
		yield WaitForSeconds(1);
		limit = true;
	}
}

function cease () {
	if (GameObject.Find("Player") == null) {
		stop = false;
	}
}