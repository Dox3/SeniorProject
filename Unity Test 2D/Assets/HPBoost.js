#pragma strict

var player : GameObject; 

function Start () {
	player = GameObject.Find("Player");	
}

function Update () {
	var chroma : UI.Image = GameObject.Find("HPBoost").GetComponent(UI.Image);
	if (this.GetComponent(UI.Slider).value == 100 && player.GetComponent(PlayerDead).hp < 100) {
		chroma.color = Color.white;
	}
	else {
		chroma.color = Color(0.33, 0.33, 0.33, 1.0);
	}
}
