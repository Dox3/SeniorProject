#pragma strict
public var bossPrefab : GameObject;
var minions : GameObject[];

function Start () {
	yield WaitForSeconds(20.0f);
	var Boss : GameObject = Instantiate(bossPrefab, transform.position, Quaternion.identity);
}

function Update () {

}
