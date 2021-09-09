<!-- Es el html-->

<template>
  <h1>{{texto}}</h1>
</template>

<!-- EL script es La logica de vue-->
<script>
export default {
      name: 'Titulo',
    //capturar los props
    props:{
        texto:String
    }

}
</script>

<!-- El scoped es aquel que el estilo funciona para ese componente-->
<style scoped>
h1{
    color:blue
}

</style>