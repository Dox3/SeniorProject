#pragma strict
public var spawnPrefab : Transform;

function Start () {
	InvokeRepeating("Spawn", 10.0f, 10.0f);
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