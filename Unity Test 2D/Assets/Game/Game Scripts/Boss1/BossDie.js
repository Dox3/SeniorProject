#pragma strict

public var hp : int = 500;
public var damage : int = 1;
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

function Update () {
	if (hp <= 0) {
			Destroy(gameObject);
	}
}

function OnTriggerEnter2D(coll : Collider2D) {
	if (coll.gameObject.tag == "Pew") {
		Destroy(coll.gameObject);
		hp -= damage;
	}
}

function OnDestroy () {
	GameObject.Find("BossHPBar").SetActive(false);
}