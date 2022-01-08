<template>
  <div>
    <!-- prettier-ignore -->
    <css-doodle click-to-update use="var(--rule)" :style="cssVars">
      :doodle {
        @grid: 8x12;
        @size: 360px 540px;
        overflow:hidden;
        text-align:center;
        box-sizing:border-box
      }
      :container { 
        overflow:hidden;
      }
    </css-doodle>
    <controls @getFrequency="getFrequencyValue"></controls>
  </div>
</template>

<script>
import Controls from "@/components/Controls/Controls"
import "css-doodle"
export default {
  data() {
    return {
      frequency: 1,
    }
  },
  components: { Controls },
  watch: {
    frequency() {
      console.log()
      this.update()
    },
  },
  methods: {
    update() {
      const doodle = document.querySelector("css-doodle")
      console.log("update Function", doodle)
      doodle.update()
    },
    getFrequencyValue(e) {
      this.frequency = e
      this.update()
    },
  },
  computed: {
    cssVars() {
      return {
        "--frequency": this.frequency,
      }
    },
  },
}
</script>

<style>
css-doodle {
  /* prettier-ignore */
  --randomColor: @p(#9be9e7, #5dd1db, #2d60b5, #40a1cb, #000);
  --frequency: 1;
  /* prettier-ignore */
  --rule: (
    @random(var(--frequency)) {
      background: var(--randomColor); 
      clip-path: @p(
        polygon(0 0, 0% 100%, 100% 100%),
        ellipse(100% 100% at @p('0 0', '0 100%', '100% 0', '100% 100%')),
        circle(50%),
        polygon(0 0, 100% 0%, 100% 100%, 0% 100%),
      ) ;
    }
  );
}
</style>
