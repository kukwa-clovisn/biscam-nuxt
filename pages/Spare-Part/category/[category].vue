

<template>
  <div class="category-container">
    <div class="header-component"></div>
    <h1>{{ $route.params.category }}</h1>
    <SparePartCategoryHeader />
    <Spare-Part-Manifold />
  </div>
</template>

<script setup>
import axios from "axios";

const data = await axios("/api/category_12234")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

onMounted(() =>
  axios
    .post("/api/category", { data: "this is from category" })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
);
</script>

<style lang="scss" scoped>
.category-container {
  .header-component {
    width: 100%;
    height: 13vh;
    background: rgb(15, 48, 109);
  }
}
</style>