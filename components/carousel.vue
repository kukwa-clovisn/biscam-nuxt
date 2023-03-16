<template>
  <div class="main-carousel">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <div class="blur-wrapper"></div>

        <img :src="image.src" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Carousel",
  props: {
    images: { type: Array },
  },
  setup(props) {
    const images = ref(props.images);
    return {
      images,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-carousel {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  margin: 0 auto;
  background: transparent;
}

.blur-wrapper {
  opacity: 0.3;
}

h1 {
  display: block;

  position: absolute;
  top: 40%;
  left: 20%;
  color: white;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 16px;
  z-index: 1;
}
button.el-carousel_arrow {
  display: flex !important;
  visibility: visible;
}

img {
  height: 100%;
  width: auto;
}

.el-carousel {
  width: 100% !important;
  margin: 0;
  padding: 0;
  position: relative;
  background: transparent;
}

.el-carousel__item.is-active {
  // width: 100%;
  height: 100%;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }
}

.el-carousel__item:nth-child(2n) {
  background: transparent;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: transparent;
}
</style>
