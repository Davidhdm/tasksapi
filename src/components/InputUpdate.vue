<template>
  <div>
    <input
      type="text"
      class="form-control inputUpdate"
      :value="'asdf'"
      @blur="hideInputUpdate(taskTitle)"
      @keyup.enter="testfn"
      autofocus="true"
    />
  </div>
  
</template>

<script>
import { taskService } from "@/services/taskService.js";
import TaskTitle from "@/components/TaskTitle.vue";
import store from "@/store/index.js";

export default {
  name: "InputUpdate",
  methods: {
    testfn() {
      console.log(this.$store.state);
    },
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
  mounted() {
    this.$store.state.task = 'hola';
    console.log(this.$store.state.task);
  }
};
</script>
