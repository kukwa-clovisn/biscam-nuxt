<template>
  <main>
    <Head>
      <Title>Cleaning Agency || BISCAM</Title>
    </Head>
    <div class="landing-page">
      <div class="blur-wrapper"></div>
      <div class="content">
        <h1>
          biscam <br />
          cleaning agency
        </h1>
        <p>keep it clean always</p>
        <button>
          <a href="#about">learn more</a>
        </button>
      </div>
      <div class="image-wrapper">
        <img src="~/assets/flight/cleaning-cartoon-transparent.png" alt="" />
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
            <a
              href="https://www.facebook.com/profile.php?id=100090287600432&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              >facebook</a
            >
          </div>

          <div class="link">
            <i class="fa-brands fa-whatsapp"></i>
            <a
              href="https://wa.link/wrxet8"
              target="_blank"
              rel="noopener noreferrer"
              >whatsapp</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="about-div" id="about">
      <div class="about-wrapper">
        <div class="content">
          <h1 data-aos="slide-right">about us</h1>
          <p data-aos="slide-up">
            BISCAM Cleaning Services is a branch of the Biscam Investment Group
            with an eco-friendly perspective. We are dedicated to providing
            professional services at the best prices to all our clients.Our
            motto is <b>“KEEPING IT CLEAN ALWAYS”.</b>
          </p>
        </div>
        <div class="about-img" data-aos="slide-up">
          <img data-aos="fade-up" src="~/assets/flight/images.png" alt="" />
        </div>
      </div>
    </div>
    <div class="section" data-aos="slide-right">
      <div class="blur-wrapper"></div>
      <h2 data-aos="slide-up">let us <span>keep it clean</span> for you</h2>
      <div class="image-wrapper">
        <img
          data-aos="slide-up"
          src="~/assets/flight/cleaning-cartoon-tranparent.png"
          alt=""
        />
        <div class="blur-wrapper">
          <a
            href="https://wa.link/wrxet8"
            target="_blank"
            rel="noopener noreferrer"
            >contact us</a
          >
        </div>
      </div>
    </div>
    <div class="services-div" id="services">
      <h1>our cleaning services</h1>
      <div class="flex-div">
        <div class="flex-div-content" data-aos="flip-left">
          <div class="blur-wrapper">
            <img
              data-aos="slide-up"
              src="~/assets/flight/cleaning-equipments-1.jpg"
              alt=""
            />
          </div>
          <div class="blur-wrapper cover"></div>
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                data-aos="slide-left"
                src="~/assets/flight/cleaning-equipment.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2 data-aos="slide-up">custom cleaning</h2>
            <button data-aos="slide-up">
              <a
                href="https://wa.link/wrxet8"
                target="_blank"
                rel="noopener noreferrer"
                >contact us</a
              >
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="flip-left">
          <div class="blur-wrapper">
            <img
              data-aos="slide-up"
              src="~/assets/flight/hotel-cleaning.jpg"
              alt=""
            />
          </div>
          <div class="blur-wrapper cover"></div>
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                data-aos="slide-up"
                src="~/assets/flight/cleaning-equipmens-2.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2 data-aos="slide-up">hotels and office cleaning</h2>
            <button data-aos="slide-up">
              <a
                href="https://wa.link/wrxet8"
                target="_blank"
                rel="noopener noreferrer"
                >contact us</a
              >
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="flip-left">
          <div class="blur-wrapper">
            <img
              data-aos="slide-up"
              src="~/assets/flight/cleaning.jpg"
              alt=""
            />
          </div>
          <div class="blur-wrapper cover"></div>
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                data-aos="slide-up"
                src="~/assets/flight/cleaning-equipments-3.png"
                alt=""
              />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2 data-aos="slide-up">genral house cleaning</h2>
            <button data-aos="slide-up">
              <a
                href="https://wa.link/wrxet8"
                target="_blank"
                rel="noopener noreferrer"
                >contact us</a
              >
            </button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="flip-left">
          <div class="blur-wrapper">
            <img
              data-aos="slide-up"
              src="~/assets/flight/ship-deck-cleaning.jpg"
              alt=""
            />
          </div>
          <div class="blur-wrapper cover"></div>
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                data-aos="slide-up"
                src="~/assets/flight/office-cleaning.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="flex-div-content-bottom">
            <h2 data-aos="slide-up">ship deck cleaning</h2>
            <button data-aos="slide-up">
              <a
                href="https://wa.link/wrxet8"
                target="_blank"
                rel="noopener noreferrer"
                >contact us</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="display-div">
      <div class="display-wrapper">
        <div class="image-wrapper">
          <img src="~/assets/flight/cleaning-services.jpg" alt="" />
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
            <a href="tel:+237699391316" target="_blank">
              Tel : +237683 079 785</a
            >
          </p>
          <p>
            <a
              href="https://wa.link/wrxet8"
              rel="noopener noreferrer"
              target="_blank"
              >whatsapp : +237679 450 640</a
            >
          </p>
          <p>
            <a
              href="mailto:biscamcleaning@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >Email: biscamcleaning@gmail.com</a
            >
          </p>
          <button>
            <a
              href="http://wa.link/wrxet8"
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
  </main>
</template>
<script setup>
import codesrc from "assets/QR_CODES/cleaning-agency-code.png";

const stickyHeader = ref(false);

if (process.client) {
  window.addEventListener("scroll", () => {
    stickyHeader.value = true ? window.scrollY > 0 : false;
  });
}
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100vw;
  height: 90vh;
  position: relative;
  background: url(../assets/flight/cleaning-equipments-1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  .blur-wrapper {
    opacity: 0.5;
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
    position: relative;
    h1 {
      font: 800 60px "Montserrat", "Nunito Sans", sans-serif;
      letter-spacing: 1px;
      color: white;
      text-transform: uppercase;
      text-align: left;
      padding: 0;
      margin: 0;
      position: relative;
      @media screen and (max-width: 768px) {
        font-size: 40px;
        @media screen and (max-width: 500px) {
          font-size: 35px;
          line-height: 60px;
          @media screen and (max-width: 420px) {
            text-align: center;
          }
        }
      }
    }

    p {
      text-align: left;
      color: white;
      text-transform: capitalize;
      padding: 10px;
      position: relative;
      letter-spacing: 1px;
      @media screen and (max-width: 420px) {
        text-align: center;
      }
    }

    button {
      width: 200px;
      height: 50px;
      background: rgb(241, 162, 42);
      border: none;
      border-radius: 4px;
      position: relative;

      a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        font: 600 18px "Nunito Sans", sans-serif;
      }
      @media screen and (max-width: 420px) {
        margin: 20px auto;
        width: 90%;
      }
    }
    @media screen and (max-width: 768px) {
      width: 95%;
      padding-left: 2%;
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
    @media screen and (max-width: 768px) {
      position: absolute;
      right: 1%;
      top: 30%;
      width: 60%;
    }
  }
}
.navbar.changeBg {
  box-shadow: 0 8px 18px 2px rgb(213, 212, 212);
}

@keyframes move {
  from {
    transform: translateX(-10%);
  }

  to {
    transform: translateX(10%);
  }
}

.about-div {
  width: 100%;
  height: fit-content;

  padding: 20px 10px;

  .about-wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    .content {
      width: 60%;
      height: fit-content;

      h1 {
        padding: 20px;
        text-align: left;
        text-decoration: underline;
        text-transform: uppercase;
        color: rgb(238, 146, 9);
        font: 800 50px "Montserrat", "Nunito Sans", sans-serif;
        @media screen and (max-width: 400px) {
          font-size: 35px;
        }
      }

      p {
        font: 500 17px/30px "Poppins", sans-serif;
        text-align: left;
        padding: 10px 20px;
      }
    }

    .about-img {
      width: 40%;
      height: fit-content;

      img {
        width: 90%;
        height: auto;
      }
    }
    @media screen and (max-width: 600px) {
      flex-direction: column-reverse;
      .content,
      .about-img {
        width: 100%;

        h1,
        p {
          text-align: center;
        }
      }
    }
  }
}

.section {
  width: 100%;
  height: fit-content;
  background: url(../assets/flight/cleaning-equipmens-2.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  position: relative;
  padding: 30px 0;

  .blur-wrapper {
    opacity: 0.4;
  }

  h2 {
    padding: 20px;
    text-transform: capitalize;
    font: 600 30px "Nunito Sans", sans-serif;
    position: relative;

    span {
      color: orange;
      text-transform: uppercase;
      padding: 0 5px;
      font-size: 1.2em;
    }
    @media screen and (max-width: 400px) {
      font-size: 24px;
    }
  }

  .image-wrapper {
    width: 300px;
    height: 300px;
    border-radius: 100%;
    border: 4px solid rgb(222, 84, 4);
    outline: 6px solid rgb(209, 134, 3);
    overflow: hidden;
    margin: 10px auto;
    position: relative;

    .blur-wrapper {
      display: none;
    }

    img {
      width: auto;
      height: 100%;
      cursor: pointer;
    }
    @media screen and (max-width: 400px) {
      width: 200px;
      height: 200px;
    }
  }

  &:hover {
    h2 {
      color: white;
    }

    .blur-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.6;

      a {
        text-decoration: none;
        width: max-content;
        height: max-content;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        background: white;
        color: rgb(182, 128, 2);
        position: relative;
      }
    }

    .image-wrapper {
      border-color: rgb(207, 137, 8);
      outline-color: white;

      .blur-wrapper {
        cursor: pointer;
      }
    }

    img {
      transform: scale(1.1);
    }
  }
}

.display-div {
  width: 100%;
  height: 90vh;

  .display-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-wrapper {
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        cursor: pointer;
      }
    }
  }
}

.services-div {
  width: 100%;
  height: 100%;
  padding: 30px 0;

  h1 {
    padding: 20px;
    color: rgb(238, 146, 9);
    font: 700 40px "Montserrat", "Nunito Sans", sans-serif;
    text-align: center;
    text-transform: uppercase;
    width: 90%;
    margin: 10px auto;
  }

  .flex-div-content {
    position: relative;
    overflow: hidden;

    .blur-wrapper {
      overflow: hidden;
      opacity: 0.9;
      background: black;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
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

.address-container {
  background: url(../assets/flight/office-cleaning.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>