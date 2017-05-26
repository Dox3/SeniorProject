#pragma strict

var player : GameObject;
var enemy : boolean = true;
var power : boolean = true;

function Start() {
	player = GameObject.Find("Player");
}

function Update () {
	if (player.GetComponent(Tutorial).enemy == true && enemy) {
		enemy = false;
		this.GetComponent(UI.Text).text = "Kill it before it breeds.";
	}
	if (player.GetComponent(Tutorial).power == true && power) {
		power = false;
		this.GetComponent(UI.Text).text = "Play around with your energy. Try the Q, E, and Shift buttons when they're ready. " +
		"\n When you're done here, press space to begin dying.";
	}
}