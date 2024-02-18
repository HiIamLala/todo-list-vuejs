<script setup compatConfig="{MODE: 3}">
import store from "../vuex/store";
import AddToDo from "./AddToDo.vue";
import ToDoCard from "./ToDoCard.vue";

const todos = store.getters.listAllTodos();
const addNewTask = () => {};
</script>

<template>
  <b-container class="mt-4">
    <div
      style="display: flex; justify-content: space-between; margin-bottom: 20px"
    >
      <h3>To do list</h3>
      <AddToDo />
    </div>
    <div class="todo-list">
      <ToDoCard v-for="todo in todos" :key="todo.id" :data="todo"></ToDoCard>
    </div>
  </b-container>
</template>

<style scoped>
.todo-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>
