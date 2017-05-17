#pragma strict

var firescript : GameObject;

function Update () {
	var cd : int = firescript.GetComponent(PlayerShoot).cd;
	if (cd <= 0) {
		cd = 0;
	}
	if (cd >= 0) {
		this.GetComponent(UI.Text).text = "Heat: " + cd;
	}
	if (cd >= 100) {
		this.GetComponent(UI.Text).text = "OVERHEAT!";
	}
}
