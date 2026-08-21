<template>
  <div>
    <menu-component></menu-component>
    <MessageComponent mensaje="ola"></MessageComponent>
  </div>

</template>

<script>
import MessageComponent from '../components/MessageComponent.vue'
import MenuComponent from '../components/MenuComponent.vue'
export default {
  components: { MessageComponent, MenuComponent },

}
</script>

<style>

</style>