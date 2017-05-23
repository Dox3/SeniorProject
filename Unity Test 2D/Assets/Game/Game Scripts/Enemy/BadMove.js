#pragma strict

var target : Transform;
var speed = 1;

function Start () {
	target = GameObject.FindWithTag("Player").transform;
}

function Update () {
	if(Vector2.Distance(transform.position, target.position) >= 0.4) {
		transform.up = transform.position - target.position;
		transform.position = Vector2.MoveTowards(transform.position, target.position, (5 * speed) * Time.deltaTime);
	}
}