<template>
    <div class="hd">
        <input type="text" name="" id="" v-model="msg">
        <button @click="add">添加</button>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const msg = ref('')
const list = ref(['html', 'css'])

const add = () => {
    list.value.push(msg.value)
}

defineExpose({ list }) // 愿意暴露出来的变量

</script>

<style lang="css" scoped></style>