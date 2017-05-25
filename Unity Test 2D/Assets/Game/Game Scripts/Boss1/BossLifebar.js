#pragma strict

var boss : GameObject;
var hpinit : int = 0;
var hp : int = 0;

function OnEnable () {
	boss = GameObject.FindWithTag("Boss");
	hpinit = boss.GetComponent(BossDie).hp;
	this.GetComponent(UI.Slider).maxValue = hpinit;
}

function Update () {
	hp = boss.GetComponent(BossDie).hp;
	this.GetComponent(UI.Slider).value = hp;
}
