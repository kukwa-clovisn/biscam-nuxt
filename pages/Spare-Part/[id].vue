<template>
  <div class="product-main">
    <div class="product-page-wrapper">
      <div class="product-image">
        <img src="assets/engine/engine.jpg" alt="" />
      </div>

      <div class="product-details">
        <div class="product-details-wrapper">
          <h2>product name</h2>
          <h4>product category</h4>
          <p>
            product description Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Inventore, pariatur!
          </p>
          <button>buy now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const productRoute = route.params.id;
</script>

<style lang="scss" scoped>
.product-main {
  width: 100%;
  height: fit-content;
  padding-top: 13vh;
}
</style>