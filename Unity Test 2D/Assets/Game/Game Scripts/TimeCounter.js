#pragma strict
var minutes : int = 0;
var seconds : int = 0;

function Update () {
	minutecruncher();
}

function minutecruncher () {
	if (GameObject.FindWithTag("Player") != null) {
		minutes = Mathf.Floor(Time.time/60);
		seconds = Mathf.Floor(Time.time%60);
		if (seconds < 10) {
			this.GetComponent(UI.Text).text = "" + minutes + ":0" + seconds;
		}
		else {
			this.GetComponent(UI.Text).text = "" + minutes + ":" + seconds;
		}
	}
}
