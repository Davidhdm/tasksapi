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
    };
  },
  methods: {
    createTask() {
      this.$store.state.taskTitle = this.taskTitle;
      this.$store.dispatch("createTaskAction");
    },
  },
};
</script>

<style lang="scss">
.inputCreate {
  border: solid 0.5px rgba(0, 0, 0, 0.322);
  border-radius: 5px;
}
</style>
