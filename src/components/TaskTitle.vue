<template>
  <p class="taskName" @dblclick="showInputUpdate(id, title)">{{ title }}</p>
</template>

<script>
import Vue from "vue";
import InputUpdate from "@/components/InputUpdate.vue";

export default {
  name: "TaskTitle",
  props: {
    id: Number,
    title: String
  },
  methods: {
    showInputUpdate(id, title) {
      let getParagraphs = document.querySelectorAll(".taskName");

      getParagraphs.forEach((paragraph) => {
        if (paragraph.innerHTML === title) {
          let inputUpdateComponent = Vue.extend(InputUpdate);
          let inputUpdateInstance = new inputUpdateComponent({
            propsData: { 'id': id, 'title': title },
          });

          inputUpdateInstance.$mount(paragraph);
        }
      });
    },
  },
};
</script>
