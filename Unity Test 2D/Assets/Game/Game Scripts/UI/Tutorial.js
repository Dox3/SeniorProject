#pragma strict

var player : GameObject;
var spawn : GameObject;
var controls : boolean = true;
var enemy : boolean = false;
var power : boolean = false;
var spawnscript : Component; 
var regen : boolean = true;

function Start() {
	player = GameObject.Find("Player");
	spawn = GameObject.Find("SpawnPoint");
	spawn.SetActive(false);
	//player.GetComponentInChildren(PlayerShoot).energy
}

function Update () {
	if (!power) {
		player.GetComponentInChildren(PlayerShoot).energy = 0;
	}
	progress();
	powerplay();
}

function progress () {
	if (Input.GetKey("space") && controls) {
		controls = false;
		if (!enemy && !power) {
			enemy = true;
			spawn.SetActive(true);
		}
		else if (enemy && !power) {
			enemy = false;
			power = true;
			player.GetComponent(PlayerDead).hp = 50;
			player.GetComponent(SpawnSpawn).enabled = true;
		}
		else if (!enemy && power) {
			SceneManagement.SceneManager.LoadScene("Test1");
		}
		yield WaitForSeconds(3.0f);
		controls = true;
	}
}

function powerplay () {
	if (power) {
		if (player.GetComponent(PlayerDead).hp > 50 && regen) {
			regen = false;
			player.GetComponent(PlayerDead).hp -= 1;
			yield WaitForSeconds(0.2f);
			regen = true;
		}
		if (player.GetComponent(PlayerDead).hp < 50) {
			player.GetComponent(PlayerDead).hp = 50;
		}
	}
}