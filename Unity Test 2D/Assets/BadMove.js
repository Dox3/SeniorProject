#pragma strict

var target : Transform;
var speed = 1;

function Start () {
	target = GameObject.FindWithTag("Player").transform;
}

function Update () {
	transform.LookAt(target);
	if(Vector3.Distance(transform.position,target.position) >= 0) {
		transform.Translate(transform.forward * (3 * speed) * Time.deltaTime);
	}
}