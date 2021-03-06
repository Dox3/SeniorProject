#pragma strict

var target : Transform;
var speed = 1;
var inittime : int = 0;
var sinceinit : int = 0;

function Start () {
	target = GameObject.FindWithTag("Player").transform;
	inittime = Time.time;
}

function Update () {
	sinceinit = Time.time - inittime;
	if(Vector2.Distance(transform.position, target.position) >= 0 && sinceinit > 0.2) {
		transform.up = transform.position - target.position;
		transform.position = Vector2.MoveTowards(transform.position, target.position, (7 * speed) * Time.deltaTime);
	}
}