<template>
  <div>
    <!-- prettier-ignore -->
    <css-doodle click-to-update use="var(--rule)" :style="cssVars">
      <grid :ratio="ratio"></grid>
    </css-doodle>
    <controls @getFrequency="getFrequencyValue" @getRatio="getRatioValue"></controls>
  </div>
</template>

<script>
import GridMixin from "./mixins/grid"
export default {
  mixins: [GridMixin],
}
</script>

<style scoped>
.container {
  overflow: visible;
}
</style>
