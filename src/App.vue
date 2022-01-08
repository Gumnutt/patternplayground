<template>
  <Nav />
  <router-view></router-view>
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
