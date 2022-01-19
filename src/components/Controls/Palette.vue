<template>
  <div>
    <h3>Palette</h3>
    <ul class="flex justify-between w-full max-w-sm list-none">
      <li v-for="(color, ind) in defaultColors" :key="ind">
        <palette-input :defaultColor="color" :index="ind" @updateColor="updateColor" @colorSet="colorSet" />
      </li>
    </ul>
  </div>
</template>

<script>
import PaletteInput from "@/components/Controls/PaletteInput"
export default {
  components: {
    PaletteInput,
  },
  data() {
    return {
      defaultColors: [
        {
          hex: "#e8e8e8",
        },
        {
          hex: "#cecece",
        },
        {
          hex: "#bdbdbd",
        },
        {
          hex: "#a8a8a8",
        },
        {
          hex: "#8c8c8c",
        },
        {
          hex: "#696969",
        },
      ],
      colorPalette: [
        { color1: "#e8e8e8" },
        { color2: "#cecece" },
        { color3: "#bdbdbd" },
        { color4: "#a8a8a8" },
        { color5: "#8c8c8c" },
        { color6: "#696969" },
      ],
    }
  },
  computed: {
    randomColorVariable() {
      let colorVar = []
      for (let i = 1; i <= this.defaultColors.length; i++) {
        const varName = `var(--color${i})`
        colorVar.push(varName)
      }
      return "--randomColor:@p(" + colorVar.join(", ") + ")"
    },
  },
  methods: {
    updateColor(color) {
      this.colorPalette[color.index] = color.color.hex
      this.$emit("updatePalette", this.colorPalette)
    },
    colorSet() {
      this.$emit("colorSet")
    },
  },
}
</script>

<style></style>
