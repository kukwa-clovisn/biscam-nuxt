<template>
  <div class="product-main">
    <div class="product-main-wrapper">
      <div class="product-image">
        <img :src="`/_nuxt/assets/car-engines/${productRoute}.jpeg`" alt="" />
      </div>

      <div class="product-details">
        <div class="product-details-wrapper">
          <h2>{{ productRoute }}</h2>
          <h4>product category</h4>
          <p>
            product description Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Inventore, pariatur!
          </p>
          <button>buy now</button>
        </div>
      </div>
    </div>
    <div class="other-products">
      <h1>find other products taht interest you</h1>
      <div class="products-div">
        <div
          class="product"
          v-for="product in products"
          :key="product.id"
          @click="($event) => navigateTo(`/spare-part/${product.imgName}`)"
        >
          <div class="product-image">
            <img
              :src="
                '/_nuxt/assets/car-engines/' +
                product.imgName +
                '.' +
                product.imgExt
              "
              alt=""
            />
          </div>
          <div class="route-div">
            <button>view product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const productRoute = route.params.id;

const products = ref([]);

for (let i = 0; i < 15; i++) {
  let newImage = {
    id: i,
    name: "engine shaft",
    category: "engine",
    description:
      "this is an engine with a difference good and affordable with quality and insurrance.",
    imgurl: "",
    imgName: "car-generator",
    imgExt: "jpeg",
  };
  products.value.push(newImage);
}
</script>

<style lang="scss" scoped>
.product-main {
  width: 100%;
  height: fit-content;
  padding-top: 15vh;

  .product-main-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .product-image {
      width: 90%;
      height: fit-content;

      img {
        width: 100%;
        height: fit-content;
        object-fit: contain;
        cursor: pointer;
      }
    }

    .product-details {
      width: 80%;
      height: fit-content;

      .product-details-wrapper {
        width: 100%;
        height: fit-content;
        padding: 20px 10px;

        h2,
        h4,
        p {
          text-align: left;
        }

        h2 {
          text-transform: capitalize;
        }

        h4 {
          text-transform: capitalize;
        }

        button {
          width: max-content;
          height: max-content;
          padding: 8px 20px;
          border-radius: 2px;
          background: rgb(232, 152, 2);
          color: white;
          border: none;
          display: block;
          margin: 0;
          margin-left: 10px;
        }
      }
    }
  }
  .other-products {
    width: 100%;
    height: fit-content;
    padding: 20px 10px;

    h1 {
      text-transform: capitalize;
      font: 700 30px "Montserrat", "Poppins", sans-serif;
      padding: 20px 10px;
    }

    .products-div {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;

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
}
</style>