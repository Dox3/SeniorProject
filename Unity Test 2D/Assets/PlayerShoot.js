#pragma strict
public var pewPrefab : Rigidbody2D;
var nerfed : boolean = true;
var speed : float = 100;

function Update () {
	pew();
}

function pew()
{
	if(Input.GetButton("Fire1") && nerfed)
	{
		var shotsfired : Rigidbody2D = Instantiate(pewPrefab, transform.position, Quaternion.identity);
		shotsfired.GetComponent.<Rigidbody2D>().AddForce(transform.up * (5 * speed));
	}
}