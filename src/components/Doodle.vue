<template>
  <article class="flex w-full h-screenfit">
    <main class="flex items-center justify-center flex-1" :style="colorVars">
      <css-doodle use="var(--rule)" :style="cssVars" :id="componentId">
        <grid :ratio="ratio"></grid>
      </css-doodle>
    </main>
    <aside class="flex items-center justify-center flex-1 w-full bg-gray-50">
      <controls
        @getFrequency="getFrequencyValue"
        @getRatio="getRatioValue"
        @getPalette="getPaletteValue"
        @setPalette="update"
        class="p-16"
      ></controls>
    </aside>
  </article>
</template>

<script>
import GridMixin from "./mixins/grid"
export default {
  mixins: [GridMixin],
}
</script>
