alert("Vamos a jugar: Adivina si el numero es mayor, menor o igual")

var NumeroDeComputadora = Math.floor(Math.random() * 9 )+ 1;

var alumno;
do {
    alumno = parseInt(prompt("Ingresa un número entre 3 y 6: "));
    if (isNaN(alumno) || alumno < 3 || alumno > 6) {
        alert("¡Error! Debes ingresar un número válido entre 3 y 6.");
    }
} while (isNaN(alumno) || alumno < 3 || alumno > 6);

var Adivinanza = prompt("¿Tu número es 'mayor', 'menor' o 'igual' al de la computadora?");
var resultado = "";

if (alumno > NumeroDeComputadora) {
    resultado = "mayor";
} else if (alumno < NumeroDeComputadora) {
    resultado = "menor";
} else {
    resultado = "igual";
}

if (Adivinanza.toLowerCase() === resultado) {
    alert("La computadora eligió " + NumeroDeComputadora + ", usted eligió " + alumno + ". ¡Ha adivinado!");
} else {
    alert("La computadora eligió " + NumeroDeComputadora + ", usted eligió " + alumno + ". No acertó.");
}