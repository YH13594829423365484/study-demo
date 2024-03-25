<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import emitter from './emit.js'
import {ref} from 'vue'

const list =ref([])
emitter.on('list',(data)=>{
    console.log(data)
    list.value=data
})

</script>

<style lang="css" scoped>

</style>