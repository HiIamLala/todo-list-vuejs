<script setup>
import store from "../vuex/store";

const todoCount = store.getters.countTodos();
const doneCount = store.getters.countDone();
</script>

<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="left-menu">
        <b-nav-item href="#" class="mx-4">Stark</b-nav-item>
        <b-nav-item href="#" class="mx-4" active
          ><div style="display: flex; gap: 5px">
            To Do
            <div
              style="
                background-color: red;
                border-radius: 99px;
                width: 1.5rem;
                height: 1.5rem;
                text-align: center;
              "
            >
              {{ todoCount }}
            </div>
          </div>
        </b-nav-item>
        <b-nav-item href="#" class="mx-4">In Progress</b-nav-item>
        <b-nav-item href="#" class="mx-4">
          <div style="display: flex; gap: 5px">
            Completed
            <div
              style="
                background-color: red;
                border-radius: 99px;
                width: 1.5rem;
                height: 1.5rem;
                text-align: center;
              "
            >
              {{ doneCount }}
            </div>
          </div>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Tony Stark</b-nav-item>
        <b-nav-item href="#">Log Out</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped></style>
