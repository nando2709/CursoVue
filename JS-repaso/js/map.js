fetch("https://pokeapi.co/api/v2/pokemon")
    //Va esperar una promesa
      .then(res=>res.json())

      //then devolver el json
      .then(data=>{
          //console.log(data.results)
            //array de nombres de pokemon se crea dentro del then
          let arrayNombre=[];

          data.results.forEach(element=>
            //console.log(element.name)
            arrayNombre.push(element.name)
            );
            //console.log(arrayNombre)
      })
      .catch(error=>console.log(error))

      const obtenerPokemones=async()=>{
    try{
        //esperemos la respuesta de fetch
    const resp= await fetch("https://pokeapi.co/api/v2/pokemon")
    const data=await resp.json()
    data.results.forEach(element=>console.log(element.name))
   // console.log(data.results);
    const arrayNombres=data.results.map(poke=>poke.name)
        console.log(arrayNombres)
    }catch(error){
        //console.log(error)
    }

}

obtenerPokemones();