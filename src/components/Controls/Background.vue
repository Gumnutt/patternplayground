<template>
  <div>
    <palette-input :defaultColor="color" :index="ind" @updateColor="updateBg" @colorSet="bgcolorSet" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultColors: "",
      colorPalette: "",
    }
  },
  inject: ["modifiers"],
  methods: {
    updateBg(color) {
      this.colorPalette[color.index] = color.color.hex
      this.$emit("updateBg", this.colorPalette)
    },
    bgcolorSet() {
      this.$emit("colorSet")
    },
  },
}
</script>
