<script setup>
import { reactive, ref } from "vue";
import store from "../vuex/store";

const form = reactive({});
const modalRef = ref(null);

const onSubmit = (event) => {
  event.preventDefault();
  store.commit("add", {
    image: form.withImage ? "https://picsum.photos/320/200" : undefined,
    title: form.title,
    description: form.description,
  });
  modalRef.value.hide();
  onReset();
};

const onReset = () => {
  form.title = undefined;
  form.description = undefined;
  form.withImage = false;
};
</script>

<template>
  <b-button v-b-modal.add-new-task-modal>Add new</b-button>
  <b-modal
    ref="modalRef"
    id="add-new-task-modal"
    title="Add new task"
    hide-footer
  >
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-title"
        label="Title:"
        label-for="input-title"
      >
        <b-form-input
          id="input-title"
          v-model="form.title"
          placeholder="Enter title of new task"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-description"
        label="Description:"
        label-for="input-description"
      >
        <b-form-input
          id="input-description"
          v-model="form.description"
          placeholder="Enter description of new task"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-checkbox v-model="form.withImage">With image</b-form-checkbox>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-modal>
</template>
