<template>
  <div class="relative" :style="colorVar" v-click-away="closePicker">
    <button class="w-8 h-8 rounded-sm" :style="{ background: color.hex }" @click="pickerOpen = !pickerOpen"></button>
    <div class="absolute transform -translate-x-1/2 left-1/2">
      <color-picker v-if="pickerOpen" v-model="color" />
    </div>
  </div>
</template>

<script>
import { Chrome } from "@ckpack/vue-color"
export default {
  components: {
    "color-picker": Chrome,
  },
  props: {
    defaultColor: {},
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      pickerOpen: false,
      color: {},
    }
  },
  watch: {
    color() {
      this.$emit("updateColor", { color: this.color, index: this.index + 1 })
    },
    pickerOpen() {
      if (!this.pickerOpen) {
        this.$emit("colorSet")
      }
    },
  },
  created() {
    this.$nextTick(() => {
      this.color = this.defaultColor
    })
  },
  computed: {
    colorVar() {
      return "--color" + (this.index + 1) + ":" + this.color.hex
    },
  },
  methods: {
    closePicker() {
      this.pickerOpen = false
    },
  },
}
</script>

<style></style>
