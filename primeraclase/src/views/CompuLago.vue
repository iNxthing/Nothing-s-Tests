<template>
  <div class="home">

    <div class="container">
      <productos-nuevos v-for="Portatil in Portatiles" 
      :key="Portatil.id" 
      :imagen="Portatil.imagen" 
      :nombre="Portatil.nombre" 
      :precio="Portatil.precio"
      :descripcion="Portatil.descripcion">
    </productos-nuevos>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  

  },
  data(){
    return{
      Portatiles: [
      {
        id: "1",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIz04agO18DCDbW-eDOsbFVvWUBjMrAOoNj5-PVxfqaQ&s=10",
        nombre: "MSI CYBORG 15",
        precio: "2.500.000",
        descripcion: "XD1"
        
      },
      {
        id: "2",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRJLthDbkXlKfa5ghyMTIAbTSYGcCTjRl80Gv0AIcaA&s",
        nombre: "HP VICTUS 15",
        precio: "2.500.000",
        descripcion: "Tamaño de la pantalla - 15 pulgadas \n Nucleos del procesador - Octa Core \n Memoria"
        
      }


      ]
    }
    
  },
  methods:{
     saludar: function(){
      alert("Hola " + this.nombre)

     } 
    }
}
</script>

<style>
  .container{
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
  }
  .Card1{
    transition: transform 0.3s ease, box-shadow 0.3s ease;

  }
  .Card1:hover, .Card1:focus-visible{
    box-shadow: 0 10px 15px rgba(0,0,0,0.3);
  }
  @media (prefers-reduced-motion: no-preference){
    .Card1:hover,.Card1:focus-visible{
      transform: scale(1.1);
    }
  }

</style>
