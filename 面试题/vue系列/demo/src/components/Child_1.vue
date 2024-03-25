<template>
    <div class="bd">
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'

const list = ref(['html', 'css'])

defineProps({
    message: String,
    default: ''
})
</script>

<style lang="css" scoped></style>