<template>
  <header>
    <div :class="[{ sticky: stickyHeader }, 'header-wrapper']">
      <div class="logo-wrapper">
        <div class="logo-image-wrapper" @click="($event) => navigateTo('/')">
          <img src="../assets/biscam-logo.png" alt="" />
        </div>
      </div>
      <div class="header-wrapper-content">
        <div class="header-wrapper-content-services">
          <div class="header-wrapper-content-services-service lg">
            <button class="header-route">
              <NuxtLink to="/" class="route">Home</NuxtLink>
            </button>
          </div>
          <div class="header-wrapper-content-services-service lg">
            <button class="header-route">
              <NuxtLink to="/car-repairs" class="route"> car repair </NuxtLink>
            </button>
          </div>
          <div class="header-wrapper-content-services-service lg">
            <button class="header-route">
              <NuxtLink to="/maritime" class="route"> maritime </NuxtLink>
            </button>
          </div>
          <div class="header-wrapper-content-services-service lg">
            <button class="header-route">
              <NuxtLink to="/flight" class="route"> flight </NuxtLink>
            </button>
          </div>
          <div class="header-wrapper-content-services-service lg">
            <button class="header-route">
              <NuxtLink
                to="/cleaning-agency"
                class="route"
                title="Biscam cleaning agency"
              >
                cleaning agency
              </NuxtLink>
            </button>
          </div>
          <div class="header-wrapper-content-services-service lg">
            <button class="header-route">
              <NuxtLink
                to="/Spare-Part"
                class="route"
                title="Biscam car spare parts"
              >
                spare part
              </NuxtLink>
            </button>
          </div>
          <div class="menu-button-wrapper">
            <button @click="($event) => (menuState = true)">
              <i class="fa-solid fa-bars-staggered" v-if="!menuState"></i>
              <i class="fa-solid fa-xmark" v-else></i>
            </button>
          </div>
          <div class="header-wrapper-content-services-service">
            <button
              class="header-route special"
              @click="($event) => navigateTo('/appointment')"
            >
              book appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
const menuState = useMenuState();
const stickyHeader = ref(false);

if (process.client) {
  window.addEventListener("scroll", () => {
    stickyHeader.value = true ? window.scrollY > 0 : false;
  });
}
</script>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: fit-content;
  padding: 0;
  margin: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .header-wrapper {
    width: 100%;
    height: 13vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;

    .logo-wrapper {
      width: 13%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;

      .logo-image-wrapper {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        overflow: hidden;
        background: white;
        cursor: pointer;

        img {
          height: 90%;
          width: auto;
        }

        @media screen and (max-width: 1000px) {
          width: 50px;
          height: 50px;
        }
      }

      @media screen and (max-width: 790px) {
        width: 30%;
      }
    }

    .header-wrapper-content {
      width: 85%;
      height: 100%;
      padding: 0;
      padding-right: 3%;

      button.header-route {
        background: inherit;
        border: none;
        width: 100%;
        height: 100%;
        display: block;
        margin: 0;
        position: relative;
        overflow: hidden;

        a.route {
          text-decoration: none;
          color: rgb(246, 247, 249);
          font-weight: 600;
          font-size: 14px;
          text-transform: capitalize;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Montserrat", "Nunito Sans", sans-serif;
          position: relative;

          &:hover {
            color: rgb(227, 172, 21);
            border: none;
            border-bottom: 1px solid rgb(183, 143, 10);
          }

          @media screen and (max-width: 1025px) {
            font-size: 11px;
          }
        }

        a.router-link-active.router-link-exact-active {
          color: rgb(233, 175, 14);
          padding: 5px;
          border-bottom: 2px solid rgb(250, 170, 20);
        }

        @keyframes hovering {
          from {
            width: 0;
          }

          to {
            width: 100%;
          }
        }
      }

      .header-route.special {
        background: rgb(230, 150, 2);
        border-radius: 4px;
        height: 100%;
        padding: 5px 10px;
        color: white;
        text-transform: capitalize;
        font-family: "Montserrat", "Nunito Sans", sans-serif;

        &:hover {
          background: rgb(10, 35, 83);

          &::before {
            content: "";
            width: 100%;

            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgb(207, 122, 2);
            animation: background_slideX 1s 1 alternate forwards;
          }
        }

        @media screen and (max-width: 1000px) {
          background: transparent;
          color: rgb(255, 255, 255);
          font-size: 1.1em;

          @media screen and (max-width: 500px) {
            width: max-content;
            height: max-content;
            padding: 10px 20px;
            font-size: 15px;
          }
        }
      }

      @keyframes changeBg {
        from {
          background: white;
        }

        to {
          background: rgb(11, 57, 90);
        }
      }

      .header-wrapper-content-services {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 15px;

        .header-wrapper-content-services-service {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          width: max-content;
          padding: 5px;
          height: 70%;
        }

        .menu-button-wrapper {
          height: 100%;

          button {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border: none;
            background: transparent;

            i {
              font-size: 30px;
              color: rgb(255, 255, 255);
            }

            &:hover {
              color: rgb(233, 198, 1);
            }
          }

          @media screen and (max-width: 1000px) {
            display: block;

            @media screen and (max-width: 768px) {
              width: 30%;
            }
          }
        }

        @media screen and (max-width: 1000px) {
          flex-direction: row-reverse;
          justify-content: space-between;
          padding-right: 5%;

          .header-wrapper-content-services-service.lg {
            display: none;
          }
        }
      }

      @media screen and (max-width: 1000px) {
        width: 80%;

        @media screen and (max-width: 790px) {
          width: 60%;

          @media screen and (max-width: 400px) {
            width: 75%;
          }
        }
      }
    }
    @media screen and (max-width: 1000px) {
      background: rgb(216, 141, 2);
    }
  }

  .header-wrapper.sticky {
    width: 100%;
    height: 13vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 0px 6px 2px rgb(1, 18, 53);
    animation: slide_down 0.4s 1 alternate forwards;

    .logo-wrapper {
      width: 13%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(15, 48, 109);

      .logo-image-wrapper {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        overflow: hidden;
        background: white;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }

        @media screen and (max-width: 1000px) {
          width: 50px;
          height: 50px;
        }
      }

      @media screen and (max-width: 790px) {
        width: 30%;
      }
    }

    .header-wrapper-content {
      width: 85%;
      height: 100%;
      padding: 0;
      padding-right: 3%;

      button.header-route {
        background: inherit;
        border: none;
        width: 100%;
        height: 100%;
        display: block;
        margin: 0;
        position: relative;
        overflow: hidden;

        a.route {
          text-decoration: none;
          color: rgb(11, 30, 63);
          font-weight: 600;
          font-size: 14px;
          text-transform: capitalize;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Montserrat", "Nunito Sans", sans-serif;
          position: relative;

          &:hover {
            color: rgb(227, 172, 21);
            border: none;
            border-bottom: 1px solid rgb(183, 143, 10);
          }

          @media screen and (max-width: 1025px) {
            font-size: 11px;
          }
        }

        a.router-link-active.router-link-exact-active {
          color: rgb(233, 175, 14);
          padding: 5px;
          border-bottom: 2px solid rgb(250, 170, 20);
        }

        @keyframes hovering {
          from {
            width: 0;
          }

          to {
            width: 100%;
          }
        }
      }

      .header-route.special {
        background: rgb(241, 162, 42);
        border-radius: 4px;
        height: 100%;
        padding: 5px 10px;
        color: white;
        text-transform: capitalize;
        font-family: "Montserrat", "Nunito Sans", sans-serif;

        &:hover {
          background: rgb(10, 35, 83);

          &::before {
            content: "";
            width: 100%;

            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgb(241, 162, 42);
            animation: background_slideX 1s 1 alternate forwards;
          }
        }

        @media screen and (max-width: 1000px) {
          background: transparent;
          color: rgb(255, 255, 255);
          font-size: 1.1em;

          @media screen and (max-width: 500px) {
            width: max-content;
            height: max-content;
            padding: 10px 20px;
            font-size: 15px;
          }
        }
      }

      @keyframes changeBg {
        from {
          background: white;
        }

        to {
          background: rgb(11, 57, 90);
        }
      }

      .header-wrapper-content-services {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 15px;

        .header-wrapper-content-services-service {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          width: max-content;
          padding: 5px;
          height: 70%;
        }

        .menu-button-wrapper {
          height: 100%;

          button {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border: none;
            background: transparent;

            i {
              font-size: 30px;
              color: rgb(67, 66, 66);
            }

            &:hover {
              color: rgb(16, 37, 129);
            }
          }

          @media screen and (max-width: 1000px) {
            display: block;

            button i {
              color: white;
            }

            @media screen and (max-width: 768px) {
              width: 30%;
            }
          }
        }

        @media screen and (max-width: 1000px) {
          flex-direction: row-reverse;
          justify-content: space-evenly;
          padding-right: 5%;

          .header-wrapper-content-services-service.lg {
            display: none;
          }
        }
      }

      @media screen and (max-width: 1000px) {
        width: 80%;

        @media screen and (max-width: 790px) {
          width: 60%;

          @media screen and (max-width: 400px) {
            width: 75%;
          }
        }
      }
    }
    @media screen and (max-width: 1000px) {
      background: rgb(216, 141, 2);
    }
  }
  @keyframes slide_down {
    from {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(0);
    }
  }
}
</style>
