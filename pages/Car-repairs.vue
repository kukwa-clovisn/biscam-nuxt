<template>
  <div class="main">
    <div class="landing-page">
      <div class="content">
        <h1>biscam multi-purpose garage</h1>
        <p>Let us service your car</p>
        <button>
          <NuxtLink to="/contact-page">contact us</NuxtLink>
        </button>
      </div>
      <div class="image-wrapper">
        <div class="step-div">
          <!-- <img src="~/assets/flight/pana-biting.png" alt="" /> -->
        </div>
      </div>
    </div>
    <div class="services">
      <h1>services we offer</h1>
      <p>Find out the amazing services we offer almost for free</p>
      <div class="flex-div">
        <div class="flex-div-content">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/car-programming.png" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <h2>car programming</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <NuxtLink to="/contact-page">contact us</NuxtLink>
            </button>
          </div>
        </div>
        <div class="flex-div-content">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/auto-elect-two.webp" alt="" />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2>mechanic</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <NuxtLink to="/contact-page">contact us</NuxtLink>
            </button>
          </div>
        </div>
        <div class="flex-div-content">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/car-wash.jpg" alt="" />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2>car wash</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <NuxtLink to="/contact-page">contact us</NuxtLink>
            </button>
          </div>
        </div>
        <div class="flex-div-content">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/download.jpg" alt="" />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2>painting</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <NuxtLink to="/contact-page">contact us</NuxtLink>
            </button>
          </div>
        </div>
        <div class="flex-div-content">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/auto-elect-pic.jpg" alt="" />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2>auto elect</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <NuxtLink to="/contact-page">contact us</NuxtLink>
            </button>
          </div>
        </div>
        <div class="flex-div-content">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/pana-biting.png" alt="" />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2>pana biting</h2>
            <p>We deal with the programming of all sorts of cars.</p>
            <button>
              <NuxtLink to="/contact-page">contact us</NuxtLink>
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
          <p><a href="tel: +237699391316"> Tel : +237699 391 316</a></p>
          <p><a href="https://wa.link/rt49uv">whatsapp : +237677 387 714</a></p>
          <p>
            <a href="mailto:garagebiscam@gmail.com"
              >Email: garagebiscam@gmail.com</a
            >
          </p>
          <button>
            <NuxtLink to="/contact-page">contact us</NuxtLink>
          </button>
          <button @click="($event) => (appointmentState = true)">
            book an appointment
          </button>
        </div>
      </div>
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
    <div class="contact-container">
      <contactForm
        whatsappLink="https://wa.link/rt49uv"
        whatsappTel="+237677387714"
        tel="+237699391316"
        email="garagebiscam@gmail.com"
      />
    </div>
  </div>
</template>
<script setup>
const appointmentState = useAppointmentState();
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: fit-content;

  .landing-page {
    width: 100vw;
    height: 94vh;
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
      width: 65%;
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
    }

    .image-wrapper {
      width: 34%;
      height: fit-content;
      position: relative;

      img {
        width: 80%;
        height: auto;
        animation: move 3s infinite linear alternate forwards;
      }
    }
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
    }

    p {
      padding: 10px;
      text-align: center;
    }
  }

  .address-div {
    width: 100%;
    height: 70vh;
    background: url(../assets/flight/auto-elect-two.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;

    .blur-wrapper {
      background: rgb(15, 30, 44);
      opacity: 0.8;
    }

    .address-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .address-box {
        width: 60%;
        height: fit-content;
        position: relative;

        h2 {
          color: orange;
          padding: 10px;
          text-transform: capitalize;
          font: 600 40px "Montserrat", "Nunito Sans", sans-serif;
        }

        p {
          color: white;
          padding: 10px;
          text-transform: capitalize;

          a {
            text-decoration: none;
            color: white;
          }
        }

        button {
          width: max-content;
          height: max-content;
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          margin: 20px;
          text-transform: capitalize;
          background: white;

          a {
            text-decoration: none;
            color: rgb(36, 35, 35);
          }

          &:last-child {
            background: rgb(238, 177, 8);
            color: white;
          }

          @media screen and (max-width: 400px) {
            display: block;
          }
        }
      }
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
