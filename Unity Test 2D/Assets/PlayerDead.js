#pragma strict

var hp : int = 100;
function Update () {
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Bad")
		hp -= 10;
		if (hp == 0)
			Destroy(gameObject);
}



