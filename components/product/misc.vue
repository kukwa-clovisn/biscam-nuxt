<template>
  <div class="other-products">
    <h1>find other products that interest you</h1>
    <div class="products-div" v-if="products.length">
      <div
        class="product"
        v-for="product in products"
        :key="product._id"
        @click="($event) => displayProduct(product._id, product.name)"
      >
        <div class="product-image">
          <img :src="product.data" :alt="product.name" />
        </div>
        <div class="route-div">
          <button>view product</button>
        </div>
      </div>
    </div>

    <div v-else><loader message="products loading please wait...." /></div>
  </div>
</template>
<script setup>
import axios from "axios";

const products = ref([]);

const displayProduct = (id, name) => {
  localStorage.setItem("product_id", id);
  localStorage.setItem("product name", name);

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
onBeforeMount(() => {
  axios(`https://api.biscaminvestmentsarl.com/api/product/products`)
    .then((res) => {
      products.value = shuffleProducts(res.data);
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