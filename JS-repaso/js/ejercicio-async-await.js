const getNombreAsync= async(idPhotos)=>{

    try {
        
        const resFotos=await fetch(`https://jsonplaceholder.typicode.com/photos/${idPhotos}`)
        const fotos= await resFotos.json();
         console.log(fotos);
        
         //Es el id del album foto 
         const resUser =await fetch(`https://jsonplaceholder.typicode.com/users/${fotos.albumId}`)
         const user= await resUser.json()
        console.log(user);
        console.log(user.name)


    } catch (error) {
        console.log('Esto explotara')
    }
}


getNombreAsync(30)