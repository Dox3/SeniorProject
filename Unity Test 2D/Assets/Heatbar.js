#pragma strict

var player : GameObject;
var cd : int = 0;

function Start () {
	player = GameObject.Find("Player");
}

function Update () {
	cd = player.GetComponent(PlayerShoot).cd;
	if (cd <= 100) {
		this.GetComponent(UI.Slider).value = cd;
	}
}
