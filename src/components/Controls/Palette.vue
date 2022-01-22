<template>
  <div v-if="modifiers.options.required.colors">
    <h3>Palette</h3>
    <ul class="flex list-none">
      <li v-for="(color, ind) in defaultColors" :key="ind" class="mr-4">
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
      defaultColors: [],
      colorPalette: this.modifiers.colors ? this.modifiers.colors : ["#e8e8e8", "#bdbdbd", "#a8a8a8", "#8c8c8c", "#696969"],
    }
  },
  inject: ["modifiers"],
  created() {
    this.processedColors()
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
      console.log(this.colorPalette)
    },
    colorSet() {
      this.$emit("colorSet")
    },
    processedColors() {
      if (!this.modifiers.colors.length) {
        this.defaultColors = [
          {
            hex: "#e8e8e8",
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
        ]
        return
      }
      this.modifiers.colors.forEach((c) => {
        const color = {
          hex: c,
        }
        this.defaultColors.push(color)
      })
    },
  },
}
</script>

<style></style>
