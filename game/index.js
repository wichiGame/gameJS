

let edad;
let nombreForm, edadForm, paisForm, sexoForm;

function saludo() {
	alert("Saludos");
}

document.getElementById("ParrafoSaludo").innerHTML = "Parrafo cambiado";
//document.getElementById("edad").addEventListener("click",obtenerEdad);

function operadorTernario() {
	let edad = 21;
	//let edad;
	let puedeVotar = (edad >= 18) ? "Puede votar" : "No puede votar";
	//alert(puedeVotar);
	//document.getElementById("operador").innerHTML = 'nombreVariable = (condicion) ? "valor1" : "valor2";'
	//console.log(puedeVotar);
	alert("El valor de la edad es: " + edad + "  "+puedeVotar)
}

//----------------------------------------------

function obtenerDatos() {
	nombreForm = document.getElementById("nombreForm").value;
	edadForm = document.getElementById("edadForm").value;
	paisForm = document.getElementById("paisForm").value;
	sexoForm = document.getElementById("sexoForm").value;

	//console.log(edad);
	console.log(nombreForm);
	console.log(edadForm);
	console.log(paisForm);
	console.log(sexoForm);
	console.log("obtener edad ok");

	resultadoDatos();
}

function resultadoDatos() {
	document.getElementById("nombre").innerHTML = nombreForm;
	document.getElementById("edad").innerHTML = edadForm;
	document.getElementById("pais").innerHTML = paisForm;
	document.getElementById("sexo").innerHTML = sexoForm;
}

//-----------------------------------------------------
function obtenerEdad2() {
	edad = prompt("Por favor ingresa la edad","Gracias");

	if (edad == null || edad == "") {
  	alert("Ingrese una edad.");
  	edad = prompt("Por favor ingresa la edad","Gracias");
	} else {
 	 //txt = "Hello " + person + "! How are you today?";
 	 resultadoVotacion();
	} 
}

function resultadoVotacion() {
	let puedeVotar = (edad >= 18) ? "Si puede votar" : "No puede votar";
	//alert(puedeVotar);
	document.getElementById("edad").innerHTML = edad;
	document.getElementById("resultado").innerHTML = puedeVotar;//Mostrara el valor guardado en la variable puedeVotar
	console.log(puedeVotar);
}