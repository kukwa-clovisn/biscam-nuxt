<template>
  <div class="qrcode-container">
    <div class="qrcode-wrapper">
      <h2>scan <span>QR CODE</span></h2>
      <p>connect with us directly</p>
      <div class="code-wrapper">
        <img
          :src="props.src"
          alt="scan code to connect"
          title="Scan code to connect directly."
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  src: String,
});
</script>

<style lang="scss" scoped>
.qrcode-container {
  width: 100%;
  height: fit-content;
  background: white;

  .qrcode-wrapper {
    width: 100%;
    height: fit-content;

    h2 {
      text-align: center;
      font: 600 30px "Montserrat", sans-serif;
      padding: 20px;
      span {
        color: rgb(213, 139, 1);
        font-size: 1.1em;
      }
    }

    p {
      text-align: center;
      text-transform: capitalize;
      padding: 10px;
    }

    .code-wrapper {
      width: 80%;
      height: fit-content;
      margin: 10px auto;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 200px;
        height: auto;
        cursor: pointer;
      }
    }
  }
}
</style>