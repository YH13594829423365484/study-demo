import axios from './axios.js'

export function getCart(params){
    return axios.get('/shop-cart',params)
}

export function addToCart(params){
    return axios.post('/shop-cart', params)
}
export function moditifyCart(params){
   return axios.put('/shop-cart', params)
}
export function deleteCartItem(params){
    return axios.delete(`/shop-cart/${params}`)
 }