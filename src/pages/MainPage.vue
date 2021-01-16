<template>
 <div id="app">
   <h1 class="app-title">Телефонная книга</h1>
  <form @submit.prevent="submit" class="form">
    <input class="input" type="text" placeholder="Имя" v-model="name" required>
		<input class="input" type="text" placeholder="Номер телефона" v-model="number" required>
    <button class="form-submit" type="submit">Добавить контакт</button> 
  </form>
  
  <div class="container_contact" v-for="(todo, index) in todos" 
  :key="index">
    <div @click="goToDetail(index)">
      <div class="contact">Имя: {{todo.name}}</div>
      <div class="contact">Номер: {{todo.number}}</div>
    </div>
    <button @click="deleteItem(index)">Удалить контакт</button>
  </div>  
 </div>
</template>

<script>

export default {
  name: 'App',
  data () {  
    return { 
       name: '',
       number: '',
       id: 0
    } 
  },

  methods: {
    submit() {
      this.$store.commit('createContact', {
        name: this.name,
        number: this.number,
        id: this.id
      });
      this.name=this.number = '';
       this.id++;
       
    },
    deleteItem(index) {
      if(confirm('вы уверены'))
      this.$store.commit('deleteContact', index);
    },
    goToDetail(index){
       this.$router.push(`/${index}`);
    }
  },
  computed: {
    todos () { 
      return this.$store.getters.allContacts},
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  
  width: 80%;
  min-height: 400px;
  background-color: #82f0a6d7;
}
.app-title {
  padding: 30px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  border: solid 1px green; 
  height: 40px;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 200px;
}
button {
  border: solid 1px white; 
  height: 40px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: indigo;
  color: whitesmoke;
  width: 250px;
}
.container_contact {
  border: solid 2px indigo;
  border-radius: 10px;
  background-color: khaki;
  width: 300px;
  margin: 5px auto;
  
}
.contact {
  padding-top: 15px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
