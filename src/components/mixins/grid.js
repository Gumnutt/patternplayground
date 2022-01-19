import Controls from "@/components/Controls/Controls"
import Grid from "@/components/Grid/"
import "css-doodle"
export default {
  data() {
    return {
      frequency: 1,
      ratio: "2x3",
      palette: [],
    }
  },
  components: { Controls, Grid },
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
      // loop over this.palette and create a new array of css vars based on index
      // this will be used to create the css variables for the grid
      const palette = this.palette
      let paletteVars = ""
      for (let i = 0; i < palette.length; i++) {
        if (i > 0) {
          const color = palette[i]
          const varName = `--color${i}`
          paletteVars += `${varName}: ${color};`
        }
      }
      return paletteVars
    },
  },
  computed: {
    componentId() {
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
