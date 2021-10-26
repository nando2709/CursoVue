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
            reject(Error("A ocurrido un error!!"))
    },300);

    });
   
}
//then recoge los datos
conseguirProductos()
                    .then((items)=>console.log(items))
                    .catch(error=>console.log(error.message))
                    .finally(()=>console.log("Promesa finalizada"));
