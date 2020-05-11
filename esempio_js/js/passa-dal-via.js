var scelta;

function passaDalVia(n){
	scelta = document.getElementById("soldi" + n);
	scelta.value = parseInt(scelta.value) + 200;
}

function annulla(n){
	scelta = document.getElementById("soldi" + n);
	scelta.value = parseInt(scelta.value) - 200;
	if( scelta.value < 0){
		scelta.value = 0;
	}
}