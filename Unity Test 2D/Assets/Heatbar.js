#pragma strict

var player : GameObject;
var energy : int = 0;

function Start () {
	player = GameObject.Find("Fire");
}

function Update () {
	energy = player.GetComponent(PlayerShoot).energy;
	if (energy <= 100) {
		this.GetComponent(UI.Slider).value = energy;
	}
}
