<template>
  <div class="home">

    <div class="container">
      <productos-nuevos  v-for="Portatil in Portatiles" 
      :key="Portatil.id" 
      :imagen="Portatil.imagen" 
      :precio="Portatil.precio"
      :nombre="Portatil.nombre" 
      :stock="Portatil.stock"
      :descripcion="Portatil.descripcion"
      
      >
    </productos-nuevos>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ProductosNuevos from '@/components/ProductosNuevos.vue'

export default {
  name: 'HomeView',
  components: {
    ProductosNuevos

  },
  data(){
    return{
      Portatiles: [
      {
        id: "1",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIz04agO18DCDbW-eDOsbFVvWUBjMrAOoNj5-PVxfqaQ&s=10",
        nombre: "MSI CYBORG 15",
        precio: "2.500.000",
        stock: 0,
        descripcion: "\nTamaño de la pantalla - 15 pulgadas \n Nucleos del procesador - Octa Core \n Memoria RAM -16GB \n Almacenamiento - 512GB SSD"
        
      },
      {
        id: "2",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRJLthDbkXlKfa5ghyMTIAbTSYGcCTjRl80Gv0AIcaA&s",
        nombre: "HP VICTUS 15",
        precio: "2.500.000$",
        stock: 100,
        descripcion: "\nTamaño de la pantalla - 15 pulgadas \n Nucleos del procesador - Octa Core \n Memoria RAM -16GB \n Almacenamiento - 512GB SSD"
        
      },
      {
        id: "3",
        imagen: "https://static.wixstatic.com/media/5fc14a_57d0667c77c94db393a3fc91db462b9b~mv2.png/v1/fill/w_580,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5fc14a_57d0667c77c94db393a3fc91db462b9b~mv2.png",
        nombre: "ASUS ROG Zephyrus G16",
        precio: "10.500.000",
        stock: 700,
        descripcion: "\nMonitor: 16″ 2K WQXGA OLED \nProcesador: INTEL CORE ULTRA 9 185H \nGrafica: NVIDIA GEFORCE RTX 4070 8GB \n Memoria RAM: 32GB \n Almacenamiento: NVMe 1TB."
        
      },
      {
        id: "4",
        imagen: "https://static.wixstatic.com/media/5fc14a_57d0667c77c94db393a3fc91db462b9b~mv2.png/v1/fill/w_580,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5fc14a_57d0667c77c94db393a3fc91db462b9b~mv2.png",
        nombre: "ASUS ROG Zephyrus G16",
        precio: "10.500.000",
        stock: 700,
        descripcion: "\nMonitor: 16″ 2K WQXGA OLED \nProcesador: INTEL CORE ULTRA 9 185H \nGrafica: NVIDIA GEFORCE RTX 4070 8GB \n Memoria RAM: 32GB \n Almacenamiento: NVMe 1TB."
        
      },
      {
        id: "5",
        imagen: "https://static.wixstatic.com/media/5fc14a_57d0667c77c94db393a3fc91db462b9b~mv2.png/v1/fill/w_580,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5fc14a_57d0667c77c94db393a3fc91db462b9b~mv2.png",
        nombre: "ASUS ROG Zephyrus G16",
        precio: "10.500.000",
        stock: 700,
        descripcion: "\nMonitor: 16″ 2K WQXGA OLED \nProcesador: INTEL CORE ULTRA 9 185H \nGrafica: NVIDIA GEFORCE RTX 4070 8GB \n Memoria RAM: 32GB \n Almacenamiento: NVMe 1TB."
        
      },
      {
        id: "6",
        imagen: "https://static.wixstatic.com/media/5fc14a_57d0667c77c94db393a3fc91db462b9b~mv2.png/v1/fill/w_580,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5fc14a_57d0667c77c94db393a3fc91db462b9b~mv2.png",
        nombre: "ASUS ROG Zephyrus G16",
        precio: "10.500.000",
        stock: 700,
        descripcion: "\nMonitor: 16″ 2K WQXGA OLED \nProcesador: INTEL CORE ULTRA 9 185H \nGrafica: NVIDIA GEFORCE RTX 4070 8GB \n Memoria RAM: 32GB \n Almacenamiento: NVMe 1TB."
        
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
    padding: 20px 0;
  }
  .Portatil{
    transition: transform 0.3s ease, box-shadow 0.3s ease;

  }
  .Portatil:hover, .Portatil:focus-visible{
    box-shadow: 0 10px 15px rgba(0,0,0,0.3);
    transform: scale(1.1);
  }
  @media (prefers-reduced-motion: no-preference){
    .Portatil{
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  }

</style>
