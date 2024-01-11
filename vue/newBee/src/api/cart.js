import axios from './axios.js'

export function getCart(){
    return axios.get('/shop-cart')
}

export function addToCart(params){
    return axios.post('/shop-cart', params)
}