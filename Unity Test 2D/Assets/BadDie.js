#pragma strict

public var badPrefab : Transform;

function Update () {

}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Pew")
		Destroy(gameObject);
}
