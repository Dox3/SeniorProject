#pragma strict

var player : GameObject;

function Start () {
	//this.GetComponent(UI.Text).text = "hi";
}

function Update () {
	var hp : int = player.GetComponent(PlayerDead).hp;
	if (hp >= 0) {
		this.GetComponent(UI.Text).text = "HP: " + hp;
	}
}
