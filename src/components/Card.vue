<template>
  <div class="card" >
   <div>Имя: {{ item.name }}</div>
   <div>Телефон: {{ item.number }}</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['item']
}
</script>

<style scoped>

</style>
