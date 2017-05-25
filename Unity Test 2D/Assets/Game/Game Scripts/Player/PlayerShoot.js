#pragma strict

public var pewPrefab : Rigidbody2D;
public var energy : int = 0;
public var regen : int = 100;
var player : GameObject;
var nerfed : boolean = true;
var cool : boolean = true;
var speed : int = 1;
var hp : int = 0;

function Start () {
	player = GameObject.FindWithTag("Player");
}

function Update () {
	if (energy < 100) {
		energydown();
	}
	hp = player.GetComponent(PlayerDead).hp;
	shoot();
	hprestore();
}

function shoot() {
	if(nerfed) {
		if(Input.GetKey("w")) {
			transform.localPosition = new Vector3(0,0.45,0);
			transform.rotation = Quaternion.Euler(0,0,0);
			var shotsfired : Rigidbody2D = Instantiate(pewPrefab, transform.position, Quaternion.identity);
			shotsfired.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
			nerfed = false;
			yield WaitForSeconds(0.05f);
			nerfed = true;
		}
		if(Input.GetKey("a")) {
			transform.localPosition = new Vector3(-0.45,0,0);
			transform.rotation = Quaternion.Euler(0,0,90);
			var shotsfired1 : Rigidbody2D = Instantiate(pewPrefab, transform.position, transform.rotation);
			shotsfired1.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
			nerfed = false;
			yield WaitForSeconds(0.05f);
			nerfed = true;
		}
		if(Input.GetKey("s")) {
			transform.localPosition = new Vector3(0,-0.45,0);
			transform.rotation = Quaternion.Euler(0,0,180);
			var shotsfired2 : Rigidbody2D = Instantiate(pewPrefab, transform.position, transform.rotation);
			shotsfired2.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
			nerfed = false;
			yield WaitForSeconds(0.05f);
			nerfed = true;
		}
		if(Input.GetKey("d")) {
			transform.localPosition = new Vector3(0.45,0,0);
			transform.rotation = Quaternion.Euler(0,0,-90);
			var shotsfired3 : Rigidbody2D = Instantiate(pewPrefab, transform.position, transform.rotation);
			shotsfired3.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
			nerfed = false;
			yield WaitForSeconds(0.05f);
			nerfed = true;
		}
	}
}

function energydown () {
	if (cool) {
		if (!Input.GetKey("a") && !Input.GetKey("w") && !Input.GetKey("s") && !Input.GetKey("d")) {
			InvokeRepeating("energyminus", 0.2f, 0.2f);
		}
		cool = false;
	}
	if (Input.GetKey("a") || Input.GetKey("w") || Input.GetKey("s") || Input.GetKey("d")) {
		CancelInvoke();
		cool = true;
	}
}

function energyminus () {
	if (energy < 100) {
		energy += 2;
	}
}

function hprestore() {
	if (Input.GetKey("space") && energy >= 1 && hp < 100) {
		player.GetComponent(PlayerDead).hp += 100;
		energy = 0;
	}
}