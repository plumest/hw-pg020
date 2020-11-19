import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [],
        provinces: [],
        priceRange: [],
        merchants: []
    },
    mutations: {
        setData(state, data) {
            state.categories = data.categories
            state.provinces = data.provinces
            state.priceRange = data.priceRange
            state.merchants = data.merchants
        }
    },
    actions: {
        async loadData(context) {
            const response = await axios('http://localhost:3000');
            const data = response.data;
            console.log(data)
            context.commit('setData', data)
        }
    },
    modules: {
    }
})
