#pragma strict
public var pewPrefab : Rigidbody2D;
var player : GameObject;
var nerfed : boolean = true;
var speed : float = 100;
var cd : float = 0;

function Start () {
	player = GameObject.FindWithTag("Player");
}

function Update () {
	cdtimer();
}

function pew() {
if(nerfed) {
	if(Input.GetKey("w")) {
		CancelInvoke();
		transform.localPosition = new Vector3(0,0.5,0);
		transform.rotation = Quaternion.Euler(0,0,0);
		var shotsfired : Rigidbody2D = Instantiate(pewPrefab, transform.position, Quaternion.identity);
		shotsfired.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
		nerfed = false;
		if (player.GetComponent(PlayerDead).hp <= 15) {
			yield WaitForSeconds(0f);
		}
		else if (player.GetComponent(PlayerDead).hp <= 50) {
			yield WaitForSeconds(0.05f);
		}
		else {
			yield WaitForSeconds(0.1f);
		}
		nerfed = true;
		cd += 1;
	}
	if(Input.GetKey("a")) {
		CancelInvoke();
		transform.localPosition = new Vector3(-0.5,0,0);
		transform.rotation = Quaternion.Euler(0,0,90);
		var shotsfired1 : Rigidbody2D = Instantiate(pewPrefab, transform.position, Quaternion.identity);
		shotsfired1.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
		nerfed = false;
		if (player.GetComponent(PlayerDead).hp <= 15) {
			yield WaitForSeconds(0f);
		}
		else if (player.GetComponent(PlayerDead).hp <= 50) {
			yield WaitForSeconds(0.05f);
		}
		else {
			yield WaitForSeconds(0.1f);
		}
		nerfed = true;
		cd += 1;
	}
	if(Input.GetKey("s")) {
		CancelInvoke();
		transform.localPosition = new Vector3(0,-0.5,0);
		transform.rotation = Quaternion.Euler(0,0,180);
		var shotsfired2 : Rigidbody2D = Instantiate(pewPrefab, transform.position, Quaternion.identity);
		shotsfired2.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
		nerfed = false;
		if (player.GetComponent(PlayerDead).hp <= 15) {
			yield WaitForSeconds(0f);
		}
		else if (player.GetComponent(PlayerDead).hp <= 50) {
			yield WaitForSeconds(0.05f);
		}
		else {
			yield WaitForSeconds(0.1f);
		}
		nerfed = true;
		cd += 1;
	}
	if(Input.GetKey("d")) {
		CancelInvoke();
		transform.localPosition = new Vector3(0.5,0,0);
		transform.rotation = Quaternion.Euler(0,0,-90);
		var shotsfired3 : Rigidbody2D = Instantiate(pewPrefab, transform.position, Quaternion.identity);
		shotsfired3.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
		nerfed = false;
		if (player.GetComponent(PlayerDead).hp <= 15) {
			yield WaitForSeconds(0f);
		}
		else if (player.GetComponent(PlayerDead).hp <= 50) {
			yield WaitForSeconds(0.05f);
		}
		else {
			yield WaitForSeconds(0.1f);
		}
		nerfed = true;
		cd += 1;
		}
	}
}
function cdtimer() {
	if (cd != 100) {
		pew();
	}
	else if (cd == 100) {
		yield WaitForSeconds(5.0f);
		cd = 0;
	}
	else if (Input.GetKey("w") == null && Input.GetKey("d") == null && Input.GetKey("s") == null && Input.GetKey("a") == null) {
		InvokeRepeating("cdcountdown", 0.0f, 1.0f);
	}
}

function cdcountdown () {
	if (cd > 0) {
		cd -= 5;
	}
}