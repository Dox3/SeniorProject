#pragma strict

function Update () {
	if (GameObject.Find("Player") == null) {
		gameObject.SetActive(false);
	}
}

function OnDestroy() {
	SceneManagement.SceneManager.LoadScene("Win Screen");
}
