#pragma strict
public var badPrefab : Transform;

function Start () {
	InvokeRepeating("badfeeling", 0f, 1.0f);
}

function Update () {
}

function badfeeling()
{
	Instantiate(badPrefab, transform.position, transform.rotation);
}
