#pragma strict

var dewit : boolean = false;

function Start () {

}

function Update () {
	notthejediway();
	if (dewit) {
		SceneManagement.SceneManager.LoadScene("Game Over");
	}
}

function notthejediway () {
	if (GameObject.FindWithTag("Player") == null) {
		yield WaitForSeconds(0.5f);
		dewit = true;
	}
}