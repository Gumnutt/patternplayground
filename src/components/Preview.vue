<template>
  <h3>{{ type }}</h3>
  <img :src="require(`@/assets/img/${type}.png`)" class="w-40" />
</template>

<script>
export default {
  components: {},
  props: {
    type: {
      type: String,
      default: "",
    },
    layout: {
      type: String,
      default: "",
    },
  },
}
</script>

<style></style>
