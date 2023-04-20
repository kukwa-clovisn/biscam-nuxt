<template>
  <div class="preview-info">
    <p v-if="props.name.length">
      name : <span>{{ props.name }}</span>
    </p>
    <p v-if="props.email.length">
      email : <span>{{ props.email }}</span>
    </p>
    <p v-if="props.tel.length">
      tel: <span>{{ props.tel }}</span>
    </p>
    <p v-if="props.number">
      number of {{ props.productName }} requested :
      <span>{{ props.number }}</span>
    </p>
    <p v-if="props.message.length">
      message : <span>{{ props.message }}</span>
    </p>
    <button v-if="props.email.length && props.name.length && props.number">
      order now <i class="fa-solid fa-cart-shopping"></i>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  productName: String,
  name: String,
  email: String,
  tel: String,
  number: Number,
  message: String,
});
</script>

<style lang="scss" scoped>
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
}
</style>