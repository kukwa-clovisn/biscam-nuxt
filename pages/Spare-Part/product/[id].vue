<template>
  <div class="product-main" v-loading="loader">
    <Head>
      <Title>Car Spare Part || BISCAM</Title>
    </Head>
    <div class="header-component"></div>
    <div class="product-main-wrapper">
      <div class="product-image">
        <img :src="displayProduct.data" alt="" />
      </div>

      <div class="product-details">
        <div class="product-details-wrapper">
          <div class="product-head">
            <h1>Car Spare Part</h1>
            <!-- <h4>
              {{ displayProduct[0].category }}
            </h4> -->
            <h4>Car Spare Parts</h4>
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

    <div class="purchase-div-container">
      <div class="purchase-div">
        <h3>
          Place Your <span>Order</span> Now. We <span>deliver</span> everywhere
          <span>door</span> to
          <span>door</span>
        </h3>
        <div class="purchase-wrapper">
          <input
            type="text"
            placeholder="Enter Your Name"
            v-model="booking.name"
          />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            v-model="booking.email"
          />
          <input
            type="tel"
            placeholder="Enter Phone Number (Optional)"
            v-model="booking.tel"
          />
          <input
            type="number"
            placeholder="Number Of Items"
            min="1"
            name="quantity"
            v-model="booking.quantity"
          />
          <textarea
            cols="30"
            rows="10"
            name="message"
            placeholder="Additional information"
            v-model="booking.message"
          ></textarea>
        </div>
      </div>
      <product-preview
        :productName="booking.productName"
        :name="booking.name"
        :email="booking.email"
        :tel="booking.tel"
        :quantity="booking.quantity"
        :message="booking.message"
        :description="booking.description"
      />
      <button
        v-if="booking.name.length && booking.quantity"
        @click="orderProduct()"
      >
        order now <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
    <product-misc />

    <SparePartCategoryHeader />
  </div>
</template>

<script setup>
import axios from "axios";
const loader = useLoaderState();
const products = ref([]);
const displayProduct = ref([]);
const route = useRoute();

const booking = reactive({
  name: "",
  productName: "",
  email: "",
  tel: "",
  quantity: 1,
  message: "",
  description: "",
  // data: "",
});

displayProduct.value = products.value.filter(
  (item) => item.id === route.params.id
);

onBeforeMount(() => {
  axios(
    `https://api.biscaminvestmentsarl.com/api/product/item/${localStorage.getItem(
      "product_id"
    )}`
  )
    .then((res) => {
      loader.value = false;

      displayProduct.value = res.data;

      // booking.data = res.data.data;
      booking.productName = res.data.name;
      booking.description = res.data.description;
    })
    .catch((err) => {
      loader.value = false;
      return err;
    });
});

onMounted(() => {
  axios("https://api.biscaminvestmentsarl.com/api/product/products")
    .then((res) => {
      loader.value = false;
      products.value = res.data;
    })
    .catch((err) => {
      loader.value = false;
      return err;
    });
});

const orderProduct = () => {
  loader.value = true;
  if (
    booking.productName !== " " &&
    booking.name !== " " &&
    booking.tel !== " " &&
    booking.quantity !== " " &&
    booking.message !== " "
  ) {
    axios
      .post("http://localhost:9005/api/product/order", booking)
      .then((res) => {
        loader.value = false;
        if (200 <= res.status && res.status < 400) {
          ElNotification.success({
            title: "Order placed successfully.",
            message:
              "Request sent successfull. We will get back to you through your email or Contact with more details concerning the product you've chosen. Thanks for doing business with us.",
            offset: 100,
          });
          navigateTo("/Spare-Part");
        } else {
          loader.value = false;
          ElNotification.error({
            title: "Error",
            message:
              "Sorry your order has not been placed. Try again. /n Maybe a network error",
            offset: 100,
          });
        }
      });
  } else {
    loader.value = false;
    ElNotification.error({
      title: "Error",
      message:
        "Ensure that all fields have been filled correctly before placing an order.",
      offset: 100,
    });
  }
};
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

  .purchase-div-container {
    width: 80%;
    height: fit-content;
    margin: 20px auto;
    .purchase-div {
      width: 100%;
      height: fit-content;
      margin: 20px 0;

      h3 {
        text-align: left;
        text-transform: capitalize;
        font: 500 17px "Montserrat", "Poppins", sans-serif;
        padding: 20px 0;

        span {
          color: rgb(226, 148, 2);
        }
      }

      .purchase-wrapper {
        width: 100%;
        height: fit-content;

        input {
          display: block;
          width: 100%;
          border: none;
          outline: none;
          border-bottom: 1px solid rgb(134, 133, 133);
          padding: 10px 15px;
          margin: 20px 0;
          text-align: left;
          border-radius: 3px;

          &:hover {
            border-bottom: 3px solid rgb(211, 138, 3);
          }

          &:active,
          &:focus {
            border: 1px solid rgb(239, 157, 4);
          }
        }

        textarea {
          display: block;
          width: 100%;
          height: 150px;
          outline: none;
          border: 1px solid rgb(148, 148, 148);
          padding: 20px;
          text-align: left;
          margin: 20px auto;

          &:hover {
            border: 3px solid rgb(211, 138, 3);
          }

          &:focus,
          &:active {
            border: 1px solid rgb(239, 157, 4);
          }
        }
      }
    }
    @media screen and (max-width: 1000px) {
      width: 90%;
    }
  }

  button {
    width: 200px;
    height: 45px;
    border-radius: 2px;
    background: rgb(232, 152, 2);
    color: white;
    border: none;
    display: block;
    margin: 20px;
    margin-left: 10px;
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
