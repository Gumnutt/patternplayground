<template>
  <div v-if="modifiers.options.required.ratio">
    <h3>Columns and rows</h3>
    <ul class="flex justify-between w-full max-w-xl">
      <li
        v-for="(ind, ratio) in ratios"
        :key="ind"
        class="px-6 py-4 mr-4 bg-gray-200 cursor-pointer rounded-xl"
        :class="currentRatio == ratio ? 'border-2 border-gray-600' : 'border-2 border-gray-200'"
        @click="setRatio(ratio)"
      >
        {{ ratio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratios: {
        "2x3": "2x3",
        "4x6": "4x6",
        "6x9": "6x9",
        "8x12": "8x12",
        "10x15": "10x15",
      },
      currentRatio: "2x3",
    }
  },
  inject: ["modifiers"],
  methods: {
    setRatio(ratio) {
      this.currentRatio = ratio
      this.$emit("updateRatio", this.currentRatio)
    },
  },
}
</script>

<style></style>
