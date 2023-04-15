

<template>
  <div class="category-container">
    <div class="header-component"></div>
    <h1>Browse all {{ $route.params.category }}</h1>
    <SparePartCategoryHeader />
    <div class="product-body">
      <div class="product-body-wrapper">
        <div
          class="detail-products sub-category"
          data-aos="slide-up"
          v-if="products.length"
        >
          <div
            class="product"
            data-aos="slide-up"
            v-for="product in products"
            :key="product"
            @click="displayProduct(product.id)"
          >
            <div class="wrapper">
              <div class="image">
                <img
                  data-aos="slide-up"
                  :src="
                    `/_nuxt/assets/car-engines/${product.imageUrl}`
                      ? ''
                      : `https://biscaminvestmentsarl.netlify.app/_nuxt/assets/car-engines/${product.imageUrl}`
                  "
                  alt=""
                />
              </div>

              <div class="details">
                <h2>{{ product.name }}</h2>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
                <!-- stars in here -->
                <a
                  href="https://wa.link/rt49uv"
                  class="product-link"
                  data-aos="slide-up"
                  >view product<i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <h1 class="empty-msg" v-else>
          The products for <span>{{ $route.params.category }}</span> will soon
          be available. You can check other products
          <NuxtLink to="/spare-part/category/all">here...</NuxtLink>
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const productsArr = productState();

const products = productsArr.value.filter((product) => {
  if (route.params.category === "all") return true;
  else return product.category === route.params.category;
});

const displayProduct = (id) => {
  navigateTo(`/spare-part/${id}`);
};
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