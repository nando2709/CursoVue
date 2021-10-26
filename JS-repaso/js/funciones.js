
//Pa
function saludar(persona="Alien") {
    return `Hola muy buenos dias ${persona}`;


}

console.log(saludar())

const salud=persona=>{

    

    return `Hola muy buenas tardes  ${persona}`;

}
const res=salud("Fer");

console.log(res)


 let tienda={
     nombre:"Games",
     videojuegos:["GTA","Avengers Gold Edition","Dragon Ball Xenoverse"],
     mostrar:function () {
         console.log(this.nombre)
     },

     mostrar2(){
         this.videojuegos.forEach(juego=>{
             console.log(juego)
         })
     },
     mostrar3:()=>{

         console.log(tienda.nombre)

     }
 }

 tienda.mostrar()

 tienda.mostrar3()

 tienda.mostrar2()