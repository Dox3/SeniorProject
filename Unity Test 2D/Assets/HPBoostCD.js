#pragma strict

var cd : int;

function OnEnable () {
	cd = 15;
	InvokeRepeating("cooldown", 0f, 1.0f);
}

function OnDisable () {
	CancelInvoke();
}

function cooldown () {
	this.GetComponent(UI.Text).text = "" + cd;
	cd -= 1;
}

