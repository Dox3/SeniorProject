#pragma strict
public var bossPrefab : GameObject;
public var boss2Prefab : GameObject;
public var slicerPrefab : GameObject;
var isSlice : boolean = true;

function Start () {
	boss();
	boss2();
}

function Update () {
	slicer();
}

function slicer() {
	if (Time.timeSinceLevelLoad >= 120.0f && isSlice && GameObject.FindWithTag("Boss") == null) {
		isSlice = false;
		var Slicer : GameObject = Instantiate(slicerPrefab, new Vector3(Random.Range(-10,10), Random.Range(-4.5,4.5), 0), Quaternion.identity);
		var Dicer : GameObject = Instantiate(slicerPrefab, new Vector3(Random.Range(-10,10), Random.Range(-4.5,4.5), 0), Quaternion.identity);
		yield WaitForSeconds(10.0f);
		isSlice = true;
	}
}

function boss () {
	yield WaitForSeconds(30);
	var Boss : GameObject = Instantiate(bossPrefab, transform.position, Quaternion.identity);
}

function boss2 () {
	yield WaitForSeconds(180);
	var Boss2 : GameObject = Instantiate(boss2Prefab, transform.position, Quaternion.identity);
}