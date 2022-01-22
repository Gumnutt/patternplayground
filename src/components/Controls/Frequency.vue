<template>
  <div v-if="modifiers.options.required.frequency">
    <h3>Frequency</h3>
    <vue-slider
      v-model="value"
      :data="frequencies"
      :contained="true"
      :min="0.2"
      :max="1"
      :interval="0.2"
      :railStyle="{ 'background-color': 'rgb(209 213 219)' }"
      :processStyle="{ 'background-color': 'rgb(31 41 55)' }"
    ></vue-slider>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component"
import "vue-slider-component/theme/antd.css"
export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: this.modifiers.frequency || 1,
      frequencies: [0.2, 0.4, 0.6, 0.8, 1],
      currentFrequency: this.modifiers.frequency || 1,
    }
  },
  inject: ["modifiers"],
  watch: {
    value(newValue) {
      this.currentFrequency = newValue
      this.$emit("updateFrequency", this.currentFrequency)
    },
  },
}
</script>

<style></style>
