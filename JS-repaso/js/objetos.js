const usuario ={
    nombre:'Fernando', 
    apellido:'Castillo',
    suscripcion:true,
    cicloFacturacion:'mensual',
    planes:['mensual','trimestral','anual']


}

console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.apellido) 
console.log(usuario.planes[1])

usuario.id=1;

console.log(usuario.id);