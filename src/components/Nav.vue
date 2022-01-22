<template>
  <nav class="flex items-center justify-between p-8">
    <router-link :to="{ name: 'Home' }" class="text-xl font-bold tracking-tighter text-gray-900">pttrnplayground</router-link>
    <div>
      <router-link :to="{ name: 'SingleCell' }" class="mr-4">Single cell</router-link>
      <router-link :to="{ name: 'MultiCell' }" class="mr-4">Multi cell</router-link>
      <router-link :to="{ name: 'Stroke' }" class="mr-4">Stroke</router-link>
      <router-link :to="{ name: 'PlayingCard' }" class="mr-4">Playing card</router-link>
      <router-link :to="{ name: 'Estelle' }">Estelle's Pattern</router-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
