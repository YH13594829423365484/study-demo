<script setup>
//模块化
// import Counter from './components/Counter.vue';
// import TodoList from './components/TodoList.vue';
import Banner from './components/Banner.vue';
</script>

<template>
  <!-- 挂再Counter组件上   管理  复用 -->
  <!-- <Counter /> -->
  <!-- <TodoList /> -->
  <h1>推荐</h1>
  <Banner :per-page="3"/>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>