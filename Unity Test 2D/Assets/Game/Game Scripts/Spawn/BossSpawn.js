#pragma strict
public var bossPrefab : GameObject;
public var boss2Prefab : GameObject;
public var slicerPrefab : GameObject;
var isSlice : boolean = true;

function Start () {
}

function Update () {
	slicer();
	if (Time.time >= 30 && Time.time < 30.01) {
		boss();
	}
	if (Time.time >= 90 && Time.time < 90.01) {
		boss2();
	}
}

function slicer() {
	if (Time.timeSinceLevelLoad >= 40.0f && isSlice && GameObject.FindWithTag("Boss") == null) {
		isSlice = false;
		var Slicer : GameObject = Instantiate(slicerPrefab, new Vector3(Random.Range(-10,10), Random.Range(-4.5,4.5), 0), Quaternion.identity);
		var Dicer : GameObject = Instantiate(slicerPrefab, new Vector3(Random.Range(-10,10), Random.Range(-4.5,4.5), 0), Quaternion.identity);
		yield WaitForSeconds(10.0f);
		isSlice = true;
	}
}

function boss () {
	var Boss : GameObject = Instantiate(bossPrefab, transform.position, Quaternion.identity);
}

function boss2 () {
	var Boss2 : GameObject = Instantiate(boss2Prefab, transform.position, Quaternion.identity);
}