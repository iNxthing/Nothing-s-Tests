<template>
  <div class="home">
    <menu-component></menu-component>
    <h1>HOLA ESTA ES MI APP</h1>
    <div class="container">
      <productos-nuevos v-for="Portatil in Portatiles" 
      :key="Portatil.id" 
      :imagen="Portatil.imagen" 
      :nombre="Portatil.nombre" 
      :precio="Portatil.precio"
      :descripcion="Portatil.descripcion">
    </productos-nuevos>
          <!-- <CardComponent v-for="Album in Albums" :key="Album.id" 
                      :imagen="Album.imagen" 
                      :nombre="Album.nombre" 
                      :parrafo="Album.parrafo" 
                      :edad="Album.año">
      </CardComponent> -->
      

      <!-- <CardComponent :imagen="juan.urlImage" :nombre="juan.nombre" :parrafo="juan.info" :edad="juan.edad">
      </CardComponent>

      <CardComponent :imagen="theo.urlImage" :nombre="theo.nombre" :parrafo="theo.info" :edad="theo.edad">
      </CardComponent> -->

      <!-- <input v-model="txtNombre" type="text">
      <h1>{{ txtNombre }}</h1> -->
      <!-- <button @click="saludar">SALUDAR</button> -->


      <!-- <CardComponent imagen="https://primefaces.org/cdn/primevue/images/card-vue.jpg" nombre="Theo"
        parrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ">
      </CardComponent>
      <CardComponent imagen="https://primefaces.org/cdn/primevue/images/card-vue.jpg" nombre="Rolon"
        parrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ">
      </CardComponent>

      <CardComponent imagen="https://primefaces.org/cdn/primevue/images/card-vue.jpg" nombre="Oscar"
        parrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ">
      </CardComponent>

      <CardComponent imagen="https://primefaces.org/cdn/primevue/images/card-vue.jpg" nombre="REguillo"
        parrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ">
      </CardComponent> -->

      <!-- <CardComponent
       imagen=""
       nombre=""
       parrafo="">
      </CardComponent> -->
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
        imagen: "https://i.pinimg.com/736x/30/2e/3e/302e3e176b936fe2296b624d268d243d.jpg",
        nombre: "OK COMPUTER",
        precio: "2.500.000",
        descripcion: "XD1"
        
      },
      {
        id: "2",
        imagen: "https://i.pinimg.com/736x/30/2e/3e/302e3e176b936fe2296b624d268d243d.jpg",
        nombre: "OK COMPUTER",
        precio: "2.500.000",
        descripcion: "XD2"
        
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
