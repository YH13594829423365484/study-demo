import axios from './axios.js'

export function getCart(params){
    return axios.get('/shop-cart',params)
}

export function addToCart(params){
    return axios.post('/shop-cart', params)
}
