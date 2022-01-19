<template>
  <div :style="setGrid">
    <!-- prettier ignore -->
    :doodle {@size: 360px 540px; overflow:hidden; text-align:center; box-sizing:border-box }
    <!-- prettier ignore -->
    :container { overflow:hidden; }
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      type: String,
      default: "2x3",
    },
  },
  watch: {
    ratio() {
      this.updateGrid()
    },
  },
  computed: {
    setGrid() {
      return this.updateGrid()
    },
  },
  methods: {
    updateGrid() {
      this.$nextTick(() => {
        const doodle = document.querySelector("css-doodle")
        doodle.grid = this.ratio
      })
    },
    setId() {
      console.log(this.$route)
    },
  },
}
</script>

<style></style>
