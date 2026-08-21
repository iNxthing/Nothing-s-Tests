<template>
  <div class="Sistema-Mensaje">
    <img class="foto-perfil" :src="foto_perfil" alt="">
    <h4 class="nombre-usuario">{{ nombre_usuario }}</h4>
    <p class="parrafo">{{ mensaje }}</p>
    <img class="imagen" :src="imagen" alt="">
    <button class="boton-responder">{{ responder }}</button>
  </div>
</template>

<script>


export default {
    name: "MessageComponent",
    props:{
        foto_perfil: String,
        mensaje: String,
        imagen: String,
        responder: String,
        nombre_usuario: String
    }
}
</script>

<style>
    .Sistema-Mensaje{
        display: grid;
        grid-template-areas: 
        
        
        "Info perfil" "Info Perfil" "Info Mensaje"
        "Info Perfil" "Info Perfil" "Info Mensaje"
        "Boton" " Boton" "Boton"
        ;
        height: 350px;
        width: 650px;
        border-radius: 12px;
        box-shadow: rgba(0,0,0, 0.44) 0px 3px 8px;
    }
    .foto-perfil{
        grid-area: "Info Perfil";
        height: 20%;
        width: 10%;
        border-radius: 55px;
        margin-top: 5px;
        margin-left: 5px;
    }
    .nombre-usuario{
        grid-area: "Info Perfil";
        width: 20%;
        height: 5%;
    }
    .imagen{
        grid-area: "Info Mensaje";
        height: 70%;
        width: 100%;
        border-radius: 15px;
        margin-top: 20px;
        margin-left: 15px;
    }
    .boton-responder{
        align-self: flex-end;
        height: 5%;
        width: 20%;
        border-radius: 10px;
    }

</style>