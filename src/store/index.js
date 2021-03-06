import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';
// import app from './app';

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const Store = createStore({
    state: {
      isBfs: true,
      fastTravel: false,
      showAllEdges: false,
    },
    getters: {
      isBfs(state) {
        return state.isBfs;
      },
      fastTravel(state) {
        return state.fastTravel;
      },
      showAllEdges(state) {
        return state.showAllEdges;
      },
    },
    mutations: {
      setIsBfs(state, value) {
        state.isBfs = value;
      },
      setFastTravel(state, value) {
        state.fastTravel = value;
      },
      setShowAllEdges(state, value) {
        state.showAllEdges = value;
      },
    },
    actions: {
      setIsBfs({ commit }, value) {
        commit('setIsBfs', value);
      },
      setFastTravel({ commit }, value) {
        commit('setFastTravel', value);
      },
      setShowAllEdges({ commit }, value) {
        commit('setShowAllEdges', value);
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
