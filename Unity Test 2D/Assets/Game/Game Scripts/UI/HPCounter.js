#pragma strict

var player : GameObject;

function Update () {
	var hp : int = player.GetComponent(PlayerDead).hp;
	if (hp < 0) {
		hp = 0;
	}
	this.GetComponent(UI.Text).text = "HP: " + hp;
}