alert ("Bienvenido, aqui podra saber su signo zodiacal");

var dia = parseInt (prompt("Ingrese su dia de nacimiento del 1 al 31: "));
var  mes = parseInt (prompt("Ingrese su mes de nacimiento del 1 al 12: "));
//Meses//
switch (mes) {
  case 1: nombre_mes = "Enero "; break;
  case 2: nombre_mes = "Febreo "; break;
  case 3: nombre_mes = "Marzo "; break;
  case 4: nombre_mes = "Abril "; break;
  case 5: nombre_mes = "Mayo "; break;
  case 6: nombre_mes = "Junio "; break;
  case 7: nombre_mes = "Julio "; break;
  case 8: nombre_mes = "Agosto "; break;
  case 9: nombre_mes = "Septimebre "; break;
  case 10: nombre_mes = "Octubre "; break;
  case 11: nombre_mes = "Noviembre "; break;
  case 12: nombre_mes = "Diciembre "; break;
}

//21 de enero - 19 de febrero = Acuario//
 if ((mes === 1 && dia >= 21) || (mes === 2 && dia <=19)) {alert("  " + nombre_mes + dia + " es Acuario");}
//20 de febrero - 20 de marzo = Piscis//
 if ((mes === 2 && dia >= 20) || (mes === 3 && dia <=20)) {alert("  " + nombre_mes + dia + " es Piscis");}
//21 de marzo - 20 de abril  = Aries//
 if ((mes === 3 && dia >= 21) || (mes === 4 && dia <=20)) {alert("  " + nombre_mes + dia + " es Aries");}
//21 de abril - 20 de mayo = Tauro//
 if ((mes === 4 && dia >= 21) || (mes === 5 && dia <=20)) {alert("  " + nombre_mes + dia + " es Tauro");}
//21 de mayo - 20 de junio  = Géminis//
 if ((mes === 5 && dia >= 21) || (mes === 6 && dia <=20)) {alert("  " + nombre_mes + dia + " es Géminis");}
//21 de junio - 22 de julio  = Cáncer//
 if ((mes === 6 && dia >= 21) || (mes === 7 && dia <=22)) {alert("  " + nombre_mes + dia + " es Cáncer");}
//23 de julio - 23 de agosto  = Leo//
 if ((mes === 7 && dia >= 23) || (mes === 8 && dia <=23)) {alert("  " + nombre_mes + dia + " es Leo");}
//24 de agosto - 22 de septiembre = Virgo//
 if ((mes === 8 && dia >= 24) || (mes === 9 && dia <=22)) {alert("  " + nombre_mes + dia + " es Virgo");}
//23 de septiembre - 23 de octubre = Libra//
 if ((mes === 9 && dia >= 23) || (mes === 10 && dia <=23)) {alert("  " + nombre_mes + dia + " es Libra");}
//24 de octubre - 22 de noviembre = Escorpio//
 if ((mes === 10 && dia >= 24) || (mes === 11 && dia <=22)) {alert("  " + nombre_mes + dia + " es Escorpio");}
//23 de noviembre - 21 de diciembre = Sagitario//
 if ((mes === 11 && dia >= 23) || (mes === 12 && dia <=21)) {alert("  " + nombre_mes + dia + " es Sagitario");}
//22 de diciembre - 20 de enero = Capricornio//
 if ((mes === 12 && dia >= 22) || (mes === 1 && dia <=20)) {alert("  " + nombre_mes + dia + " es Capricornio");}
