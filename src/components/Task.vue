<template>
  <div class="taskContainer">
    <input
      type="checkbox"
      name="isFinished"
      :checked="isFinished ? true : false"
      @click="changeIsFinishedValue(id, isFinished)"
    />
    <TaskTitle :id="id" :title="title" />
    <button class="btn btn-danger" @click="deleteTask(id)">Delete</button>
  </div>
</template>

<script>
import { taskService } from "@/services/taskService.js";
import TaskTitle from "@/components/TaskTitle.vue";

export default {
  name: "Task",
  components: {
    TaskTitle,
  },
  props: {
    id: Number,
    title: String,
    isFinished: Boolean

  },
  methods: {
    async deleteTask(id) {
      try {
        await taskService.deleteTask(id);

      } catch (e) {
        console.error(e);
      }
    },
    async changeIsFinishedValue(id, isFinished) {
      if (isFinished) {
        isFinished = false;
        try {
          await taskService.updateIsFinishedValue(id, isFinished);

        } catch (e) {
          console.error(e);
        } return;
      }
      if (!isFinished) {
        isFinished = true;
        try {
          await taskService.updateIsFinishedValue(id, isFinished);

        } catch (e) {
          console.error(e);
        } return;
      }
    }
  },
};
</script>

<style lang="scss">
.taskContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
}

.taskName {
  text-align: left;
  margin: 0 20px 0 20px;
}

.inputUpdate {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
