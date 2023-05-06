<template>
  <div class="other-products">
    <h1>find other products that interest you</h1>
    <div class="products-div">
      <div
        class="product"
        v-for="product in products"
        :key="product.id"
        @click="
          ($event) =>
            displayProduct(product._id, product.name, product.category)
        "
      >
        <div class="product-image">
          <img :src="product.data" :alt="product.name" />
        </div>
        <div class="route-div">
          <button>view product</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";

const products = ref([]);

const displayProduct = (id, name, category) => {
  localStorage.setItem("product_id", id);
  localStorage.setItem("product name", name);
  localStorage.setItem("product category", category);

  navigateTo(`/spare-part/product/${id}`);
};

onMounted(() => {
  axios(`/api/category/all`)
    .then((res) => {
      products.value = res.data;

      products.value = shuffleProducts(products.value);
    })
    .catch((err) => {
      return err;
    });
});
</script>
<style lang="scss" scoped>
.other-products {
  width: 90%;
  height: fit-content;
  margin: 20px auto;

  h1 {
    text-transform: capitalize;
    font: 700 30px "Montserrat", "Poppins", sans-serif;
    padding: 20px 10px;
  }

  .products-div {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 40px 20px;

    .product {
      width: 200px;
      height: 200px;
      overflow: hidden;
      box-shadow: inset 0 0 15px 8px rgb(230, 230, 230);

      .product-image {
        width: 100%;
        height: 140px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }

      .route-div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          width: 80%;
          height: 40px;
          background: orange;
          color: white;
          border: none;
          border-radius: 30px;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>