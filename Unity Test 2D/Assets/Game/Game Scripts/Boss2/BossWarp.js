#pragma strict

public var spawnPrefab : GameObject;
var rifts : GameObject[];
var speed : float = 1;
var limit : boolean = true;
var stop : boolean = true;

function Start () {
	InvokeRepeating("warp", 2f, 2f);
}

function Update () {
	rifts = GameObject.FindGameObjectsWithTag("Spawn");
	spawn();
	cease();
}

function warp () {
	transform.position = rifts[Random.Range(0,rifts.length)].transform.position;
}

function spawn() {
	if (limit && stop) {
		limit = false;
		Instantiate(spawnPrefab, new Vector3(Random.Range(-6,6), Random.Range(-4.5,4.5), 0), Quaternion.Euler(0,0,Random.Range(0,360)));
		yield WaitForSeconds(3);
		limit = true;
	}
}

function cease () {
	if (GameObject.Find("Player") == null) {
		stop = false;
	}
}