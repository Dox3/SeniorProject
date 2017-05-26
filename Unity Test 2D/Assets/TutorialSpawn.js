#pragma strict

var screentext : GameObject;

function OnEnable () {
	screentext = GameObject.Find("Controls");
}
	
function OnDestroy () {
	screentext.GetComponent(UI.Text).text = "Good job, press space to continue.";
}
