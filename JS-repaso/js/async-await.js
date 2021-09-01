//Async await   


const obtenerPokemones=async()=>{
    try{
        //esperemos la respuesta de fetch
    const resp= await fetch("https://pokeapi.co/api/v2/pokemon")
    const data=await resp.json()
    data.results.forEach(element=>console.log(element.name))
    console.log(data.results);
    }catch(error){
        console.log(error)
    }

}

obtenerPokemones();