#pragma strict
public var bossPrefab : GameObject;
public var boss2Prefab : GameObject;
public var slicerPrefab : GameObject;
public var bosslive : int = 30;
public var boss2live : int = 150;
var isSlice : boolean = true;
var bop : GameObject;

function Start () {
	boss();
	boss2();
	bop = GameObject.Find("BossHPBar");
	bop.SetActive(false);
}

function Update () {
	slicer();
	if (GameObject.FindWithTag("Boss") != null) {
		bop.SetActive(true);
	}
}

function slicer() {
	if (Time.timeSinceLevelLoad >= 120.0f && isSlice) {
		isSlice = false;
		var Slicer : GameObject = Instantiate(slicerPrefab, new Vector3(Random.Range(-10,10), Random.Range(-4.5,4.5), 0), Quaternion.identity);
		var Dicer : GameObject = Instantiate(slicerPrefab, new Vector3(Random.Range(-10,10), Random.Range(-4.5,4.5), 0), Quaternion.identity);
		yield WaitForSeconds(10.0f);
		isSlice = true;
	}
}

function boss () {
	yield WaitForSeconds(bosslive);
	var Boss : GameObject = Instantiate(bossPrefab, transform.position, Quaternion.identity);
	Boss.name = "Lombaba";
}

function boss2 () {
	yield WaitForSeconds(boss2live);
	var Boss2 : GameObject = Instantiate(boss2Prefab, transform.position, Quaternion.identity);
	Boss2.name = "Yyrvynyn";
}