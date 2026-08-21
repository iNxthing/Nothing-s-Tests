<template>
    <div class="card">
        <img class="card-img" :src="imagen" alt="">
        <h3>{{ nombre }}</h3>
        <p>{{ parrafo }}</p>
        <button class="boton-card"></button>
    </div>
</template>

<script>
export default {
    props:{
        imagen: String,
        nombre: String,
        parrafo: String
    }

}
</script>

<style>
    .card{
        height: 650px;
        width: 350px;
        border-radius: 12px;
        box-shadow: rgba(0,0,0, 0.44) 0px 3px 8px;
    }

    .card h3{
        margin: 2px;
        text-align: center;
    }
    .card-img{
        width: 100%;
        border-radius: 15px 15px 5px;
    }

    .boton-card{
        width: 50px;
        height: 35px;
        border-radius: 3px;

    }
    .boton-card:hover{
        cursor: pointer;
    }
</style>