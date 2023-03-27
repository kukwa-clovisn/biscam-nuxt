
<template>
  <div class="product-body">
    <div class="product-body-wrapper">
      <div class="detail-products">
        <div
          class="product"
          data-aos="flip-left"
          v-for="product in products"
          :key="product._id"
        >
          <div
            class="wrapper"
            @click="navigateTo(`/spare-part/${product.imgName}`)"
          >
            <div class="image">
              <img
                data-aos="slide-up"
                :src="`/_nuxt/assets/car-engines/${product.imgName}.${product.imgExt}`"
                alt="Product not available at the moment"
              />
            </div>
            <div class="blur-wrapper"></div>
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
          </div>
          <div class="details">
            <h2>{{ product.name }}</h2>
            <div class="stars">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i>
            </div>
            <a href="https://wa.link/rt49uv" data-aos="slide-up"
              >shop now <i class="fa-brands fa-shopify"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
const products = ref([]);


  axios('/api/product').then(res => console.log(res)).catch(err => console.log(err))

  

</script>