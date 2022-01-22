<template>
  <div class="grid grid-cols-3 grid-rows-2 mx-auto w-max">
    <router-link
      v-for="(preview, ind) in previews"
      :to="{ name: preview }"
      class="flex flex-col items-stretch justify-between overflow-hidden w-80 h-80"
      :key="ind"
    >
      <preview :type="preview"></preview>
    </router-link>
  </div>
</template>

<script>
import Preview from "@/components/Preview"
export default {
  components: {
    Preview,
  },
  data() {
    return {
      previews: ["SingleCell", "MultiCell", "Stroke", "PlayingCard", "Estelle"],
    }
  },
}
</script>

<style></style>
