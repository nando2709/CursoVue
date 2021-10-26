let peliculas=["Avengers End Game","Spider-Man:HomeComing","Black Widow","Shan-chi"]

console.log(peliculas)

console.log(...peliculas)


function mostrarPeliculas(pelicula1,pelicula2){

    console.log(`
        ***********Peliculas de Marvel***********   
            ${pelicula1}
            ${pelicula2}
    
    `);

}

mostrarPeliculas("Avengers End Game","Spider-Man:HomeComing")

mostrarPeliculas(...peliculas)


let peliculasMarvel=["Avengers Infinity War","Ant-Man and Wap",...peliculas]


console.log(peliculasMarvel)


//Rest
//representa un numero indefinido de parametros usando un array

function pelicula(pelicula1,pelicula2,...restoDePeliculas){
    console.log(pelicula1)
    console.log(pelicula2)
    for(pelicula of restoDePeliculas){
            console.log(pelicula)

    }

}
pelicula("IronMan1","IronMan2","IronMan3","Capitan America","Thor")
