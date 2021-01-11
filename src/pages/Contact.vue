<template>
  <div class="contact">
   <card />
  </div>
</template>

<script>
//Найти способ передачи контакта из главной страницы
import Card from '../components/Card.vue';
export default {
  name: 'Contact',
  components: {
    card: Card
  }, 
}

</script>

<style scoped>

</style>
