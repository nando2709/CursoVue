//Desestrucion:Nos permiete extraer datos de objetos array string y convertirlos a variables de cada uno de sus datos


let frutas=["manzana","sandia","pera","naranja"]

let[manzana,sandia,pera,naranja]=frutas;

console.log(frutas)

//destructuring de objetos

let persona={
    nombre:"Fer",
    apellido:"Castillo Ipanaque",
    edad:23,
    pais:"Peru"
};
let{nombre,apellido,edad,pais}=persona;


//destructuring de string

let usuario="Fernanndo Castillo 7465352 27/12/1997 Paita";

let[nombres,apellido1,DNI,fechaNacimiento,ciudad]=usuario.split(" ");

//crear varias variables 

let lenguaje="JS",framework="VUE",editor="VSC"


//utilidad parametros funcionales
function mostrarUsuario(nombres,apellidos,edad=24){
    console.log(nombres,apellido,edad);
}

mostrarUsuario("Fernando","Castillo")