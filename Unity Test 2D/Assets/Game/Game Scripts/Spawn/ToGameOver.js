#pragma strict

var isDead : boolean = false;
var finalboss : boolean = false;

function Update () {
	lastbattle();
	victory();
	gameover();
	if (isDead) {
		SceneManagement.SceneManager.LoadScene("Game Over");
	}
}

function gameover () {
	if (GameObject.FindWithTag("Player") == null) {
		yield WaitForSeconds(0.5f);
		isDead = true;
	}
}

function lastbattle() {
	if (GameObject.Find("Yyrvynyn") != null) {
		finalboss = true;
	}
}

function victory () {
	if (finalboss == true) {
		if (GameObject.FindWithTag("Boss") == null) {
			yield WaitForSeconds(0.5f);
			SceneManagement.SceneManager.LoadScene("Win Screen");
		}
	}
}