#pragma strict
public var bossPrefab : GameObject;
public var slicerPrefab : GameObject;
var isSlice : boolean = true;

function Start () {
	yield WaitForSeconds(20.0f);
	boss();
}

function Update () {
	slicer();
}

function slicer() {
	if (Time.timeSinceLevelLoad >= 30.0f && isSlice && GameObject.FindWithTag("Boss") == null) {
		isSlice = false;
		var Slicer : GameObject = Instantiate(slicerPrefab, new Vector3(-10, Random.Range(-4.5,4.5), 0), Quaternion.identity);
		var Dicer : GameObject = Instantiate(slicerPrefab, new Vector3(10, Random.Range(-4.5,4.5), 0), Quaternion.identity);
		yield WaitForSeconds(15.0f);
		isSlice = true;
	}
}

function boss () {
	var Boss : GameObject = Instantiate(bossPrefab, transform.position, Quaternion.identity);
}