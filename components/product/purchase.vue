<template>
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
          name="number"
          v-model="booking.number"
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
      :productName="props.productName"
      :name="booking.name"
      :email="booking.email"
      :tel="booking.tel"
      :number="booking.number"
      :message="booking.message"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  productName: String,
});

const booking = reactive({
  name: "",
  email: "",
  tel: "",
  number: 1,
  message: "",
});
</script>
<style lang="scss" scoped>
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
</style>