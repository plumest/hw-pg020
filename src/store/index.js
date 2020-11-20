import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const proxyUrl = 'http://localhost:3000'
const url = 'https://panjs.com/ywc18.json'

export default new Vuex.Store({
    state: {
        categories: [],
        provinces: [],
        priceRange: [],
        merchants: [],
        categorySelected: {name: 'ทั้งหมด', subcategories: []},
        subCategorySelected: 'ทั้งหมด',
        provinceSelected: 'พื้นที่ใกล้ฉัน',
        priceRangeSelected: 'กรุณาเลือกราคา',
        searchedText: ''
    },
    mutations: {
        setData(state, data) {
            state.categories = data.categories
            state.provinces = data.provinces
            state.priceRange = data.priceRange
            state.merchants = data.merchants
        },
        setCategorySelected(state, value) {
            state.categorySelected = value
            state.subCategorySelected = 'ทั้งหมด'
        },
        setSubCategorySelected(state, value) {
            state.subCategorySelected = value
        },
        setProvinceSelected(state, value) {
            state.provinceSelected = value
        },
        setPriceRangeSelected(state, value) {
            state.priceRangeSelected = value
        },
        setSearchedText(state, value) {
            state.searchedText = value
        },
    },
    actions: {
        async loadData(context) {
            const response = await axios(proxyUrl + '/?url=' + url);
            const data = response.data;
            console.log(data)
            context.commit('setData', data)
        },
        setProvinceSelected(context, value) {
            context.commit('setProvinceSelected', value)
        },
        setPriceRangeSelected(context, value) {
            context.commit('setPriceRangeSelected', value)
        },
        setSearchedText(context, value) {
            context.commit('setSearchedText', value)
        }
    },
    modules: {
    }
})
