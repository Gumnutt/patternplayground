<template>
  <article class="flex w-full h-screenfit">
    <main class="flex items-center justify-center flex-1">
      <doodle></doodle>
    </main>
    <aside class="flex items-center justify-center flex-1 w-full bg-gray-50">
      <controls
        @getFrequency="getFrequencyValue"
        @getRatio="getRatioValue"
        @getLayout="getLayoutValue"
        @getPalette="getPaletteValue"
        @setPalette="update"
        class="p-16"
      ></controls>
    </aside>
  </article>
</template>

<script>
import Doodle from "@/components/Doodle"
import Controls from "@/components/Controls/Controls"

export default {
  components: { Controls, Doodle },
}
</script>
