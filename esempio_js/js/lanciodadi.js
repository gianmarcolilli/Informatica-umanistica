var scelta;
var temp = 0;


var image = new Array(6);
image[0]= 'images/dado1.gif';
image[1]= 'images/dado2.gif';
image[2]= 'images/dado3.gif';
image[3]= 'images/dado4.gif';
image[4]= 'images/dado5.gif';
image[5]= 'images/dado6.gif';

function lancio(n){
	scelta = document.getElementById("dado" + n);
	temp = Math.floor((Math.random() * 6));
	scelta.src = image[temp];
	scelta.alt = temp;
}