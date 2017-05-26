#pragma strict

function Start () {
	Destroy(gameObject, 1);
}

function Update () {
	transform.localScale += Vector3(50, 50, 0) * Time.deltaTime;
}

function OnTriggerEnter2D (coll : Collider2D) {
	if (coll.gameObject.tag == "Bad") {
		Destroy(coll.gameObject);
	}
}
