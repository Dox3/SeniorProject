#pragma strict

public var hp : int = 10;
public var regen : int = 10;
var player : GameObject;
var cease : boolean = true;
var bop : GameObject;

function Start () {
	player = GameObject.Find("Player");
	bop = GameObject.Find("BossHPBar");
}

function Update () {
	if (GameObject.FindWithTag("Boss") != null) {
		bop.SetActive(true);
	}
	else {
		bop.SetActive(false);
	}
	if (GameObject.Find("Boss2") != null) {
		regen = 0;
	}
}

function OnTriggerEnter2D(coll: Collider2D) {
	if (coll.gameObject.tag == "Pew") {
		Destroy(coll.gameObject);
		if (cease) {
			hp -= 1;
		}
		if (hp <= 0) {
			Destroy(gameObject, 0.1f);
		}
	}
}

function OnDestroy () {
	if (GameObject.Find("Boss2") == null) {
		player.GetComponent(PlayerDead).hp += regen;
	}
}

