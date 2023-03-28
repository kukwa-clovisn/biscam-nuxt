<template>
  <div class="create-product-main">
    <div class="create-product-wrapper">
      <form @submit="createProduct">
        <h1>upload a product.</h1>

        <div class="form-data">
          <input
            type="file"
            name="product-image"
            @change="onChangeFunc"
            placeholder="select product image (<1mb):"
            required
          />

          
          <input
            type="text"
            name="product-name"
            v-model="productData.name"
            placeholder="Enter product name:"
            required
          />
          <select
            name="product-category"
            v-model="productData.category"
            placeholder="Enter product category:"
          >
            <option value="engines">engines</option>
            <option value="manifold">manifold</option>
            <option value="keyStarter">key starter</option>
            <option value="shaft">shaft</option>
          </select>
          <input
            type="text"
            name="product-description"
            v-model="productData.description"
            placeholder="Product Description:"
          />
          <input
            type="text"
            name="product-qualities"
            @input="splitQualities"
            placeholder="Enter product Qualities. Separate each quality with a full stop (.)"
          />
          <input
            type="text"
            name="price-from"
            v-model="productData.priceFrom"
            placeholder="Enter price range from:($)"
          />
          <input
            type="text"
            name="price-to"
            v-model="productData.priceTo"
            placeholder="Enter Price range to:($)"
          />
          <input
            type="text"
            name="price"
            v-model="productData.price"
            placeholder="Enter Standard price ($)"
          />
        </div>
        <div class="product-preview">
          <div class="product-image">
            <img
              :src="productImage.preview"
              v-if="productImage.preview"
              alt=""
            />
          </div>
          <div class="product-details">
            <div class="product-details-wrapper">
              <div class="product-head">
                <h2 v-if="productData.name">{{ productData.name }}</h2>
                <h4 v-if="productData.category">
                  {{ productData.category }}
                  <span
                    >${{
                      productData.price
                        ? productData.price
                        : "No standard Price"
                    }}</span
                  >
                  <span v-if="!productData.price">
                    ${{ productData.priceFrom }} -- ${{
                      productData.priceTo
                    }}</span
                  >
                </h4>
              </div>
              <p v-if="productData.description">
                {{ productData.description }}
              </p>
              <div class="product-qualities">
                <h3>product qualities</h3>
                <ul v-if="productData.qualitiesArr.length">
                  <li
                    v-for="(quality, index) in productData.qualitiesArr"
                    :key="index"
                  >
                    {{ quality }}
                  </li>
                </ul>
              </div>
              <p>
                Price Range:
                <span
                  >${{ productData.priceFrom }} --
                  <span>${{ productData.priceTo }}</span></span
                >
              </p>
            </div>
          </div>
        </div>

        <div class="btns">
          <button type="submit">create new product</button>
          <button type="reset">clear input fields</button>
        </div>
      </form>
    </div>
    <!-- <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
    /> -->
  </div>
</template>

<script setup>
import axios from "axios";

// import vueDropzone from "vue2-dropzone-vue3";

const productData = reactive({
  name: "",
  category: "",
  imgExt: "",
  imgName: "",
  description: "",
  priceFrom: "",
  priceTo: "",
  qualitiesArr: [],
  price: "",
  imageBuffer: null,
});

// const dropzoneOptions = ref({
//   url: "http://localhost:3000/api/product/product",
//   thumbnailWidth: 150,
//   maxFilesize: 0.5,
//   headers: { "My-Awesome-Header": "biscam" },
// });

const preview = ref({});

const productImage = reactive({
  image: null,
  preview: null,
  tempImg: null,
});

const splitQualities = (e) => {
  return (productData.qualitiesArr = e.target.value.split("."));
};

function onChangeFunc(e) {
  if (e.target.files[0].size < 1048576) {
    productData.imgExt = e.target.files[0].type;
    productData.imgName = e.target.files[0].name;
    productImage.preview = e.target.files[0];
    preview.value = e.target.files[0];
  } else {
    ElNotification.error({
      title: "File Size Exceeded",
      message:
        "Ensure that the image you are uploading is less than 1mb( <1mb) in size",
      offset: 100,
    });
  }
}
watch(preview, (preview) => {
  let fileReader = new FileReader();
  fileReader.readAsDataURL(preview);
  fileReader.addEventListener("load", () => {
    productImage.preview = fileReader.result;
  });
});
const createProduct = (e) => {
  e.preventDefault();

  const formdata = new FormData();

  formdata.append("image", preview.value, preview.value.name);
  formdata.append("categroy",productData.category)
  formdata.append("description",productData.description )
  formdata.append("qualities", productData.qualitiesArr)
  formdata.append("priceFrom",productData.priceFrom)
  formdata.append("priceTo",productData.priceTo)
  formdata.append("price",productData.price)
 


  axios({
    url: `/api/product/product`,
    method: 'post',
    data: formdata,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json'
    }
  },
      {
        onUploadProgress: () => {
          ElNotification.success({
            title: "Loading Product Image",
            message: "Loading Image pleae wait...",
            offset: 100,
          });
        },
      }
    )
    .then((res) => {
      if (res) {
        // profile.image = `data:image/png;base64,` + res.data.image;
        // productImage.preview = `data:image/png;base64,` + res.data.image;

        console.log(res);
        ElNotification.success({
          title: "File Upload successful",
          message: res.data.message,
          offset: 100,
        });
      }
    })
    .catch((err) => {
      ElNotification.error({
        title: "Error",
        message: err,
        offset: 100,
      });
    });
};
</script>

<style lang="scss" scoped>
.create-product-main {
  width: 100%;
  height: fit-content;
  padding-top: 14vh;
  background: rgb(244, 244, 244);

  .create-product-wrapper {
    width: 100%;
    height: fit-content;

    h1 {
      text-transform: capitalize;
      padding: 20px;
      text-align: center;
    }

    form {
      width: 90%;
      margin: 20px auto;

      input,
      select {
        width: 70%;
        height: 45px;
        margin: 15px auto;
        border: none;
        border-bottom: 1px solid rgb(169, 167, 167);
        display: block;
        text-align: left;
        outline: none;
        padding: 5px 10px;
        border-radius: 3px;

        &:hover {
          border-right: 10px solid orange;
          border-bottom: 1px solid #d4a20b;
          border-left: 3px solid orange;
          box-shadow: 0 0 10px 7px rgb(231, 231, 231);
        }
        &:active,
        &:focus {
          border: 1px solid rgb(247, 168, 23);
          border-right: 10px solid orange;

          border-left: 3px solid orange;
        }
      }

      .product-preview {
        width: 100%;
        height: fit-content;
        background: rgb(255, 255, 255);
        padding: 20px 10px;
        border-radius: 5px;
        box-shadow: 0 0 16px 6px rgb(222, 222, 222);
        .product-image {
          width: 70%;
          height: fit-content;
          margin: 20px auto;

          img {
            width: auto;
            height: 300px;
            object-fit: contain;
            cursor: pointer;
            margin: 0;
            display: block;
          }
        }

        .product-details {
          width: 70%;
          height: fit-content;
          margin: 10px auto;

          .product-details-wrapper {
            width: 100%;
            height: fit-content;
            padding: 20px 10px;

            .product-head {
              width: 100%;
              height: fit-content;
              border-bottom: 1px solid #d7d7d7;
              h2 {
                text-transform: capitalize;
                font: 700 30px "Montserrat", "Nunito Sans", sans-serif;
              }
              h4 {
                color: rgb(163, 163, 163);
                text-transform: capitalize;
                margin: 5px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span {
                  font-weight: bolder;
                  color: black;
                }
              }
            }

            h2,
            h4,
            p {
              text-align: left;
            }
            .product-qualities {
              width: 100%;
              height: fit-content;

              h3 {
                text-align: left;
                text-transform: capitalize;
                font: 600 17px "Nunito Sans", sans-serif;
              }

              ul {
                width: 100%;
                height: fit-content;
                list-style: none;

                li {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  list-style-position: inside;
                  gap: 20px;
                  margin: 20px 0;
                }
              }
            }
          }
        }

        @media screen and (max-width: 650px) {
          .product-image,
          .product-details {
            width: 90%;
          }
        }
      }

      .btns {
        width: 70%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 10px auto;

        button {
          width: 47%;
          height: 50px;
          border: none;
          background: rgb(21, 57, 137);
          color: white;
          margin: 10px auto;
          font-weight: bold;
          text-transform: capitalize;
          display: block;
          font-size: 16px;

          box-shadow: 0 3px 1px 2px rgb(6, 4, 127);

          &:last-child {
            background: white;
            color: rgb(101, 100, 100);
            background: rgb(252, 168, 34);
            box-shadow: 0 3px 5px 2px rgb(147, 94, 2);
          }

          @media screen and (max-width: 500px) {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>