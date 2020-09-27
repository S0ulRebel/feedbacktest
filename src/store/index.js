import Vue from 'vue';
import Vuex from 'vuex';
import films from './films/index';
import people from './people/index';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    films,
    people,
  },
});
