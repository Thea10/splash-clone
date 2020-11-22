import Vue from "vue";
import Vuex from "vuex";
import { getPhotos, searchPhotos } from "../services/unsplashService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: []
  },
  getters: {
    getImages: state => state.images
  },
  mutations: {
    SET_IMAGES(state, payload) {
      state.images = payload;
    }
  },
  actions: {
    async GET_IMAGES({ commit }) {
      try {
        const response = await getPhotos();
        commit("SET_IMAGES", response.data.results);
      } catch (error) {
        return handleError(error);
      }
    },

    async SEARCH_IMAGES({ commit }, keyword) {
      try {
        const response = await searchPhotos(keyword);
        commit("SET_IMAGES", response.data.results);
      } catch (error) {
        return handleError(error);
      }
    }
  }
});

function handleError(error) {
  console.error(error);
  return Promise.reject(error);
}
