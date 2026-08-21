<template>
  <div class="home">
    <menu-component></menu-component>
    <h1>HOLA ESTA ES MI APP</h1>
    <div class="container">
          <card-component
            imagen="https://i.pinimg.com/736x/20/d4/73/20d47343d108e7cb98f229db600744bc.jpg"
            nombre="Whatever People Say I Am, That's What I'm Not"
            parrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit, qui ut quasi minima corporis dolor eum, dolorem neque temporibus totam omnis repellat quos ipsam ducimus deserunt, nam enim cupiditate?"
          ></card-component>
          <message-component
          foto_perfil="https://i.pinimg.com/1200x/04/c7/4d/04c74d8bb3a31fa950d6b4d3ac96aa32.jpg"
          nombre_usuario="Nothing"
          imagen="https://i.pinimg.com/736x/12/66/94/1266948080bf9d3b09274d5ec91d3bd0.jpg"
          ></message-component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  

  }
}
</script>

<style>
  .container{
    display: flex;
    justify-content: space-between;
  }
</style>
