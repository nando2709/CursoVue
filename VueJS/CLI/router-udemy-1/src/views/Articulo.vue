<template>

<titulo texto="Esto es un articulo con parametro bla bla bla"/>

<h2>
    Parametro:{{$route.params.id}}
</h2>

</template>

<script>

import Titulo from '../components/Titulo'
export default {
    components:{
        Titulo
    }

}
</script>

<style>

</style>