<script setup compatConfig="{MODE: 2}">
import dayjs from "dayjs";
import { watchEffect } from "vue";
import store from "../vuex/store";

const props = defineProps(["data"]);

const { data: todo } = props;

watchEffect(() => {
  console.log(todo);
});

const toggleDone = () => {
  store.commit("update", {
    id: todo.id,
    value: {
      done: !todo.done,
    },
  });
};

const deleteTask = () => {
  store.commit("delete", todo.id);
};
</script>
<template>
  <b-card :img-src="todo.image" img-alt="Task Image" img-top class="todo-card">
    <div class="todo-card-body">
      <b-card-title
        :style="{ 'text-decoration': todo.done ? 'line-through' : undefined }"
      >
        {{ todo.title }}
      </b-card-title>
      <b-card-text
        :id="`description-${todo.id}`"
        class="description"
        style="flex: 1"
      >
        {{ todo.description }}

        <b-tooltip :target="`description-${todo.id}`" triggers="click">
          {{ todo.description }}
        </b-tooltip>
      </b-card-text>

      <div class="text-secondary mb-2" style="text-align: right">
        Created at {{ dayjs(todo.createdAt).format("YYYY-MM-DD hh:mm:ss") }}
      </div>

      <div class="control">
        <b-button @click="toggleDone" variant="primary"
          >{{ todo.done ? "Undone" : "Done" }}
        </b-button>
        <b-button @click="deleteTask" variant="outline-secondary"
          >Delete</b-button
        >
      </div>
    </div>
  </b-card>
</template>

<style scoped>
.todo-card {
  min-height: 400px;
}

.todo-card-body {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.control {
  display: flex;
  gap: 10px;
}

.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
}
</style>
