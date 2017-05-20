#pragma strict

public var pewPrefab : Rigidbody2D;
var player : GameObject;
var nerfed : boolean = true;
var cool : boolean = true;
var hot : boolean = true;
var speed : int = 1;
var cd : int = 0;
var ratedanger : float = 0.02;
var ratemin : float = 0.05;

function Start () {
	player = GameObject.FindWithTag("Player");
}

function Update () {
	if (cd < 100) {
		pew();
		cddown();
	}
	if (cd >= 100) {
		cdreset();
	}
}

function pew() {
	if(nerfed) {
		if(Input.GetKey("w")) {
			transform.localPosition = new Vector3(0,0.45,0);
			transform.rotation = Quaternion.Euler(0,0,0);
			var shotsfired : Rigidbody2D = Instantiate(pewPrefab, transform.position, Quaternion.identity);
			shotsfired.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
			nerfed = false;
			if (player.GetComponent(PlayerDead).hp <= 15) {
				yield WaitForSeconds(0f);
			}
			else if (player.GetComponent(PlayerDead).hp <= 50) {
				yield WaitForSeconds(ratedanger);
			}
			else {
				yield WaitForSeconds(ratemin);
			}
			nerfed = true;
			cd += 1;
		}
		if(Input.GetKey("a")) {
			transform.localPosition = new Vector3(-0.45,0,0);
			transform.rotation = Quaternion.Euler(0,0,90);
			var shotsfired1 : Rigidbody2D = Instantiate(pewPrefab, transform.position, transform.rotation);
			shotsfired1.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
			nerfed = false;
			if (player.GetComponent(PlayerDead).hp <= 15) {
				yield WaitForSeconds(0f);
			}
			else if (player.GetComponent(PlayerDead).hp <= 50) {
				yield WaitForSeconds(ratedanger);
			}
			else {
				yield WaitForSeconds(ratemin);
			}
			nerfed = true;
			cd += 1;
		}
		if(Input.GetKey("s")) {
			transform.localPosition = new Vector3(0,-0.45,0);
			transform.rotation = Quaternion.Euler(0,0,180);
			var shotsfired2 : Rigidbody2D = Instantiate(pewPrefab, transform.position, transform.rotation);
			shotsfired2.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
			nerfed = false;
			if (player.GetComponent(PlayerDead).hp <= 15) {
				yield WaitForSeconds(0f);
			}
			else if (player.GetComponent(PlayerDead).hp <= 50) {
				yield WaitForSeconds(ratedanger);
			}
			else {
				yield WaitForSeconds(ratemin);
			}
			nerfed = true;
			cd += 1;
		}
		if(Input.GetKey("d")) {
			transform.localPosition = new Vector3(0.45,0,0);
			transform.rotation = Quaternion.Euler(0,0,-90);
			var shotsfired3 : Rigidbody2D = Instantiate(pewPrefab, transform.position, transform.rotation);
			shotsfired3.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
			nerfed = false;
			if (player.GetComponent(PlayerDead).hp <= 15) {
				yield WaitForSeconds(0f);
			}
			else if (player.GetComponent(PlayerDead).hp <= 50) {
				yield WaitForSeconds(ratedanger);
			}
			else {
				yield WaitForSeconds(ratemin);
			}
			nerfed = true;
			cd += 1;
		}
	}
}
function cdreset() {
	if (hot) {
		cd = 100;
		hot = false;
		yield WaitForSeconds(5.0f);
		cd = 0;
		hot = true;
	}
}
function cddown () {
	if (cool) {
		if (!Input.GetKey("a") && !Input.GetKey("w") && !Input.GetKey("s") && !Input.GetKey("d")) {
			InvokeRepeating("cdminus", 0.2f, 0.2f);
		}
		cool = false;
	}
	if (Input.GetKey("a") || Input.GetKey("w") || Input.GetKey("s") || Input.GetKey("d")) {
		CancelInvoke();
		cool = true;
	}
}
function cdminus () {
	if (cd < 100) {
		cd -= 5;
		if (cd < 0) {
			cd = 0;
		}
	}
}