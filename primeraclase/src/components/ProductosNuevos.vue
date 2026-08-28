<template>
    <div class="Portatil">
        <img class="Portatil-IMG" :src="imagen" alt="">
        <h1>{{nombre }}</h1>
        <p>{{ descripcion }}</p>
        <h3>{{precio}}</h3>
    </div>
</template>

<script>
export default {
    props:{
        imagen: String,
        nombre: String,
        precio: Number,
        descripcion: String
        
    }

}
</script>

<style>
    .Portatil{
        height: 650px;
        width: 350px;
        border-radius: 12px;
        box-shadow: rgba(0,0,0, 0.44) 0px 3px 8px;
    }

    .Portatil h3{
        margin: 2px;
        text-align: center;
    }
    .Portatil-IMG{
        width: 100%;
        border-radius: 15px 15px 5px;
    }

    .boton-Portatil{
        width: 50px;
        height: 35px;
        border-radius: 3px;

    }
    .boton-Portatil:hover{
        cursor: pointer;
    }
</style>