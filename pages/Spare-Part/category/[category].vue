

<template>
  <div class="category-container">
    <h1>{{ $route.params.category }}</h1>
    <SparePartCategoryHeader />
    <Spare-Part-Manifold />
  </div>
</template>

<script setup>
import axios from  'axios'

const data = await axios('/api/product').then(res => console.log(res)).catch(err => console.log(err))

console.log(data)
</script>

<style lang="scss" scoped>
.category-container {
  padding-top: 14vh;
}
</style>