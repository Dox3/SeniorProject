#pragma strict

var target : Transform;
var speed : float = 1;

function Start () {
	target = GameObject.FindWithTag("Player").transform;
}

function Update () {
	if(Vector2.Distance(transform.position, target.position) >= 0) {
		transform.position = Vector2.MoveTowards(transform.position, target.position, (3.5 * speed) * Time.deltaTime);
	}
	else if (gameObject.GetComponent(BossDie).hp <= 10) {
		speed = 2;
	}
}