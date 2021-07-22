<template>
  <div class="inputCreate">
    <!-- <form action="" method="POST"> -->
      <input
        type="text"
        class="form-control inputCreate"
        id="inputCreate"
        name="inputCreate"
        placeholder="Create a new task"
        v-model="taskTitle"
        @keyup.enter="createTask"
      />
    <!-- </form> -->
  </div>
</template>

<script>

import { taskService } from "@/services/taskService.js";

export default {
  name: "InputCreate",
  data() {
    return {
      taskTitle: "",
      tasks: []
    }
  },
  methods: {
    async createTask() {
      try {
        let newTaskTitle = this.taskTitle;
        const response = await taskService.createTask(newTaskTitle);

        this.tasks = [...this.tasks, response.data];
        this.taskTitle = "";

      } catch (e) {
        console.error(e);
      };
    }
  }
};
</script>

<style lang="scss">

.inputCreate {
  border: solid 0.5px rgba(0, 0, 0, 0.322);
  border-radius: 5px;
}

</style>