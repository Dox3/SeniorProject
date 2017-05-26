#pragma strict

var player : GameObject; 

function Start () {
	player = GameObject.Find("Player");	
}

function Update () {
	hplit();
	pulselit();
	overclocklit();
}

function hplit () {
	var hpicon : UI.Image = GameObject.Find("HPBoost").GetComponent(UI.Image);
	if (this.GetComponent(UI.Slider).value >= 10 && player.GetComponent(PlayerDead).hp < 100 && player.GetComponentInChildren(PlayerShoot).regencd == true) {
		hpicon.color = Color.white;
	}
	else {
		hpicon.color = Color(0.33, 0.33, 0.33, 1.0);
	}
}

function pulselit () {
	var pulseicon : UI.Image = GameObject.Find("PulseIcon").GetComponent(UI.Image);
	if (this.GetComponent(UI.Slider).value >= 100) {
		pulseicon.color = Color.white;
	}
	else {
		pulseicon.color = Color(0.33, 0.33, 0.33, 1.0);
	}
}

function overclocklit () {
	var godmodeicon : UI.Image = GameObject.Find("GodModeIcon").GetComponent(UI.Image);
	if (this.GetComponent(UI.Slider).value >= 100) {
		godmodeicon.color = Color.white;
	}
	else {
		godmodeicon.color = Color(0.33, 0.33, 0.33, 1.0);
	}
}
