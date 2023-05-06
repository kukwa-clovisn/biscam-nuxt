<template>
  <div class="product-main">
    <Head>
      <Title>{{ displayProduct.name }} || BISCAM</Title>
    </Head>
    <div class="header-component"></div>
    <div class="product-main-wrapper">
      <div class="product-image">
        <img :src="displayProduct.data" alt="" />
      </div>

      <div class="product-details">
        <div class="product-details-wrapper">
          <div class="product-head">
            <h1>{{ displayProduct.name }}</h1>
            <h4>
              {{ displayProduct.category }}
            </h4>
            <p>price -</p>
          </div>
          <div class="product-content">
            <h3>product description:</h3>
            <p>
              {{ displayProduct.description }}
            </p>
            <a
              href="https://wa.link/rt49uv"
              target="_blank"
              rel="noopener noreferrer"
              >contact supplier</a
            >
          </div>
        </div>
      </div>
    </div>

    <product-purchase
      :productName="displayProduct.name"
      :category="displayProduct.category"
      :imageUrl="displayProduct.data"
    />
    <product-misc />

    <SparePartCategoryHeader />
  </div>
</template>

<script setup>
import axios from "axios";
const loader = useLoaderState();

const displayProduct = ref([]);

onMounted(() => {
  const id = localStorage.getItem("product_id");
  axios
    .post(`/api/singleProduct`, { id: id })
    .then((res) => {
      loader.value = false;

      displayProduct.value = res.data;
    })
    .catch((err) => {
      loader.value = false;
      return err;
    });
});
</script>

<style lang="scss" scoped>
.product-main {
  width: 100%;
  height: fit-content;

  .header-component {
    width: 100%;
    height: 13vh;
    background: rgb(222, 155, 1);
  }

  .product-main-wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    gap: 10px;

    .product-image {
      width: 60%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
        cursor: pointer;
      }
    }

    .product-details {
      width: 39%;
      height: fit-content;

      .product-details-wrapper {
        width: 100%;
        height: fit-content;
        padding: 20px 10px;

        .product-head {
          width: 100%;
          height: fit-content;
          border-bottom: 1px solid #d7d7d7;

          h1 {
            text-align: left;
            text-transform: capitalize;
            font: 600 35px "Montserrat", "Nunito Sans", sans-serif;
          }

          h4 {
            color: rgb(107, 107, 106);
            text-transform: capitalize;
            margin: 5px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          p {
            text-align: left;
            text-transform: capitalize;
          }
        }

        .product-content {
          width: 100%;

          h3 {
            text-transform: capitalize;
            text-align: left;
            padding: 10px 0;
            border-bottom: 1px solid rgb(226, 225, 225);
          }

          p {
            text-align: left;
          }
          a {
            display: block;
            width: max-content;
            height: max-content;
            text-decoration: none;
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            margin: 20px 0 10px 0;
            background: rgb(222, 155, 1);
            color: rgb(238, 238, 238);
            text-transform: capitalize;
          }
        }
      }
    }

    @media screen and (max-width: 1000px) {
      width: 90%;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        .product-image,
        .product-details {
          width: 100%;
        }
      }
    }
  }
}
</style>
