<template>
  <Nav />
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
import Nav from "./components/Nav"

export default {
  name: "Pattern Playground",
  components: {
    Nav,
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;700&display=swap");
html,
body {
  font-family: "Lexend", sans-serif;
  color: #646d7b;
}
</style>
