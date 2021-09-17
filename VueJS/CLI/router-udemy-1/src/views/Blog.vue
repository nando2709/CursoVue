<template>
<Titulo  texto="Titulo del blog" />
<!--Es la json place holder-->
<button @click="consumirApi">Consumir Api</button>
</template>


<script>

import Titulo from '../components/Titulo'

export default {

   components: {
    Titulo
  },
  data() {
      return {
          arrayBlog:[{

          }]
      }
  },
  methods: {
      //Hacer una solicitud de un sitio externo
   async   consumirApi(){
       try{
           //leer los objetos
           const data=await fetch('https://jsonplaceholder.typicode.com/posts')
           const array=await data.json()
           console.log(array)

       }catch(error){
           console.log(error)
       }

      }
      
  },
}
</script>

<style>

</style>