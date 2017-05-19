#pragma strict

var time : GameObject;

function OnMouseDown () {
	time = GameObject.Find("Time");
	Destroy(time);
	SceneManagement.SceneManager.LoadScene("Test1");
}
