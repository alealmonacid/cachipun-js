var opjs;
//función de numero aleatorio
function aleatorio (min,max){
    return Math.random()*(max+1)-min;
}

//se declaran opciones
var piedra = 0;
var papel = 1;
var tijeras = 2;

//Opciones [0,1,2]
var opciones = ["piedra", "papel", "tijera"];
var opusu;
opjs=Math.floor(aleatorio(0,3));

//se solicita a usuario ingresar opcion para jugar
opusu=prompt("Elige una opcion para desafiar a Javascript \nPiedra = 0\nPapel = 1\nTijera = 2",0);
alert("Elegí = "+opciones[opjs]);

if (opusu==piedra){
    alert("Elegiste piedra, veamos que tal nos va");
    if(opjs==piedra){
        alert("Empate :o");
    }
    else if(opjs==papel){
        alert("Te gané ;D");
    }
    else if(opjs==tijeras){
        alert("Ganaste >:(");
    }
}
if (opusu==papel){
    alert("Elegiste papel, veamos que tal nos va");
    if(opjs==papel){
        alert("Empate :o");
    }
    else if(opjs==tijeras){
        alert("Te gané ;D");
    }
    else if(opjs==piedra){
        alert("Ganaste >:(");
    }
}
if (opusu==tijeras){
    alert("Elegiste tijeras, veamos que tal nos va");
    if(opjs==tijeras){
        alert("Empate :o");
    }
    else if(opjs==piedra){
        alert("Te gané ;D");
    }
    else if(opjs==papel){
        alert("Ganaste >:(");
    }
}
