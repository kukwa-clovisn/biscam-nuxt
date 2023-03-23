
<script setup>
const getRes = async () => {
  const data = await $fetch("/api/product/product");

  console.log(data);
  console.log(data.products);
};

getRes();
</script>
<template>
  <div class="category-container">
    <h1>{{ $route.params.category }}</h1>
    <SparePartCategoryHeader />
    <Spare-Part-Manifold />
  </div>
</template>

<style lang="scss" scoped>
.category-container {
  padding-top: 14vh;
}
</style>