import _ from "lodash";
import { createStore } from "vuex";
import data from "./todo.data.json";
import VuexPersistence from "vuex-persist";

const store = createStore({
  plugins: [new VuexPersistence().plugin],
  state() {
    return {
      todos: data,
    };
  },
  mutations: {
    add(state, payload) {
      console.log("🚀 ~ add ~ payload:", payload);
      // Add new task
      state.todos.push({
        ...payload,
        id: _.uniqueId(),
        done: false,
        createdAt: Date.now(),
      });
    },
    delete(state, payload) {
      console.log("🚀 ~ delete ~ payload:", payload);
      // Delete task
      const index = state.todos.findIndex(
        ({ id: findId }) => findId === payload
      );

      state.todos.splice(index, 1);
    },
    update(state, payload) {
      console.log("🚀 ~ update ~ payload:", payload);
      const { id, value } = payload;

      const task = state.todos.find(({ id: findId }) => findId === id);

      // Invalid index;
      if (task == null) return;

      // Update task
      Object.assign(task, value);
    },
  },
  getters: {
    listAllTodos: (state) => (query) => {
      const { sort } = query ?? {};

      return state.todos.sort((a, b) =>
        sort ? a.createdAt - b.createdAt : b.createdAt - a.createdAt
      );
    },
    countTodos: (state) => () => {
      return state.todos.filter(({ done }) => !done).length;
    },
    countDone: (state) => () => {
      return state.todos.filter(({ done }) => done).length;
    },
  },
});

export default store;
