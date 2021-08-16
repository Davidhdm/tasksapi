<template>
  <div>
    <input
      type="text"
      class="form-control inputUpdate"
      :value="taskTitle"
      @blur="hideInputUpdate(taskTitle)"
      @keyup.enter="updateTaskTitle(id)"
      autofocus="true"
    />
  </div>
</template>

<script>
import { taskService } from "@/services/taskService.js";
import TaskTitle from "@/components/TaskTitle.vue";
import Vue from "vue";

export default {
  name: "InputUpdate",
  props: {
    id: Number,
    taskTitle: String,
  },
  methods: {
    hideInputUpdate(taskTitle) {
      let getInputUpdate = document.querySelector(".inputUpdate");

      let TaskTitleComponent = Vue.extend(TaskTitle);
      let TaskTitleInstance = new TaskTitleComponent({
        propsData: { taskTitle: taskTitle },
      });

      TaskTitleInstance.$mount(getInputUpdate);
    },
    async updateTaskTitle(id) {
      let getInputUpdate = document.querySelector(".inputUpdate");
      let updatedTitle = getInputUpdate.value;

      try {
        await taskService.updateTask(id, updatedTitle);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
