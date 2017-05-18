#pragma strict

var target : Transform;
var speed = 1;

function Start () {
	target = GameObject.FindWithTag("Player").transform;
}

function Update () {
	if(Vector2.Distance(transform.position, target.position) >= 0) {
		transform.position = Vector2.MoveTowards(transform.position, target.position, (6 * speed) * Time.deltaTime);
	}
}