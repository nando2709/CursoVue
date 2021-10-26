
//Js lee de arriba hacia abajo y tiene todo esos datos
//Para solucionar la asincronia y que js se espere antes de ejecutar la funcion se usa la promesas 
let productos=[
    {
        nombre:"Laptop IPAD 500",
        marca:"Lenovo",
        precio:2500
    },
    {
        nombre:"Tablet",
        marca:"Sansung",
        precio:700
    },
    {
        nombre:"Camara Lumix 600",
        marca:"Lumix de Panasonic",
        precio:900
    }
];
const conseguirProductos=()=>{

    return new Promise((resolve,reject)=>{

        console.log("esperando")
             setTimeout(()=>{
       resolve(productos) ;

    },500);

    });
   
}
//then recoge los datos
conseguirProductos().then((items)=>{
    console.log(items)
})