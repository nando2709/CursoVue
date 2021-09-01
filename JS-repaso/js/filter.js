
//Filter:crea un nuevo array con todos los elementos que cumplan una condicion

const obtenerPokemones=async()=>{
    try{
        //esperemos la respuesta de fetch
    const resp= await fetch("https://pokeapi.co/api/v2/pokemon")
    const data=await resp.json()
    data.results.forEach(element=>console.log(element.name))
   // console.log(data.results);
    const arrayNombres=data.results.filter(poke=>poke.name !== 'bulbasaur')
        console.log(arrayNombres)
    }catch(error){
        //console.log(error)
    }

}

obtenerPokemones();