<template>
  <div class="home">
    <!-- <table>
      <thead>
        <tr>
          <th>Task Name</th>
          <th></th>
        </tr>
      </thead> 
      <tbody> -->
    <div v-for="task in $store.state.tasks">
      <Task :task="task" />
    </div>
    <!-- </tbody>
    </table> -->
    <InputCreate />
  </div>
</template>

<script>
import Task from "@/components/Task.vue";
import { tasks } from "@/data/tasks.json";
import InputCreate from "@/components/InputCreate.vue";
import { taskService } from "@/services/taskService.js";

export default {
  name: "Home",
  components: {
    Task,
    InputCreate,
  },
  /* data() {
    return {
      tasks: [],
    };
  }, */
  async mounted() {
    try {
      const response = await taskService.showAllTasks();
      this.$store.state.tasks = response.data; /* console.log(response.data) */
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
