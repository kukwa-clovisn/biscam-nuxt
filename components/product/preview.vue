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
      <span>{{ props.quantity }}</span>
    </p>
    <p v-if="props.message.length">
      message : <span>{{ props.message }}</span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  productName: String,
  name: String,
  email: String,
  tel: String,
  quantity: Number,
  message: String,
  data: String,
  description: String,
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
}
</style>