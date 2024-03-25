<template>
    <div>
        <input type="text" v-model="msg">
        <button @click="add">添加</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import emitter from './emit.js'

const list = ref(['html', 'css'])
const msg=ref('')


const add = () => {
    list.value.push(msg.value)
}

onMounted(() => {
    emitter.emit('list', list.value)
})

</script>

<style lang="css" scoped>

</style>