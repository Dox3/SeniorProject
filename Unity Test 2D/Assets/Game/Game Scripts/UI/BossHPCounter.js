#pragma strict

var boss : GameObject;

function OnEnable () {
	boss = GameObject.FindWithTag("Boss");
}

function Update () {
	var hp : int = boss.GetComponentInChildren(BossDie).hp;
	if (hp < 0) {
		hp = 0;
	}
	this.GetComponent(UI.Text).text = boss.name + ": " + hp;
}