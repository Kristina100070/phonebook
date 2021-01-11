<template>
  <div id="app">
    <input type="text" v-model="name">
		<input type="text" v-model="number">
    <button @click="add">Добавить контакт</button>
   <div v-for="(item, index) in list" :key="index">
      <router-link :to="'/contact/:' + index">
       <card :item="item" />
      </router-link>
      <button-delete @remove-item="deleteItem(index)"></button-delete>
   </div>  
  </div>
</template>

<script>
import DeleteButton from '../components/DeleteButton'
import Card from '../components/Card.vue';
export default {
  name: 'App',
  data() {
    return {
      list: [],
      name: '',
      number: '',
    }
  },
  components: {
    'button-delete': DeleteButton,
    card: Card
  },
  methods: {
    //Добавление нового контакта
    add() {
      const obj = {};
      obj.name = this.name;
      obj.number = this.number;
      this.list.push(obj);
      this.name = '';
      this.number = '';   
    },
    //Удаление контакта
    deleteItem(index) {
      if(confirm('вы уверены'))
      this.list.splice(index, 1)
    },
    //Сохранение конкретного контакта, для передачи в страницу информации о контакте
    details(item) {
       this.$emit("details", item)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
