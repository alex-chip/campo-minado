//var menu = ["productos","ventas","contacto"];

//document.write(menu[2]);

function explosion()
{
	alert("BOOM!!");
	document.write("<h1>BOOM!! Elegistes un area minada</h1>");
}

function ganaste()
{
	document.write("<h1>Eres un ganador :) </h1>");
}

//1 = Bomba. 0 = No hay bomba
var campo = [   [ 1 , 0 , 0 ] ,
				[ 0 , 1 , 0 ] ,
				[ 1 , 1 , 1 ] ];


var textos =["Cesped", "Bomba"];
var x, y;

alert("Esta en un campo minado.\n" +  "Elije una posición entre el 0 y el 2 para X y para Y");


x = prompt("Posición en X? (entre 0  y 2)");
y = prompt("Posición en y? (entre 0 y 2)");



if (x <=2 && y <= 2)
{
	var posicion = campo [x][y];
	document.write("Elegistes " + textos[posicion] + "<br />");
	if (posicion == 1)
	{
		explosion();
	}
	else
	{
		ganastes();
	}
}
else
{
	document.write("Te salistes del campo");
	explosion();
}

