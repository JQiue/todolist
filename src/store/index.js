import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    save(state) {
      localStorage.setItem('todolist', JSON.stringify({
        items: state.items
      }));
    },
    push(state, data) {
      state.items.push(data);
      this.commit('save');
    },
    complete(state, id) {
      state.items.forEach(element => {
        if (id == element.id) {
          element.type = 'done';
          return true;
        }
        return true;
      });
      this.commit('save');
    },
    edit(state, {id, content}) {
      state.items.forEach(element => {
        if (id == element.id) {
          element.content = content;
          return true;
        }
        return true;
      });
      this.commit('save');
    },
    revoke(state, id) {
      state.items.forEach(element => {
        if (id == element.id) {
          element.type = 'do';
        }
      });
      this.commit('save');
    },
    delete(state, id) {
      let arr = state.items.filter(element => {
        if (id == element.id) {
          console.log('找到啦');
          return false;
        }
        return true;
      });
      state.items = arr;
      this.commit('save');
    }
  },
  actions: {},
  modules: {}
})