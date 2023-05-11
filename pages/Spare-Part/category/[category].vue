

<template>
  <div class="category-container">
    <Head>
      <Title>Car Spare Part || BISCAM</Title>
    </Head>
    <div class="header-component"></div>
    <h1>Browse Our Products</h1>
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
            :key="product._id"
            @click="displayProduct(product._id, product.name)"
          >
            <div class="wrapper">
              <div class="image">
                <img
                  data-aos="slide-up"
                  :src="product.data"
                  :alt="product.name"
                />
              </div>

              <div class="details">
                <h2>{{ product.name }}</h2>
                <div class="info">
                  <a
                    href="https://wa.link/rt49uv"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a
                    href="https://wa.link/rt49uv"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a
                    href="https://wa.link/rt49uv"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="slide-up"
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
        <h1 class="empty-msg" v-else>Loading Products. Please Wait</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const route = useRoute();
const productsArr = ref([]);
const products = ref([]);
const loader = useLoaderState();

const displayProduct = (id, productName) => {
  localStorage.setItem("product_id", id);
  localStorage.setItem("product name", productName);
  navigateTo(`/Spare-Part/product/${id}`);
};

const shuffleProducts = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

products.value = shuffleProducts(productsArr.value);

onBeforeMount(() => {
  loader.value = true;
  axios("https://api.biscaminvestmentsarl.com/api/product/products")
    .then((res) => {
      loader.value = false;
      productsArr.value = res.data;

      products.value = shuffleProducts(productsArr.value);

      products.value = products.value.filter((product) => {
        if (route.params.category === "all") return true;
        else return product.category === route.params.category;
      });
    })
    .catch((err) => {
      loader.value = false;
      return err;
    });
});
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