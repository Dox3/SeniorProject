#pragma strict

public var hp : int = 100;

function Update () {
	/*if(GameObject.FindWithTag("Player") == null) { 
		SceneManagement.SceneManager.LoadScene("Game Over");
	}*/
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Bad") {
		hp -= 10;
		if (hp <= 0) {
			Destroy(gameObject, 0.1f);
			//yield WaitForSeconds(2.0f);
			SceneManagement.SceneManager.LoadScene("Game Over");
		}
	}
}



