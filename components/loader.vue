<template>
  <div class="loader-div-container" v-loading="loader">
    <p>{{ props.message }}</p>
  </div>
</template>

<script setup>
const loader = useLoaderState();

const props = defineProps({
  message: String,
});
</script>
<style lang="scss" scoped>
.loader-div-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vh auto;

  p {
    padding: 20px;
    text-transform: capitalize;
    color: rgb(116, 83, 1);
  }
}
</style>