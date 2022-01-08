<template>
  <vue-slider
    v-model="value"
    :data="frequencies"
    :contained="true"
    :min="0.2"
    :max="1"
    :interval="0.2"
    :railStyle="{ 'background-color': 'green' }"
    :processStyle="{ 'background-color': 'red' }"
  ></vue-slider>
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
      value: 1,
      frequencies: [0.2, 0.4, 0.6, 0.8, 1],
      currentFrequency: 1,
    }
  },
  watch: {
    value(newValue) {
      this.currentFrequency = newValue
      this.$emit("updateFrequency", this.currentFrequency)
    },
  },
  // methods: {
  //   updateFrequency() {
  //     this.currentFrequency = this.value
  //     this.$emit("updateFrequency", this.value)
  //   },
  // },
}
</script>

<style></style>
