import axios from "axios";

const baseURL = "http://localhost:3000/";

export const taskService = {
  showAllTasks() {
    return axios.get(baseURL + 'tasks');
  },
  createTask(newTaskTitle) {
    return axios.post(baseURL + 'tasks', { id: "", title: newTaskTitle, isFinished: false });
  },
  deleteTask(id) {
    return axios.delete(baseURL + 'tasks/' + id);
  },
  updateTask(id, updatedTitle) {
    return axios.patch(baseURL + 'tasks/' + id, { title: updatedTitle });
  },
  updateIsFinishedValue(id, isFinished) {
    return axios.patch(baseURL + 'tasks/' + id, { isFinished: isFinished });
  }
}