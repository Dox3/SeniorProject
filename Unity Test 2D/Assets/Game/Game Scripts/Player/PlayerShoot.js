#pragma strict

public var pewPrefab : Rigidbody2D;
public var energy : int = 0;
public var regen : int = 100;
public var pulsePrefab : Rigidbody2D;
public var godmodePrefab : Transform;
public var normalPrefab : Transform;
var player : GameObject;
var nerfed : boolean = true;
var cool : boolean = true;
var speed : int = 1;
var hp : int = 0;
var rate : boolean = false;
var regencd : boolean = true;
var regentimer : GameObject;
var isOverready : boolean = true;

function Start () {
	player = GameObject.FindWithTag("Player");
	InvokeRepeating("energyminus", 0, 0.15f);
	regentimer = GameObject.Find("HPBoostTimer");
	regentimer.SetActive(false);
}

function Update () {
	hp = player.GetComponent(PlayerDead).hp;
	power();
	if (!rate) {
		shoot();
	}
	if (rate) {
		overclock();
	}
}

function shoot() {
	if(nerfed) {
		if(Input.GetKey("w")) {
			transform.localPosition = new Vector3(0,0.45,0);
			transform.rotation = Quaternion.Euler(0,0,0);
			var shotsfired : Rigidbody2D = Instantiate(pewPrefab, transform.position, Quaternion.identity);
			shotsfired.GetComponent.<Rigidbody2D>().AddForce(transform.up * (8 * speed));
			nerfed = false;
			yield WaitForSeconds(0.05);
			nerfed = true;
		}
		if(Input.GetKey("a")) {
			transform.localPosition = new Vector3(-0.45,0,0);
			transform.rotation = Quaternion.Euler(0,0,90);
			var shotsfired1 : Rigidbody2D = Instantiate(pewPrefab, transform.position, transform.rotation);
			shotsfired1.GetComponent.<Rigidbody2D>().AddForce(transform.up * (8 * speed));
			nerfed = false;
			yield WaitForSeconds(0.05);
			nerfed = true;
		}
		if(Input.GetKey("s")) {
			transform.localPosition = new Vector3(0,-0.45,0);
			transform.rotation = Quaternion.Euler(0,0,180);
			var shotsfired2 : Rigidbody2D = Instantiate(pewPrefab, transform.position, transform.rotation);
			shotsfired2.GetComponent.<Rigidbody2D>().AddForce(transform.up * (8 * speed));
			nerfed = false;
			yield WaitForSeconds(0.05);
			nerfed = true;
		}
		if(Input.GetKey("d")) {
			transform.localPosition = new Vector3(0.45,0,0);
			transform.rotation = Quaternion.Euler(0,0,-90);
			var shotsfired3 : Rigidbody2D = Instantiate(pewPrefab, transform.position, transform.rotation);
			shotsfired3.GetComponent.<Rigidbody2D>().AddForce(transform.up * (8 * speed));
			nerfed = false;
			yield WaitForSeconds(0.05);
			nerfed = true;
		}
	}
}

function overclock () {
	if(nerfed) {
		//if(Input.GetKey("w") || Input.GetKey("a") || Input.GetKey("s") || Input.GetKey("d")) {
		nerfed = false;
		transform.localPosition = new Vector3(0,0.45,0);
		transform.rotation = Quaternion.Euler(0,0,0);
		var shotsfired : Rigidbody2D = Instantiate(pewPrefab, transform.position, transform.rotation);
		shotsfired.GetComponent.<Rigidbody2D>().AddForce(transform.up * (8 * speed));
		var shotsfired1 : Rigidbody2D = Instantiate(pewPrefab, transform.position - Vector3(0, 0.9, 0), Quaternion.Euler(0,0,180));
		shotsfired1.GetComponent.<Rigidbody2D>().AddForce(transform.up * (-8 * speed));
		var shotsfired2 : Rigidbody2D = Instantiate(pewPrefab, transform.position - Vector3(-0.45, 0.45, 0), Quaternion.Euler(0,0,-90));
		shotsfired2.GetComponent.<Rigidbody2D>().AddForce(transform.right * (8 * speed));
		var shotsfired3 : Rigidbody2D = Instantiate(pewPrefab, transform.position - Vector3(0.45, 0.45, 0), Quaternion.Euler(0,0,90));
		shotsfired3.GetComponent.<Rigidbody2D>().AddForce(transform.right * (-8 * speed));
		yield WaitForSeconds(0.05);
		nerfed = true;
		//}
	}
}

function energyminus () {
	if (energy < 100) {
		energy += 1;
	}
}

function power() {
	if (Input.GetKey("q") && energy >= 10 && hp < 100 && regencd) {
		regencd = false;
		regentimer.SetActive(true);
		if (energy/2 > (100 - hp)) {
			energy -= 100 - hp;
			player.GetComponent(PlayerDead).hp = 100; 
		}
		else {
			player.GetComponent(PlayerDead).hp += energy/2;
			energy = 0;
		}
		yield WaitForSeconds(15.0f);
		regentimer.SetActive(false);
		regencd = true;
	}
	if (Input.GetKey("e") && energy >= 100) {
		var pulse : Rigidbody2D = Instantiate(pulsePrefab, GameObject.Find("Player").transform.position, Quaternion.identity);
		energy = 0;
	}
	if (Input.GetKey("left shift") && energy >= 100) {
		Destroy(GameObject.Find("Sprite"));
		var oversprite : Transform = Instantiate(godmodePrefab, player.transform.position, Quaternion.identity);
		oversprite.transform.parent = GameObject.Find("Player").transform;
		oversprite.name = "Sprite";
		rate = true;
		energy = 0;
		yield WaitForSeconds(20.0f);
		rate = false;
		Destroy(GameObject.Find("Sprite"));
		var normalsprite : Transform = Instantiate(normalPrefab, player.transform.position, Quaternion.identity);
		normalsprite.transform.parent = GameObject.Find("Player").transform;
		normalsprite.name = "Sprite";
	}
}