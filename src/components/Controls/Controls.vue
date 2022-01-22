<template>
  <div>
    <ratio @updateRatio="updateRatio" class="mb-8"></ratio>
    <frequency @updateFrequency="updateValue" class="mb-8"></frequency>
    <palette @updatePalette="updatePalette" @colorSet="updateColor" class="mb-8"></palette>
    <div class="inline-flex my-8">
      <redraw class="mr-3"></redraw>
      <export></export>
    </div>
  </div>
</template>

<script>
import Frequency from "@/components/Controls/Frequency"
import Ratio from "@/components/Controls/Ratio"
import Palette from "@/components/Controls/Palette"
import Export from "@/components/Controls/Export"
import Redraw from "@/components/Controls/Redraw"
export default {
  components: { Frequency, Ratio, Palette, Export, Redraw },
  inject: ["modifiers"],
  data() {
    return {
      frequency: 1,
      ratio: "2x3",
      palette: [],
    }
  },
  watch: {
    frequency(value) {
      this.$emit("getFrequency", value)
    },
    layout(value) {
      this.$emit("getLayout", value)
    },
    palette(palette) {
      this.$emit("getPalette", palette)
    },
    ratio(ratio) {
      this.$emit("getRatio", ratio)
    },
  },
  methods: {
    updateValue(value) {
      this.frequency = value
    },
    updateRatio(ratio) {
      this.ratio = ratio
    },
    updateLayout(layout) {
      this.layout = layout
    },
    updatePalette(palette) {
      this.palette = palette
    },
    updateColor() {
      this.$emit("setPalette")
    },
  },
}
</script>

<style></style>
