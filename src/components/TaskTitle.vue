<template>
  <p class="taskName" @dblclick="showInputUpdate(task)">{{ task.title }}</p>
</template>

<script>
import Vue from "vue";
import InputUpdate from "@/components/InputUpdate.vue";

export default {
  name: "TaskTitle",
  props: {
    task: Object,
  },
  methods: {
    showInputUpdate(task) {
      this.$store.state.task = task;
      this.$store.dispatch('showInputUpdateAction');
      /* let getParagraphs = document.querySelectorAll(".taskName");

      getParagraphs.forEach((paragraph) => {
        if (paragraph.innerHTML === task.title) {
          let inputUpdateComponent = Vue.extend(InputUpdate);
          let inputUpdateInstance = new inputUpdateComponent({
            propsData: { id: id, taskTitle: taskTitle },
          });
          this.$store.state.task = task;
          inputUpdateInstance.$mount(paragraph);
        }
      }); */
    },
  },
};
</script>
