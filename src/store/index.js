import Vue from 'vue';
import Vuex from 'vuex';
import { taskService } from '@/services/taskService'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    taskTitle: "",
  },
  mutations: {
    async createTask(context, taskTitle) {
      try {
        const response = await taskService.createTask(taskTitle);
        this.state.tasks = [response.data, ...this.tasks];
      } catch (e) {
        console.error(e);
      };
    }
  },
  actions: {
    createTaskAction(context) {
      context.commit('createTask', this.state.taskTitle);
    }
  },
  getters: {
    getTaskTitle() {
      return this.state.taskTitle;
    }
  }
})