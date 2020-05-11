var n = 2;
var max = 8;
var title;
var m;

function giocatori(){
	n = document.getElementById("opt").selectedIndex;
	n += 2;
	m = n-2;
	title = document.getElementById("colspan-th");
	title.colSpan = n + 1;
	document.getElementById("g" + m).display = "block";
}
