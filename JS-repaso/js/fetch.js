const getNombre =(idPost)=>{
    // console.log(idPost);
    //Nos devuelve el post del id que mandamos a llamar como parametro
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    //La respuesta atravez con then es una promesa atraves de un json
       .then(res=>{
         return res.json()
     })
     //Procesar
       .then(post=>{
        //  console.log(post.userId)
        //Transformar nuevamente a json
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res=>{
            return res.json()  
        })
        .then(user=>{
            console.log(user)
        })
     })
}

getNombre(99);