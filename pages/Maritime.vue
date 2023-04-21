<template>
  <div class="main">
    <Head>
      <Title>Maritime || BISCAM</Title>
    </Head>
    <div class="landing-page">
      <div class="blur-wrapper"></div>
      <div class="carousel-div">
        <Slider :images="images" />
      </div>
      <div class="landing-page-content">
        <h1>maritime services</h1>
        <p>Lets get you offshore</p>
        <button :class="{ hide: stickyHeader }">
          <a href="#services-container">get started</a>
        </button>
      </div>
    </div>
    <div :class="[{ changeBg: stickyHeader }, 'navbar']">
      <div class="navbar-wrapper">
        <div class="left-navbar">
          <h3>connect with us:</h3>
        </div>
        <div class="right-navbar">
          <div class="link">
            <i class="fa-brands fa-facebook"></i>
            <a href="#">facebook</a>
          </div>

          <div class="link">
            <i class="fa-brands fa-linkedin"></i>
            <a href="#">linkedin</a>
          </div>
          <div class="link">
            <i class="fa-brands fa-whatsapp"></i>
            <a href="https://wa.link/rt49uv">whatsapp</a>
          </div>
        </div>
      </div>
    </div>
    <div class="services-container" id="services-container">
      <h1>our maritime services</h1>
      <p>Lets get you offshore</p>

      <div class="flex-div">
        <div class="flex-div-content" data-aos="slide-up">
          <div class="blur-wrapper">
            <img
              data-aos="slide-up"
              src="~/assets/flight/offshore.jpg"
              alt=""
            />
          </div>
          <div class="blur-wrapper cover"></div>
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img data-aos="fade" src="~/assets/flight/offshore.jpg" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <h2 data-aos="slide-up">offshore services</h2>
            <button data-aos="slide-up">
              <a href="https://wa.link/rt49uv">contact us</a>
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="slide-up">
          <div class="blur-wrapper">
            <img
              data-aos="slide-up"
              src="~/assets/flight/import-export.jpg"
              alt=""
            />
          </div>
          <div class="blur-wrapper cover"></div>
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                data-aos="fade"
                src="~/assets/flight/import-export.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2 data-aos="slide-up">import and export</h2>
            <button data-aos="slide-up">
              <a href="https://wa.link/rt49uv">contact us</a>
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="slide-up">
          <div class="blur-wrapper">
            <img
              data-aos="slide-up"
              src="~/assets/flight/ship-chandling.jpg"
              alt=""
            />
          </div>
          <div class="blur-wrapper cover"></div>
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                data-aos="fade"
                src="~/assets/flight/ship-chandling.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2 data-aos="slide-up">ship chandling</h2>
            <button data-aos="slide-up">
              <a href="https://wa.link/rt49uv">contact us</a>
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="slide-up">
          <div class="blur-wrapper">
            <img src="~/assets/flight/garbage-removal.jpg" alt="" />
          </div>
          <div class="blur-wrapper cover"></div>
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                data-aos="fade"
                src="~/assets/flight/garbage-removal.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2 data-aos="slide-up">garbage removal</h2>
            <button data-aos="slide-up">
              <a href="https://wa.link/rt49uv">contact us</a>
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="slide-up">
          <div class="blur-wrapper">
            <img
              data-aos="slide-up"
              src="~/assets/flight/ship-weilding.jpg"
              alt=""
            />
          </div>
          <div class="blur-wrapper cover"></div>
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                data-aos="fade"
                src="~/assets/flight/ship-weilding.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2 data-aos="slide-up">ship paintng and weilding</h2>
            <button data-aos="slide-up">
              <a href="https://wa.link/rt49uv">contact us</a>
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="slide-up">
          <div class="blur-wrapper">
            <img
              data-aos="slide-up"
              src="~/assets/flight/tank-cleaning.jpg"
              alt=""
            />
          </div>
          <div class="blur-wrapper cover"></div>
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                data-aos="fade"
                src="~/assets/flight/tank-cleaning.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2 data-aos="slide-up">tank and deep cleaning</h2>
            <button data-aos="slide-up">
              <a href="https://wa.link/rt49uv">contact us</a>
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="slide-up">
          <div class="blur-wrapper">
            <img
              data-aos="slide-up"
              src="~/assets/flight/do-to-door-delivery-1.jpg"
              alt=""
            />
          </div>
          <div class="blur-wrapper cover"></div>
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                data-aos="fade"
                src="~/assets/flight/door-to-door-delivery.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2 data-aos="slide-up">door to door delivery</h2>
            <button data-aos="slide-up">
              <a href="https://wa.link/rt49uv">contact us</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="address-div">
      <div class="blur-wrapper"></div>
      <div class="address-wrapper">
        <div class="address-box">
          <h2>address</h2>
          <p>anciente route, opposite mobile</p>
          <p><a href="tel:+237699391316"> Tel : +237699 391 316</a></p>
          <p><a href="https://wa.link/rt49uv">whatsapp : +237677 387 714</a></p>
          <p>
            <a href="mailto:garagebiscam@gmail.com"
              >Email: garagebiscam@gmail.com</a
            >
          </p>
          <button>
            <NuxtLink to="/contact-page">contact us</NuxtLink>
          </button>
          <button @click="($event) => navigateTo('/appointment')">
            book an appointment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import img1 from "assets/flight/ship-weilding.jpg";
import img2 from "assets/flight/offshore.jpg";
import img3 from "assets/flight/ship-chandling.jpg";
import img4 from "assets/flight/maritime-coast.jpg";

const images = ref([img4, img1, img2, img3]);
const stickyHeader = ref(false);

if (process.client) {
  window.addEventListener("scroll", () => {
    stickyHeader.value = true ? window.scrollY > 0 : false;
  });
}
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: fit-content;

  .landing-page {
    width: 100%;
    height: 90vh;
    position: relative;
    background: url(../assets/flight/ship-weilding.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    .slider-div {
      width: 100%;
      height: 90vh;
      position: relative;
    }

    .blur-wrapper {
      opacity: 0.3;
    }
    .carousel-div {
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 0;
      left: 0;
    }

    .landing-page-content {
      width: 100%;
      height: 80%;
      position: absolute;
      top: 10%;
      left: 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      z-index: 1;

      h1 {
        padding: 10px;
        text-transform: uppercase;
        color: white;
        font-size: 60px;
        @media screen and (max-width: 768px) {
          font-size: 50px;
          @media screen and (max-width: 400px) {
            font-size: 40px;
          }
        }
      }

      p {
        position: relative;
        color: white;
        font: 500 22px "Montserrat", sans-serif;
        text-transform: capitalize;
        letter-spacing: 1px;
      }

      button {
        width: 200px;
        height: 45px;
        border: none;
        background: rgb(241, 162, 42);

        a {
          text-decoration: none;
          color: white;
          text-transform: uppercase;
          padding: 10px;
        }

        @media screen and (max-width: 400px) {
          width: 85%;
        }
      }

      button.hide {
        display: none;
      }
    }
  }
  .navbar.changeBg {
    box-shadow: 0 8px 18px 2px rgb(213, 212, 212);
  }

  .services-container {
    width: 100%;
    height: fit-content;

    padding: 30px 0;

    h1 {
      text-transform: uppercase;
      font: 800 50px "Montserrat", sans-serif;
      padding: 20px;

      @media screen and (max-width: 400px) {
        font-size: 30px;
      }
    }

    p {
      color: rgb(240, 148, 10);
      padding: 10px;
    }

    .flex-div-content {
      position: relative;
      overflow: hidden;

      .blur-wrapper {
        overflow: hidden;
        opacity: 0.9;
        background: black;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .blur-wrapper.cover {
        opacity: 0.5;
      }

      .flex-div-content-bottom {
        h2 {
          color: white;
        }
      }

      &:hover {
        .cover {
          opacity: 0.7;
        }
      }
    }
  }

  .address-div {
    background: url(../assets/flight/ship-weilding.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
}
</style>