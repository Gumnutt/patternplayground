import data from "@/data/patterndata.json"
import Grid from "@/components/Grid"
import Controls from "@/components/Controls/Controls"
import "css-doodle"
export default {
  props: {
    previewId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      frequency: data[this.$route.name]?.frequency ? data[this.$route.name].frequency : 1,
      ratio: "2x3",
      palette: [],
      layout: "22.5rem 33.75rem",
    }
  },
  components: { Grid, Controls },
  provide() {
    return {
      modifiers: data[this.$route.name],
    }
  },
  created() {
    this.palette = data[this.$route.name]?.colors ? data[this.$route.name].colors : []
  },
  methods: {
    update() {
      const doodle = document.querySelector("css-doodle")
      doodle.update()
    },
    getFrequencyValue(e) {
      this.frequency = e
      this.$nextTick(() => {
        this.update()
      })
    },
    getLayoutValue(e) {
      this.layout = e
      this.$nextTick(() => {
        this.update()
      })
    },
    getPaletteValue(p) {
      this.palette = p
      this.$nextTick(() => {
        this.update()
      })
    },
    getRatioValue(e) {
      this.ratio = e
    },
    processPalette() {
      const palette = this.palette
      let paletteVars = ""
      let colorVar = ""
      for (let i = 0; i < palette.length; i++) {
        const color = palette[i]
        const varName = `--color${i}`
        paletteVars += `${varName}: ${color};`
        colorVar += `var(${varName}), `
      }
      console.log(colorVar)
      return { colors: paletteVars, "--randomColor": `@p(${colorVar})` }
    },
  },
  computed: {
    componentId() {
      if (this.previewId) return this.previewId
      return this.$route.name
    },
    cssVars() {
      return {
        "--frequency": this.frequency,
      }
    },
    colorVars() {
      return this.processPalette()
    },
  },
}
