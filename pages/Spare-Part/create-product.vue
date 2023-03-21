<template>
  <div class="create-product-main">
    <div class="create-product-wrapper">
      <form @submit="createProduct">
        <h1>create a custom product.</h1>

        <div class="form-data">
          <input
            type="text"
            name="product-name"
            v-model="productData.name"
            placeholder="Enter product name"
            required
          /><input
            type="text"
            name="product-category"
            v-model="productData.category"
            placeholder="Enter product category"
            required
          /><input
            type="text"
            name="product-description"
            v-model="productData.description"
            placeholder="Product Description"
          /><input
            type="text"
            name="image-name"
            v-model="productData.imgName"
            placeholder="image name"
            required
          /><input type="text" name="image-uel" placeholder="imaeg url" />
          <input
            type="text"
            name="image-extension"
            v-model="productData.imgExt"
            placeholder="image extension"
            required
          />
        </div>
        <button type="submit">create new product</button>
        <button type="reset">clear input fields</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const productData = reactive({
  id: "",
  name: "",
  category: "",
  imgExt: "",
  imgurl: "",
  imgName: "",
  description: "",
});
const useProductSate = products();

const createProduct = (e) => {
  e.preventDefault();
  productData.id =
    productData.imgName.toString("hex") +
    Math.floor(Math.random() * 434) * 123 +
    Math.ceil(Math.random() * 112);

  useProductSate.value.push(productData);
};

console.log(useProductSate.value);
</script>

<style lang="scss" scoped>
.create-product-main {
  width: 100%;
  height: fit-content;
  padding-top: 14vh;

  .create-product-wrapper {
    width: 100%;
    height: fit-content;

    form {
      width: 90%;
      margin: 20px auto;

      input {
        width: 70%;
        height: 40px;
        margin: 15px auto;
        border: none;
        background: rgb(205, 205, 205);
        display: block;
      }

      button {
        width: max-content;
        height: max-content;
        padding: 20px;
        border: none;
        background: orange;
        color: white;
        margin: 10px auto;
        display: block;
      }
    }
  }
}
</style>