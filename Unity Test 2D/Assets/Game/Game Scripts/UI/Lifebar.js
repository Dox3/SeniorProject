#pragma strict

var player : GameObject;
var hp : int = 0;

function Start () {
	player = GameObject.Find("Player");
}

function Update () {
	hp = player.GetComponent(PlayerDead).hp;
	/*if (hp > 100) {
		hp = 100;
	}*/
	this.GetComponent(UI.Slider).value = hp;
}
