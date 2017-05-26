#pragma strict

var time : GameObject;

function Update () {
	if (Input.GetKey("escape")) {
		SceneManagement.SceneManager.LoadScene("Test1");
	}
}

function OnMouseDown () {
	time = GameObject.Find("Time");
	Destroy(time);
	SceneManagement.SceneManager.LoadScene("Test1");
}
