#pragma strict

var target : GameObject;
var target1 : GameObject;
var target2 : GameObject;

function Start () {
	target = GameObject.Find("HP");
	target1 = GameObject.Find("Cooldown");
	target2 = GameObject.Find("Time");
	//var alignment : RectTransform = target2.GetComponent.<RectTransform>();

	Destroy(target);
	Destroy(target1);
	target2.GetComponent.<UI.Text>().alignment = TextAnchor.MiddleCenter;
	target2.GetComponent.<UI.Text>().fontSize = 45;
	target2.GetComponent.<RectTransform>().anchorMin = new Vector2(0.5,0.5);
	target2.GetComponent.<RectTransform>().anchorMax = new Vector2(0.5,0.5);
	target2.GetComponent.<RectTransform>().pivot = new Vector2(0.5,0.5);
	target2.GetComponent.<RectTransform>().anchoredPosition = new Vector2(0,0);
}

function Update () {

} 