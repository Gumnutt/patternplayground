<template>
  <div :style="setGrid">
    <!-- prettier ignore -->
    :doodle {@size: {{ layout }}; overflow:hidden; text-align:center; box-sizing:border-box }
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
    layout: {
      type: String,
      default: "",
    },
  },
  created() {
    this.$nextTick(() => {
      this.orientation
    })
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
    // orientation() {
    //   if (this.layout === "portait") {
    //     return {
    //       width: "22.5rem",
    //       height: "33.75rem",
    //     }
    //   }
    //   if (this.layout === "landscape") {
    //     return {
    //       width: "33.75rem",
    //       height: "22.5rem",
    //     }
    //   }
    //   if (this.layout === "square") {
    //     return {
    //       width: "33.75rem",
    //       height: "33.75rem",
    //     }
    //   }
    //   return ""
    // },
  },
  methods: {
    updateGrid() {
      this.$nextTick(() => {
        const doodle = document.querySelector("css-doodle")
        doodle.grid = this.ratio
      })
    },
  },
}
</script>

<style></style>
