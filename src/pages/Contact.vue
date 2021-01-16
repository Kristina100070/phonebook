<template>
  <div class="contact">
    <button @click="back">Вернуться назад</button>
    <div class="contact_detail" @click="changeNames">Имя: {{ card.name }}</div>
      <input v-if="changeName" v-model="card.name">
    <div class="contact_detail" @click="changeNumbers">Телефон: {{ card.number }}</div>
    <div v-if="dataNew" >
      <!-- реализация отрисовки data-->
      <div class="contact_detail" v-for="(todo, index) in todos" :key="index">
        {{todo.data[key]}} : {{todo.data[value]}}
        <!-- -->
      </div>
        </div>
      <input v-if="changeNumber" v-model="card.number">
    <button v-if="changeNumber || changeName" @click="saveChange">Сохранить</button>

    <button v-if="activeAddNewInput" @click="addNewInput">Добавить данные</button>
    <input v-if="addDataNew" v-model="key">
    <input v-if="addDataNew" v-model="value">

    <button v-if="addDataNew" @click="saveNewData">Сохранить изменения</button>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  data() {
    return { 
      card: {
       name: '',
       number: '',
       id: this.$route.params.id,
       data: {}
   },
      changeName: false,
      changeNumber: false,
      addDataNew: false,
      dataNew: false,
      activeAddNewInput: true,
      key: '',
      value: '',   
    }
  },
  created() {
    const index = this.$route.params.id;
    const r = this.todos.find(item => item.id == index)
    this.card.name = r.name;
    this.card.number = r.number;
  },
  computed: {
    todos () { 
      return this.$store.getters.allContacts
    },
  },
  methods: {
    changeNames() {
      this.changeName = true;
      this.activeAddNewInput = false;
    },
    changeNumbers() {
      this.changeNumber = true;
      this.activeAddNewInput = false;
    },
    addNewInput() {
       this.activeAddNewInput = false;
      this.addDataNew = true;
      this.key = this.value = '';
    },
    saveChange() {
      this.$store.commit('saveChange', this.card);
      this.changeName = false;
      this.changeNumber = false ;
      this.activeAddNewInput = true;
    },
    saveNewData(){
      // добавляется только одно поле, и после нажатия кнопки для добавления
      //редактируется это же поле, хотя данные в state продолжают записываться 
      //корректно
      this.card.data[this.key] = this.value;
      this.activeAddNewInput = true;
      this.$store.commit('saveNewData', this.card);
      console.log(this.$store.getters.allContacts);
      this.dataNew = true;
      this.addDataNew = false;
    },
    back() {
      this.$router.push(`/`);
    }
  }
}


</script>

<style scoped>
.contact_detail {
  cursor: pointer;
  margin-bottom: 10px;
}
</style>
