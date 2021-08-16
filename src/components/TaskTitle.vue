<template>
  <p class="taskName" @dblclick="showInputUpdate(task.id, task.title)">{{ task.title }}</p>
</template>

<script>
import Vue from "vue";
import InputUpdate from "@/components/InputUpdate.vue";

export default {
  name: "TaskTitle",
  props: {
    task: Object
  },
  methods: {
    showInputUpdate(id, taskTitle) {
      let getParagraphs = document.querySelectorAll(".taskName");

      getParagraphs.forEach((paragraph) => {
        if (paragraph.innerHTML === taskTitle) {
          let inputUpdateComponent = Vue.extend(InputUpdate);
          let inputUpdateInstance = new inputUpdateComponent({
            propsData: { 'id': id, 'taskTitle': taskTitle },
          });

          inputUpdateInstance.$mount(paragraph);
        }
      });
    },
  },
};
</script>
