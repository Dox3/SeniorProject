#pragma strict

var firescript : GameObject;

function Update () {
	var energy : int = firescript.GetComponent(PlayerShoot).energy;
	if (energy <= 0) {
		energy = 0;
	}
	if (energy >= 0) {
		this.GetComponent(UI.Text).text = "Energy: " + energy;
	}
	if (energy >= 100) {
		this.GetComponent(UI.Text).text = "MAX";
	}
}
