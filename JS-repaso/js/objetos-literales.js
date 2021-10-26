let peliculas={
    titulo:"Spider-Man:No Way Home",
    genero:"Ciencia-Ficcion",
    year:2021,
    director:"San Reimi",
    mostrar:function () {
        return ` 
                ***LA PELICULA MAS ESPERADA POR TODOS***

                ${this.titulo}-${this.genero}
               `
    }
};
peliculas.pais="USA"
delete peliculas.director;
// console.log(peliculas.pais);
console.log(peliculas)

//el operado in :Ver si esta dentro de algo
console.log("titulo" in peliculas )

// recorrer un objeto y mostrar cada uno de esos datos
//vA a recorrer peliculas y cada propiedad que tenga el objeto lo va a guardar en la variable propiedad
for (const propiedad in peliculas) {
    let dato_actual = peliculas[propiedad];
    if (typeof(dato_actual)!="function" ) {
        console.log(dato_actual);
           
    }
}

// console.log(peliculas.titulo,"-",peliculas.genero )
console.log(peliculas.mostrar());