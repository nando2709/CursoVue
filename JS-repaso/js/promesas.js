//Promesas sirve para trabajar con peticiones asincronas
//sirve para trabajar con callbacks
//Recibe un parametro
//resolve=exitoso reject=denegado
//.then es un metood

// let promesas=new Promise(function (resolve,reject) {
    
//     let suma=2+8;
//     if(suma===12){
//         resolve("La suma es correcta")
//     }else{
//         reject("La suma no es correcta")
//     }
// });
// //la funcion resolve se encuentra vinculado con el metodo then
// promesas.then(function(mensaje){
//     console.log(mensaje)

// }).catch(function(error){
//     console.log(error)
// })

function mostrarCelular(mensaje){
    return new Promise(function (resolve,reject){
        if(mensaje){
            resolve(`Obtuviste un ${mensaje.marca}`)
            
        }else{
            reject("Error")
        }

    });
}

function miPromesa(params) {
    return new Promise(function (resolve,reject) {
    
    let tareaHecha=true;
    if(tareaHecha===true){
        let celular={
            marca:"iPhone 13 Pro",
            color:"azul medianoche",
            almacenamiento:"1TB"
        }
        resolve(celular)
    }else{
        reject("No tuviste nada por feo :v")
    }
});
}
//.then es un metodo
miPromesa().then(function(mensaje){
//retornar a otra  promesa despues de haber obtenido el mensaje
    return mostrarCelular(mensaje);
}).then (function (respuesta) {
    console.log(respuesta)
    
}).catch(function(error){
    console.log(error)
})
