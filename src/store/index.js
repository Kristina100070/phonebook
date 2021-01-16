import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    contacts: [],  
  },
  getters: { 
    allContacts: (state) => state.contacts  
  },
  mutations:  {
    createContact(state, newContact) {
      state.contacts.push(newContact) 
    },
    deleteContact(state, index) {
      state.contacts.splice(index, 1)
    },
    saveChange(state, reCreateContact) {
     const item = state.contacts.find(item => item.id == reCreateContact.id)
      item.name = reCreateContact.name;
      item.number = reCreateContact.number;
      
    },
    saveNewData(state, reCreateContact) {
      const item = state.contacts.find(item => item.id == reCreateContact.id)
      item.data = reCreateContact.data;
    }
  }
});
