<template>
  <div class="product-main">
    <div class="header-component"></div>
    <div class="product-main-wrapper">
      <div class="product-image">
        <img
          :src="`/_nuxt/assets/car-engines/${displayProduct[0].imageUrl}`"
          alt=""
        />
      </div>

      <div class="product-details">
        <div class="product-details-wrapper">
          <div class="product-head">
            <h1>{{ displayProduct[0].name }}</h1>
            <h4>
              {{ displayProduct[0].category }}
            </h4>
            <p>price -</p>
          </div>
          <div class="product-content">
            <h3>product description:</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              quasi repellat non dolore quaerat blanditiis, deleniti consequatur
              sunt et hic.
            </p>
            <button>contact supplier</button>
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
            v-model="booking.number"
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Additional information"
            v-model="booking.message"
          ></textarea>
        </div>
      </div>
      <div class="preview-info">
        <p v-if="booking.name.length">
          name : <span>{{ booking.name }}</span>
        </p>
        <p v-if="booking.email.length">
          email : <span>{{ booking.email }}</span>
        </p>
        <p v-if="booking.tel.length">
          tel: <span>{{ booking.tel }}</span>
        </p>
        <p v-if="booking.number">
          number of {{ displayProduct[0].name }} requested :
          <span>{{ booking.number }}</span>
        </p>
        <p v-if="booking.message.length">
          message : <span>{{ booking.message }}</span>
        </p>
        <button
          v-if="booking.email.length && booking.name.length && booking.number"
        >
          order now <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>

    <div class="other-products">
      <h1>find other products that interest you</h1>
      <div class="products-div">
        <div
          class="product"
          v-for="product in products"
          :key="product.id"
          @click="($event) => navigateTo(`/spare-part/${product.id}`)"
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
    <SparePartCategoryHeader />
  </div>
</template>

<script setup>
const route = useRoute();

const productRoute = route.params.id;

const booking = reactive({
  name: "",
  email: "",
  tel: "",
  number: 1,
  message: "",
});

const products = productState();

const displayProduct = products.value.filter((product) => {
  return product.id.toString() === route.params.id;
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
          button {
            display: block;
            width: max-content;
            height: max-content;
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            margin: 20px 0 10px 0;
            background: rgb(222, 155, 1);
            color: rgb(224, 223, 223);
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

  .purchase-div-container {
    width: 80%;
    height: fit-content;
    margin: 20px auto;

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

    .preview-info {
      width: 100%;
      height: fit-content;
      box-shadow: 0 0 18px 9px rgb(229, 228, 228);
      padding: 20px;

      p {
        width: fit-content;
        margin: 20px 0;
        text-align: left;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        text-transform: capitalize;
        gap: 20px;

        span {
          font-weight: bold;
          text-transform: none;
        }
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
      margin: 0;
      margin-left: 10px;
    }

    @media screen and (max-width: 1000px) {
      width: 90%;
    }
  }

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
}
</style>