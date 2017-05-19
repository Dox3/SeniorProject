#pragma strict
public var spawnPrefab : Transform;
public var spawnRepeat : int = 5;
function Start () {
	InvokeRepeating("Spawn", spawnRepeat, spawnRepeat);
}

function Update () {
	Cease();
}

function Spawn() {
	Instantiate(spawnPrefab, new Vector3(Random.Range(-6,6), Random.Range(-4.5,4.5), 0), Quaternion.identity);
}

function Cease () {
	if (GameObject.FindWithTag("Player") == null) {
		CancelInvoke();
	}
}