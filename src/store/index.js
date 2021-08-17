import Vue from 'vue';
import Vuex from 'vuex';
import { taskService } from '@/services/taskService'
import InputUpdate from '../components/InputUpdate.vue'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    task: "",
    taskTitle: "",
    test: "hola"
  },
  mutations: {
    async createTask(context, taskTitle) {
      try {
        const response = await taskService.createTask(taskTitle);
        this.state.tasks = [response.data, ...this.tasks];
      } catch (e) {
        console.error(e);
      };
    },
    async deleteTask(context, id) {
      try {
        await taskService.deleteTask(id);
      } catch (e) {
        console.error(e);
      }
    },
    showInputUpdate(context, task) {
      let getParagraphs = document.querySelectorAll(".taskName");

      getParagraphs.forEach((paragraph) => {
        if (paragraph.innerHTML === task.title) {
          let inputUpdateComponent = Vue.extend(InputUpdate);
          let inputUpdateInstance = new inputUpdateComponent
            /* ({
                        propsData: { 'id': id, 'taskTitle': taskTitle },
                      });
             */

          inputUpdateInstance.$mount(paragraph);
        }
      });
    },
  },
  actions: {
    createTaskAction(context) {
      context.commit('createTask', this.state.taskTitle);
    },
    showInputUpdateAction(context) {
      context.commit('showInputUpdate', this.state.task);
    },
    deleteTaskAction(context, id) {
      context.commit('deleteTask', id);
    }
  },
  getters: {

  }
})