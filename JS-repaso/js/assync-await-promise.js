console.clear()

const userList=[
    {id:1,name:'Fernando',pais:4},
    {id:2,name:'Dulce',pais:3},
    {id:3,name:'Sebastian',pais:2},
    {id:4,name:'Luz Clarita',pais:1},
];
const paisList={
    '1':'Perú',
    '2':'Argentina',
    '3':'Chile',
    '4':'Mexico',
};          



  function getUser(){
      //declarando una funcion con un constructor

      return new Promise((resolve,reject)=>{
          //metodo o un llamado a la api
          setTimeout(() => {
              resolve(userList)
          }, 2000);

      })
  }
  function getPaises(){
   return new Promise((resolve)=>{
       setTimeout(() => {
           resolve(paisList)
       }, 1000);
   })   
  }

  //acceso al netodo then con .
// getUser().then((res)=>{
//     console.log('User',res)

// })

// getPaises().then((res) =>{
//      console.log('Paises',res)

// });
// const userPromise=getUser();
// userPromise.then((users)=>{

//     console.log('usuarios',users);

//     return getPaises();
// }).then((paises)=>{

//     console.log('paises',paises);
    
// }).catch((error)=>console.log(error))

 async function getInfo(){
    const users=await getUser();
    const paises=await getPaises();

    console.log('Usuarios',users);
    console.log('Paises',paises);

}

getInfo();
