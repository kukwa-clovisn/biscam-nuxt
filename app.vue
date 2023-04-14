<template>
  <main id="main">
    <NuxtLayout name="app-header" />

    <div id="componentContainer" @click="openchat = false">
      <NuxtPage data-aos="slide-left" />
    </div>

    <chatbox />

    <popchat />
    <NuxtLayout name="app-footer" />
    <div
      :class="[
        { active: menuState },
        { inactive: !menuState },
        'menu-container',
      ]"
    >
      <div class="blur-wrapper" @click="($event) => (menuState = false)"></div>
      <div
        :class="[
          { 'is-active': menuState },
          { inactive: !menuState },
          'menu-wrapper',
        ]"
      >
        <button class="close" @click="($event) => (menuState = false)">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="menu-header">
          <div class="logo">
            <img
              @click="($event) => navigateTo('/')"
              src="./assets/flight/logo_biscam-transparent.png"
              alt=""
            />
          </div>
          <p>Book and appointment with us today.</p>
          <button
            class="appointment"
            @click="
              ($event) => {
                navigateTo('/appointment'), (menuState = false);
              }
            "
          >
            book an appointment now!
          </button>
        </div>

        <div class="services">
          <h2>Browse our services</h2>
          <div class="service-wrapper">
            <NuxtLink to="/" @click="($event) => (menuState = false)"
              >home <i class="fa-solid fa-arrow-right"></i
            ></NuxtLink>
            <NuxtLink to="/car-repairs" @click="($event) => (menuState = false)"
              >car repair <i class="fa-solid fa-arrow-right"></i
            ></NuxtLink>
            <NuxtLink to="/maritime" @click="($event) => (menuState = false)"
              >maritime <i class="fa-solid fa-arrow-right"></i
            ></NuxtLink>
            <NuxtLink to="/flight" @click="($event) => (menuState = false)"
              >flight <i class="fa-solid fa-arrow-right"></i
            ></NuxtLink>
            <NuxtLink
              to="/cleaning-agency"
              @click="($event) => (menuState = false)"
              >cleaning agency <i class="fa-solid fa-arrow-right"></i
            ></NuxtLink>
            <NuxtLink to="/spare-part" @click="($event) => (menuState = false)"
              >spare part <i class="fa-solid fa-arrow-right"></i
            ></NuxtLink>
          </div>
          <hr />
          <h2><i class="fa-solid fa-phone"></i> contact us</h2>
          <div class="service-wrapper">
            <NuxtLink to="/about-us" @click="($event) => (menuState = false)"
              >about us <i class="fa-solid fa-arrow-right"></i
            ></NuxtLink>
            <NuxtLink
              to="/contact-page"
              @click="($event) => (menuState = false)"
              >contact us <i class="fa-solid fa-arrow-right"></i
            ></NuxtLink>
          </div>
          <h2>follow us on:</h2>
          <div class="media-wrapper">
            <a href="#" class="link" title="Give us a call"
              ><i class="fa-solid fa-phone"></i
            ></a>
            <a href="#" class="link" title="Chat us on whatsapp"
              ><i class="fa-brands fa-whatsapp"></i
            ></a>
            <a href="#" class="link"
              ><i class="fa-brands fa-facebook" title="Follow on facebook"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import emailjs from "@emailjs/browser";
useHead({
  title: "Biscam Investment Sarl",
  viewport: "width:device-width, initial-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content:
        "Biscam companies with multi purpose services like flight ticket booking, cleaning services, car spare part purchase, car repairs, maritime services and more.",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/logo.png",
    },
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      rel: "stylesheet",
      integrity:
        "sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:wght@200;300;400;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
      rel: "stylesheet",
    },
  ],
  script: [
    {
      type: "text/javascript",
      src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",
    },
  ],
});
const openchat = openChat();
(function () {
  emailjs.init("GnFR9bf1unlodMFZG");
})();

const menuState = useMenuState();
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,400;1,700&family=Grand+Hotel&family=Jacques+Francois&family=Jacques+Francois+Shadow&family=Noto+Sans:wght@100;300;400;600;700;900&family=Nunito+Sans:ital,wght@0,300;0,600;0,700;0,900;1,300;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&family=Russo+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

#main {
  width: 100vw;
  height: fit-content;
  overflow: hidden;
  overflow-y: scroll;

  header {
    width: 100vw;
    height: fit-content;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  #componentContainer {
    width: 100vw;
    height: fit-content;
    position: relative;
    top: 0;
    left: 0;
  }

  .menu-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    .blur-wrapper {
      background: rgb(44, 44, 44);
      opacity: 0.7;
      cursor: pointer;
    }

    .menu-wrapper {
      width: 28vw;
      height: 100vh;
      background: rgb(9, 31, 72);
      position: relative;
      padding-left: 3%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .close {
        width: 100px;
        height: 40px;
        position: absolute;
        top: 2%;
        right: 3%;
        border: none;
        background: transparent;
        font-size: 25px;
        color: rgb(237, 236, 236);

        i {
          color: white;
        }

        &:hover {
          transform: scale(1.2) rotateZ(-180deg);
          color: rgb(217, 144, 7);
        }
      }

      .menu-header {
        width: 95%;
        height: 35vh;
        padding-top: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
        border-bottom: 2px solid orange;

        .logo {
          width: 70px;
          height: 70px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          border-radius: 100%;

          img {
            width: 70px;
            height: 70px;
            object-fit: contain;
            cursor: pointer;
          }
        }

        p {
          font-size: 12px;
          text-align: center;
          color: rgb(252, 249, 242);

          @media screen and (max-width: 400px) {
            margin: 3px 0;
          }
        }

        .appointment {
          border: none;
          background: rgb(231, 174, 3);
          color: white;
          width: 80%;
          height: 45px;
          text-transform: uppercase;
          border-radius: 4px;
          overflow: hidden;
          position: relative;

          &:hover {
            background: rgb(21, 50, 105);

            &::before {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background: rgb(183, 137, 2);
              border-radius: 0 30px 30px 0;
              animation: background_slideX 1s 1 linear alternate forwards;
            }
          }

          @media screen and (max-width: 1000px) {
            width: 90%;
          }
        }

        @media screen and (max-width: 1000px) {
          height: 36vh;
        }
      }

      .services {
        width: 100%;
        height: 65vh;
        padding: 10px 0 20px 0;
        overflow: hidden;
        overflow-y: scroll;
        background: rgb(9, 31, 72);

        h2 {
          padding: 10px 0;
          text-transform: uppercase;
          text-align: left;
          color: rgb(239, 153, 25);
          font-size: 20px;
          @media screen and (max-width: 1000px) {
            font-size: 17px;
            padding: 3px 0;
            padding-left: 10px;
          }
        }

        .service-wrapper {
          width: 100%;
          height: fit-content;

          a {
            display: block;
            width: 100%;
            height: fit-content;

            text-decoration: none;
            text-transform: capitalize;
            text-align: left;
            padding: 10px 15px;
            color: white;

            i {
              visibility: hidden;
            }

            &:hover {
              color: rgb(251, 184, 39);

              i {
                visibility: visible;
              }
            }
          }
        }

        .media-wrapper {
          width: 90%;
          height: fit-content;
          display: flex;
          margin: 5px auto;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;

          .link {
            width: 50px;
            height: 50px;
            border-radius: 100%;
            background: rgb(220, 145, 5);
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;

            i {
              color: white;
              font-size: 25px;
            }
          }
        }

        @media screen and (max-width: 1000px) {
          height: 64vh;
        }
      }

      @media screen and (max-width: 1000px) {
        width: 40vw;

        @media screen and (max-width: 790px) {
          width: 50vw;

          @media screen and (max-width: 610px) {
            width: 100%;
          }
        }
      }
    }

    .menu-wrapper.is-active {
      animation: menu_active 0.5s 1 linear alternate forwards;
    }
    .menu-wrapper.inactive {
      animation: menu_inactive 0.5s linear alternate forwards;
    }
  }
  .menu-container.inactive {
    animation: menu_inactive 0.5s linear alternate forwards;

    .blur-wrapper {
      animation: disappear 0.4s linear alternate forwards;
    }
  }

  @keyframes menu_active {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0);
    }
  }

  @keyframes menu_inactive {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-200%);
      display: none;
    }
  }
  .contact-container {
    width: 100%;
    height: fit-content;
    position: relative;
  }
}
@keyframes disappear {
  to {
    transform: translateX(100%);
    display: none;
  }
}

// custom styles that go for all tags with same class name
.custom-header-2 {
  font-size: 45px;
  text-transform: capitalize;
  font-weight: 700;
  color: white;
  text-align: center;
  padding: 30px auto;
  position: relative;
  line-height: 70px;
}

.blur-wrapper {
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  z-index: 0.5;
  position: absolute;
  top: 0;
  left: 0;
}

.flex-div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px auto;
  width: 90%;
  gap: 40px 30px;

  .flex-div-content {
    background: rgb(255, 255, 255);
    width: 300px;
    height: 430px;
    padding: 20px;
    box-shadow: 0 0 18px 7px #dedede;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    .flex-div-content-top {
      width: 100%;
      height: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .flex-div-content-top-img {
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 100%;
        border: 4px solid #313131;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }

    .flex-div-content-bottom {
      height: 65%;
      width: 100%;
      padding: 10px;
      position: relative;

      h2 {
        padding: 10px;
        text-align: center;
        text-transform: capitalize;
        font: 700 20px "Montserrat", "Nunito Sans", sans-serif;
        color: #313131;
      }

      p {
        width: 100%;
        color: rgb(48, 47, 47);
        font-weight: 400;
        font-size: 15px;
        line-height: 23px;
        text-align: center;
      }

      button {
        width: 150px;
        height: 45px;
        border: none;
        cursor: pointer;
        margin: 10px auto;
        background: rgb(13, 66, 97);
        border-radius: 5px;
        color: white;
        text-transform: capitalize;

        a {
          width: 100%;
          height: 100%;
          text-decoration: none;
          text-transform: capitalize;

          color: white;
        }
      }
    }

    &:hover {
      border: 3px solid rgb(253, 173, 24);
      box-shadow: none;
      background: rgb(255, 252, 246);
      transform: translateY(-10px);

      .flex-div-content-top,
      .flex-div-content-bottom {
        .flex-div-content-top-img {
          border-color: rgb(253, 173, 24);
        }

        h2 {
          color: rgb(253, 173, 24);
        }

        button {
          background: rgb(212, 130, 6);
        }
      }
    }

    @media screen and (max-width: 900px) {
      width: 48%;

      @media screen and (max-width: 500px) {
        width: 90%;
        height: fit-content;
      }
    }
  }
}

.address-container {
  width: 100%;
  min-height: 60vh;
  position: relative;

  .blur-wrapper {
    background: rgb(212, 115, 4);
    opacity: 0.8;
  }

  .address-wrapper {
    padding: 30px auto;
    width: 100%;
    height: fit-content;

    h1 {
      padding: 30px 20px;
      font: 700 50px/90px "Poppins", sans-serif;
      text-align: center;
      text-transform: uppercase;
      color: white;
      position: relative;
      @media screen and (max-width: 768px) {
        font-size: 40px;
        @media screen and (max-width: 500px) {
          font-size: 30px;
        }
      }
    }

    .content {
      width: 90%;
      margin: 10px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      position: relative;

      .address {
        width: 45%;
        height: fit-content;

        h2 {
          color: white;
          text-transform: uppercase;
          padding: 10px;
          text-align: left;
        }

        p {
          padding: 6px 10px;
          text-transform: capitalize;
          text-align: left;
          color: rgb(22, 21, 21);

          a {
            text-decoration: none;
            color: rgb(22, 21, 21);
          }
        }

        @media screen and (max-width: 500px) {
          width: 100%;

          h2,
          p {
            text-align: center;
          }
        }
      }
      @media screen and (max-width: 550px) {
        flex-direction: column;
        .address {
          width: 90%;

          h2,
          p {
            text-align: center;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: fit-content;
    padding: 30px 0;
  }
}

.hover-animation {
  overflow: hidden;
  position: relative;

  &:hover {
    background: rgb(9, 31, 72);

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgb(249, 163, 42);
      animation: background_slideY 0.6s 1 linear alternate forwards;
    }
  }
}

@keyframes popUp {
  from {
    transform: scale(0.1);
  }

  to {
    transform: scale(1);
  }
}

.product-body {
  width: 100%;
  height: fit-content;
  background: rgb(255, 255, 255);

  .product-body-wrapper {
    width: 80%;
    height: fit-content;
    margin: 10px auto;

    .empty-msg {
      font: 700 24px "Monserrat", sans-serif;
      padding: 30px 20px;
      width: 95%;
      margin: 20px auto;

      span {
        text-transform: uppercase;
        color: orange;
        padding: 0 10px;
      }

      a {
        width: max-content;
        height: max-content;
        color: rgb(221, 160, 7);
        text-transform: uppercase;
      }
    }

    .category-header {
      padding: 20px;
      text-align: left;
      text-transform: uppercase;
      font: 600 30px "Montserrat", "Nunito Sans", sans-serif;

      span {
        color: rgb(243, 164, 18);
        border-bottom: 3px solid rgb(228, 151, 8);
      }
    }

    .product-intro {
      padding: 0 20px;
      text-transform: capitalize;
      text-align: left;
    }

    .detail-products {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 40px 10px;
      margin: 30px auto;

      .product {
        width: 300px;
        height: 300px;
        padding-top: 0;
        padding-bottom: 20px;
        position: relative;
        border-radius: 1px;
        cursor: pointer;
        transition: all 0.3s ease-in;
        box-shadow: 0 0 10px 5px rgb(234, 234, 234);

        .wrapper {
          width: 100%;
          height: 300px;
          position: relative;

          .blur-wrapper {
            display: none;
            background: rgb(0, 0, 0);
          }

          .image {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .info {
            position: relative;
            width: 100%;
            height: fit-content;
            display: none;
            justify-content: center;
            align-items: center;
            gap: 10px;

            a {
              text-decoration: none;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0;
              font: 700 15px "Poppins", sans-serif;
              width: 50px;
              height: 50px;
              color: rgb(19, 16, 13);
              box-shadow: 0 0 10px 7px rgb(225, 224, 224);
              background: white;
              transition: all 0.3s ease;
              border-radius: 100%;

              &:hover {
                background: rgb(235, 154, 3);
                color: white;

                i {
                  transform: scale(1.1);
                }
              }
            }
          }
        }

        .details {
          width: 100%;
          padding-bottom: 10px;
          display: none;

          h2 {
            text-transform: capitalize;
            text-align: center;
            font: 500 21px Montserrat, "Nunito Sans", sans-serif;
            padding: 10px 0;
          }

          .stars {
            width: 90%;
            height: fit-content;
            margin: 8px auto;
            display: flex;
            justify-content: center;
            align-items: center;

            i {
              font-size: 12px;
              color: rgb(248, 194, 95);
              cursor: pointer;
            }
          }

          a {
            text-decoration: none;
            text-transform: capitalize;
            display: block;
            margin: 10px auto;
            font: 600 16px "Poppins", sans-serif;
            width: max-content;
            height: max-content;
            padding: 10px 30px;
            color: rgb(19, 16, 13);
            transition: all 0.3s ease;
            border-radius: 2px;
            border: none;
            background: rgb(238, 184, 7);

            &:hover {
              color: white;
            }
          }

          @media screen and (max-width: 600px) {
            h2 {
              font-size: 30px;
            }

            .stars {
              i {
                font-size: 16px;
              }
            }

            a {
              font-size: 20px;
              padding: 10px;
            }
          }
        }

        &:hover {
          box-shadow: 0 0 16px 9px rgb(213, 212, 211);
          background: rgb(255, 255, 255);
          border: 2px solid rgb(238, 184, 7);

          .wrapper {
            .image {
              position: relative;
              width: 220px;
              height: 220px;
              margin: auto;
              background: white;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 3px dotted rgb(238, 184, 7);
              box-shadow: 0 0 7px 4px rgb(221, 220, 220);
              border-radius: 100%;
              transform: translateY(-100px);

              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                transform: rotateZ(-30deg);
              }
            }
            .info {
              display: flex;
              animation: slideUp 0.5s 1 linear alternate forwards;
            }
          }

          .details {
            display: block;
            animation: detailIn 0.5s ease-in-out forwards;
          }
        }

        @media screen and (max-width: 900px) {
          width: 44%;

          @media screen and (max-width: 600px) {
            width: 90%;
            box-shadow: 0 0 16px 9px rgb(221, 220, 220);
            background: rgb(255, 255, 255);

            .wrapper {
              .image {
                width: 250px;
                height: 250px;
                position: relative;
                margin: auto;
                background: white;
                display: flex;
                justify-content: center;
                align-items: center;

                box-shadow: 0 0 7px 4px rgb(223, 223, 223);
                border-radius: 100%;
                transform: translateY(-100px);

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  transform: rotateZ(-30deg);
                }
              }
              .info {
                display: flex;
                flex-direction: column;
                width: fit-content;
                flex-direction: column;
                position: absolute;
                left: 0;
                top: 1%;

                a {
                  margin: 10px;
                  &:hover {
                    transform: translateX(15px);
                  }
                }
              }
            }

            .details {
              display: block;
              transform: translateY(-165px);
            }
            &:hover {
              .wrapper .info,
              .details {
                animation: none;
              }
            }
          }
        }
      }

      @keyframes slideUp {
        from {
          transform: translateX(-100px);
          visibility: hidden;
        }

        to {
          transform: translateX(0px) translateY(-100px);
          visibility: visible;
        }
      }
      @keyframes detailIn {
        from {
          transform: translateX(-100px);
          visibility: hidden;
        }

        to {
          transform: translateX(0px) translateY(-130px);
          visibility: visible;
        }
      }

      @media screen and (max-width: 768px) {
        gap: 150px 10px;
      }
    }

    @media screen and (max-width: 950px) {
      width: 95%;
    }
  }
}

.move-in-enter-active,
.move-in-leave-active,
.refresh-enter-active,
.refresh-leave-active {
  transition: all 1s ease;
}

.appear-enter-active,
.appear-leave-active {
  opacity: 0;
  transition: all 0.7s ease;
}

.move-in-enter-from {
  transform: translateY(-70vh);
}

.move-in-leave-to {
  transform: translateX(100vw);
}

.appear-enter-to {
  opacity: 0;
}

.refresh-enter-from,
.refresh-in-enter-from {
  transform: translateX(80vw);
}

.slide-in-enter-from {
  transform: translateY(15vh);
}

.refresh-in-enter-active,
.refresh-in-leave-active,
.slide-in-active {
  transition: all 0.3s ease;
}

.refresh-in-leave-to {
  transform: translateX(90vw);
}

.slide-in-leave-to {
  transform: translateY(20vh);
}

::-webkit-scrollbar {
  width: 10px;
  border-radius: 30px;
}

::-webkit-scrollbar-thumb {
  background: rgb(15, 48, 109);
  border-radius: 30px;
}

#__nuxt {
  font-family: "Montserrat", "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: fit-content;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* {
  transition: all 0.3s ease;
  text-align: center;
  font-family: "Montserrat", "Poppins", sans-serif;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: scroll;
}

.cafe-mode {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}

.routes-enter-from {
  transform: translateX(110vw);
}

.routes-enter-active {
  transition: all 1s ease;
}

.routes-enter-to {
  transform: transformX(0);
}

.routes-leave-from {
  transform: transformX(0);
}

.routes-leave-active {
  transition: all 0.5s ease;
}

.routes-leave-to {
  transform: transformX(-110vw);
}

button,
a,
label {
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }

  &:active {
    transform: scale(0.8);
  }
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.NuxtLink-exact-active {
  color: #42b983;
}

@keyframes background_slideX {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes background_slideY {
  from {
    transform: translateY(10%);
  }

  to {
    transform: translateY(-100%);
  }
}

.navbar {
  width: 100%;
  height: 10%;
  background: rgb(15, 48, 109);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .navbar-wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex-wrap: wrap;

    .left-navbar {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        color: white;
        text-transform: capitalize;
      }
    }

    .right-navbar {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .link {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        height: 100%;
        color: white;

        i {
          color: rgb(226, 226, 226);
        }

        a {
          text-decoration: none;
          color: white;
          text-transform: capitalize;
        }

        &:hover {
          color: gold;
          i,
          a {
            color: gold;
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      .left-navbar {
        width: 100%;

        h3 {
          font-size: 14px;
        }
      }
      .right-navbar {
        width: 100%;

        .link {
          a {
            font-size: 11px;

            @media screen and (max-width: 450px) {
              font-size: 8px;
            }
          }
        }
      }
    }
  }
}
.navbar.changeBg {
  background: rgb(241, 162, 42);
  box-shadow: 0 8px 10px 3px rgb(237, 236, 236);
  height: 13vh;
  animation: slide_down 0.5s 1 alternate forwards;
  position: relative;

  .navbar-wrapper {
    .left-navbar h3,
    .right-navbar .link a,
    .right-navbar .link i {
      color: rgb(255, 255, 255);
    }
  }
}

.address-div {
  width: 100%;
  height: fit-content;
  position: relative;
  background: url(./assets/flight/auto-elect-two.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

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
    padding: 30px 0;

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

        @media screen and (max-width: 768px) {
          display: block;
          width: 300px;
          height: 50px;
          font-size: 1.2em;
          margin: 20px auto;
          @media screen and (max-width: 400px) {
            width: 90%;
          }
        }
      }
      @media screen and (max-width: 768px) {
        width: 95%;
        margin: auto;
      }
    }
  }
}
</style>
