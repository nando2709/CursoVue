const getNombreAsync= async (idPost)=>{

//Tienes que usar try catch o ella no te amara
try {
    //El await va hacer la solicitud a todo ese fetch
    const resPost=   await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    //lee la respuesta del json
    const post= await resPost.json()
    
    const resUser =await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    const user= await resUser.json()
    
    // console.log(userpost)

} catch (error) {
    console.log(error)
}

}

getNombreAsync(20)



// const getNombreAxios= async (idPost)=>{

// //Tienes que usar try catch o ella no te amara
// try {
//     //El await va hacer la solicitud a todo ese fetch
//     const resPost= await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
//         console.log(resPost.data.userId)
//     const user =await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
//         console.log(user.data.name)


  
    

// } catch (error) {
//     console.log(error)
// }

// }

// getNombreAxios(20)