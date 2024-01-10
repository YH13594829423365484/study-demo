import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useTodoStore = defineStore('todos', () => {
    const todos = ref([{ text: 'Learn Pinia', done: false }]);
    return {
        todos
    }
})
