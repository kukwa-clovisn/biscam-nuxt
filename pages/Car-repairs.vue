<template>
  <div class="main">
    <Head>
      <Title>Car Repair || BISCAM</Title>
    </Head>
    <div class="landing-page">
      <div class="content">
        <h1>biscam multi-purpose garage</h1>
        <p>Let us service your car</p>
        <button>
          <a
            href="https://wa.link/rt49uv"
            target="_blank"
            rel="noopener noreferrer"
            >contact us</a
          >
        </button>
      </div>
      <div class="nav-div lg">
        <div :class="[{ changeBg: stickyHeader }, 'nav-link']">
          <a href="#"> <i class="fa-brands fa-facebook"></i> facebook</a>
        </div>
        <div :class="[{ changeBg: stickyHeader }, 'nav-link']">
          <a href="#"> <i class="fa-brands fa-twitter"></i> twitter</a>
        </div>
        <div :class="[{ changeBg: stickyHeader }, 'nav-link']">
          <a href="#"><i class="fa-brands fa-linkedin"></i> linkedin</a>
        </div>
        <div :class="[{ changeBg: stickyHeader }, 'nav-link']">
          <a
            href="https://wa.link/rt49uv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp"></i> whatsapp</a
          >
        </div>
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
            <Dropdown
              name="Facebook"
              :items="linkDropdown"
              message="redirecting..."
            />
          </div>

          <div class="link">
            <i class="fa-brands fa-twitter"></i>
            <a href="#">twitter</a>
          </div>
          <div class="link">
            <i class="fa-brands fa-linkedin"></i>
            <a href="#">linkedin</a>
          </div>
          <div class="link">
            <i class="fa-brands fa-tiktok"></i>
            <a href="#">tiktok</a>
          </div>
        </div>
      </div>
    </div>
    <div class="services">
      <h1>services we offer</h1>
      <p>Find out the amazing services we offer almost for free</p>
      <div class="flex-div">
        <div class="flex-div-content" data-aos="flip-left">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/car-programming.png" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <h2>car programming</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <a
                href="https://wa.link/rt49uv"
                target="_blank"
                rel="noopener noreferrer"
                >contact us</a
              >
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="flip-left">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/auto-elect-two.webp" alt="" />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2>mechanic</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <a
                href="https://wa.link/rt49uv"
                target="_blank"
                rel="noopener noreferrer"
                >contact us</a
              >
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="flip-left">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/car-wash.jpg" alt="" />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2>car wash</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <a
                href="https://wa.link/rt49uv"
                target="_blank"
                rel="noopener noreferrer"
                >contact us</a
              >
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="flip-left">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/download.jpg" alt="" />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2>painting</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <a
                href="https://wa.link/rt49uv"
                target="_blank"
                rel="noopener noreferrer"
                >contact us</a
              >
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="flip-left">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/auto-elect-pic.jpg" alt="" />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2>auto elect</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <a
                href="https://wa.link/rt49uv"
                target="_blank"
                rel="noopener noreferrer"
                >contact us</a
              >
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="flip-left">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/pana-biting.png" alt="" />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2>pana biting</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <a
                href="https://wa.link/rt49uv"
                target="_blank"
                rel="noopener noreferrer"
                >contact us</a
              >
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
          <p>
            <a
              href="tel:+237699391316"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tel : +237699 391 316</a
            >
          </p>
          <p>
            <a
              href="https://wa.link/rt49uv"
              target="_blank"
              rel="noopener noreferrer"
              >whatsapp : +237677 387 714</a
            >
          </p>
          <p>
            <a
              href="mailto:garagebiscam@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >Email: garagebiscam@gmail.com</a
            >
          </p>
          <button>
            <a
              href="https://wa.link/rt49uv"
              target="_blank"
              rel="noopener noreferrer"
              >contact us</a
            >
          </button>
          <button @click="($event) => navigateTo('/appointment')">
            book an appointment
          </button>
        </div>
      </div>
    </div>
    <div>
      <qrcode :src="codesrc" />
    </div>
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7959.476450402208!2d9.683616696410493!3d4.073660796947459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106112367afdf705%3A0x52e8d4cda626c755!2sBonassama%2C%20Bonab%C3%A9ri!5e0!3m2!1sen!2scm!4v1678543793445!5m2!1sen!2scm"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script setup>
import codesrc from "assets/QR_CODES/garage-whatsapp-code.png";
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
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../assets/flight/mechanic-servicing-car.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    .slider-wrapper {
      width: 100vw;
      height: 100%;
    }

    .content {
      width: 70%;
      height: fit-content;
      padding: 10px;
      padding-left: 9%;
      position: relative;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;

      h1 {
        font: 800 60px "Montserrat", "Nunito Sans", sans-serif;
        letter-spacing: 1px;
        color: white;
        text-transform: uppercase;
        text-align: left;
        padding: 0;
        margin: 0;
      }

      p {
        text-align: left;
        color: white;
        text-transform: capitalize;
        padding: 10px;
        letter-spacing: 1px;
      }

      button {
        width: 200px;
        height: 50px;
        background: rgb(241, 162, 42);
        border: none;
        border-radius: 4px;

        a {
          text-decoration: none;
          color: white;
          text-transform: uppercase;
          font: 600 18px "Nunito Sans", sans-serif;
        }
      }

      @media screen and (max-width: 1000px) {
        width: 80%;

        @media screen and (max-width: 768px) {
          width: 95%;
          h1 {
            font-size: 50px;
          }
        }
      }
    }
    .nav-div {
      width: 25%;
      height: fit-content;

      .nav-link {
        width: 150px;
        height: 70px;
        border-radius: 2px;

        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        background: rgba(8, 20, 55, 0.475);
        margin: 15px auto;
        cursor: pointer;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: white;
          text-transform: capitalize;
        }

        &:hover {
          transform: translateX(-5px);

          background: rgba(146, 91, 2, 0.401);
        }

        &:active {
          transform: scale(0.9);
        }
      }

      .nav-link.changeBg {
        background: rgba(221, 144, 0, 0.482);
      }
    }
    .nav-div.lg {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    @media screen and (max-width: 768px) {
      height: 90vh;
    }
  }
  .navbar {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
  .navbar.changeBg {
    box-shadow: 0 8px 18px 2px rgb(213, 212, 212);
  }

  .services {
    width: 100vw;
    height: fit-content;
    padding-top: 20px;

    h1 {
      padding: 20px;
      text-align: center;
      text-transform: uppercase;
      font: 700 50px "Montserrat", "Nunito Sans", sans-serif;
      color: rgb(236, 167, 17);
      @media screen and (max-width: 768px) {
        font-size: 40px;
      }
    }

    p {
      padding: 10px;
      text-align: center;
    }
  }

  .map-container {
    width: 100%;
    height: fit-content;

    iframe {
      height: 60vh;
      width: 100vw;
    }
  }
}
</style>
