//Con symbol se puede conseguir que un valor sea unico

let animal=Symbol("Perro")
let animal2=Symbol("Perro")

let user={
    id:2,
    nombre:"Fernando",
    edad:23
}
let propiedadoculta=Symbol('id')
user[propiedadoculta]=7
console.log(user.id, user[propiedadoculta])
console.log(animal,animal2)
console.log(animal === animal2)
console.log(user);
