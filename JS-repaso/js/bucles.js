let nombres=[
    "Tony Stark",
    "Thor",
    "Steve Rogers",
    "Clin Barton"
];
//Bucle clasico
for(let i=0;i<nombres.length;i++){
    // console.log(nombres[i]);
}

//Bucle con FOR of
//creame la variable nombre encada iteracion mientras que vaya recorriendo nombres
for(let nombre of nombres){
    // console.log(nombre)
}

//Bucle IN: Recorre el contenido de mis indices,tambien puedes recorrer los json

for(let indice in nombres){
    // console.log(indice,nombres[indice])
}

//for-each

nombres.forEach((nombre_actual,indice) => {
    // console.log(indice,nombre_actual)
    
});


//Recorrer string
let sitioWeb="animeWatch";

for(let letra of sitioWeb){
    // console.log(letra)
}
//iterables
//Iterable es un protocolo que se va a aplicar a cualquier array
const mi_iterable=nombres[Symbol.iterator]();
// console.log(typeof(mi_iterable), mi_iterable)

console.log(mi_iterable.next());

//JSON
let fruta={
    nombre:"Manzana",
    color:"rojo",
    precio:"20 soles"
};
//Object values convertir los objetos en un array con los valores que tiene un objeto
fruta[Symbol.iterator]=function(){
    let indice=0;
    let valores=Object.values(this);
    
    return {
        next(){

            if(indice >= valores.length){
                return{
                    done:true,
                    value:undefined

                };

            }

            return{
                done:false,
                value:valores[indice],
                indice:indice++

            }
        }
    };
}
for(let propiedad of fruta){

    console.log(propiedad);
    
}