//fetch
fetch("https://pokeapi.co/api/v2/pokemon")
    //Va esperar una promesa
      .then(res=>res.json())

      //then devolver el json
      .then(data=>{
          console.log(data.results)
          data.results.forEach(element=>console.log(element.name))
      })
      .catch(error=>console.log(error))