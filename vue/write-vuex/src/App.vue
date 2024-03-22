<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const count = computed(() => store.state.count)
const double = computed(() => store.getters.double)

const add = () => {
  store.dispatch('add')
}
const asyncAdd = () => {
  store.dispatch('asyncAdd')
}
</script>

<template>
<div>
  {{ count }} * 2 = {{ count * 2 }}
  <button @click="asyncAdd">async add</button>
  <button @click="add">async add</button>
</div>
</template>

<style scoped>

</style>
