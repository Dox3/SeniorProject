#pragma strict
public var bossPrefab : GameObject;

function Start () {
	yield WaitForSeconds(5.0f);
	var Boss : GameObject = Instantiate(bossPrefab, transform.position, Quaternion.identity);
}

function Update () {
}
