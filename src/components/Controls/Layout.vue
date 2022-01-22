<template>
  <div v-if="modifiers.options.required.layout">
    <h3>Layouts</h3>
    <ul class="flex justify-between w-full max-w-xl">
      <li
        v-for="(layout, ind) in layouts"
        :key="ind"
        class="px-6 py-4 mr-4 capitalize bg-gray-200 cursor-pointer rounded-xl"
        :class="currentLayout == layout ? 'border-2 border-gray-600' : 'border-2 border-gray-200'"
        @click="setLayout(layout)"
      >
        {{ layout }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layouts: ["portait", "landscape", "square"],
      currentLayout: "portait",
    }
  },
  inject: ["modifiers"],
  methods: {
    setLayout(layout) {
      this.currentLayout = layout
      this.$emit("updateLayout", this.currentLayout)
    },
  },
}
</script>

<style></style>
