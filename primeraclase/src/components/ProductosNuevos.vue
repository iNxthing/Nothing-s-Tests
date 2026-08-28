<template>
    <div class="Portatil">
        <img class="Portatil-IMG" :src="imagen" alt="">
        <h1>{{nombre }}</h1>
        <h2>{{precio}}</h2>
        <p>{{ descripcion }}</p>
        
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

    .Portatil h1{
        margin: 2px;
        text-align: center;
    }
    .Portatil h2{
        margin: 2px;
        text-align: center;
        color: green;
    }
    .Portatil p{
        margin: 30px;
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