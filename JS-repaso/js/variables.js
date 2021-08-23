//var  let const
//var es completamente global
//let es mas privado
//las constantes viven dentro del scope

var edad = 10;
if (true) {
  var edad = 20;
  console.log(edad);
}
console.log(edad);

let age = 10;
if (true) {
  let age = 10;
  console.log(age);
}
console.log(age);

const edades = 20;
if (true) {
  const edades = 40;
  console.log(edades);
}
console.log(edades);

var arrayNumero = [10, 20, 30, 40];
var arrayNumero = [10, 20, 30, 40, 50];
console.log(arrayNumero);

const arraynumbers = [10, 20, 30, 40, 50];
arraynumbers.push("Ella no me ama");
console.log(arraynumbers);

const persona = {
  nombre: "Fernando",
  apellido: "Castillo",
  edad: 23
};

persona.edad = 24;
console.log(persona);
