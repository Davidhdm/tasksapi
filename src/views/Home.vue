<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-for="task in tasks">
      <Task 
        :title="task.title" 
        :id="task.id" 
        :isFinished="task.isFinished" 
      />
    </div>
    <InputCreate />
  </div>
</template>

<script>

import Task from "@/components/Task.vue";
import { tasks } from "@/assets/data/tasks.json";
import InputCreate from "@/components/InputCreate.vue";
import { taskService } from "@/services/taskService.js";

export default {
  name: "Home",
  components: {
    Task,
    InputCreate,
  },
  data() {
    return {
      tasks: [],
    };
  },
  async mounted() {
    try {
      const response = await taskService.showAllTasks();
      this.tasks = response.data; /* console.log(response.data) */
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss">
.home {
  max-width: 300px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
}
</style>
