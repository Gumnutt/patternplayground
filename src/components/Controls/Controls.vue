<template>
  <aside class="p-5">
    <frequency @updateFrequency="updateValue"></frequency>
  </aside>
</template>

<script>
import Frequency from "@/components/Controls/Frequency"
export default {
  components: { Frequency },
  data() {
    return {
      frequency: 1,
    }
  },
  watch: {
    frequency(value) {
      this.$emit("getFrequency", value)
    },
  },
  methods: {
    updateValue(value) {
      this.frequency = value
    },
  },
}
</script>

<style></style>
