#pragma strict

var target : GameObject[];
var time : GameObject;


function Start () {
	target = GameObject.FindGameObjectsWithTag("tobedestroyed");
	time = GameObject.Find("Time");
	//var alignment : RectTransform = target2.GetComponent.<RectTransform>();
	for (i in target) {
		Destroy(i);
	}
	time.GetComponent.<UI.Text>().alignment = TextAnchor.MiddleCenter;
	time.GetComponent.<UI.Text>().fontSize = 45;
	time.GetComponent.<RectTransform>().anchorMin = new Vector2(0.5,0.5);
	time.GetComponent.<RectTransform>().anchorMax = new Vector2(0.5,0.5);
	time.GetComponent.<RectTransform>().pivot = new Vector2(0.5,0.5);
	time.GetComponent.<RectTransform>().anchoredPosition = new Vector2(0,0);
}

function Update () {

} 