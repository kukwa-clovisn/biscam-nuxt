<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-links">
        <div class="left-div">
          <h2>connected with us on:</h2>
        </div>
        <div class="right-div">
          <div class="right-div-wrapper">
            <div class="icon"><i class="fa-brands fa-whatsapp"></i></div>
            <div class="icon"><i class="fa-brands fa-facebook"></i></div>
            <div class="icon"><i class="fa-brands fa-instagram"></i></div>
            <div class="icon"><i class="fa-brands fa-whatsapp"></i></div>
          </div>
        </div>
      </div>
      <div class="footer-content">
        <div class="footer-content-wrapper">
          <div class="about-container">
            <h2>biscam investment sarl</h2>
            <p>
              Biscam companies with multi purpose services like flight ticket
              booking, cleaning services, car spare part purchase, car repairs,
              maritime services and more.
            </p>
          </div>
          <div class="links-container">
            <h2>useful links</h2>

            <div class="links">
              <NuxtLink to="about-us">about us</NuxtLink>
              <NuxtLink to="contact-page">contact us</NuxtLink>
            </div>
            <div class="tasks">
              <button @click="($event) => (appointmentState = true)">
                book an appointment
              </button>
            </div>
          </div>
          <div class="pages-container">
            <h2>pages</h2>
            <div class="pages">
              <NuxtLink to="/">Home</NuxtLink>
              <NuxtLink to="car-repairs">car repairs</NuxtLink>
              <NuxtLink to="maritime">maritime</NuxtLink>
              <NuxtLink to="flight">flight</NuxtLink>
              <NuxtLink to="spare-part">spare part</NuxtLink>
              <NuxtLink to="cleaning-agency">cleaning agency</NuxtLink>
            </div>
          </div>

          <div class="email-container">
            <h2>contacts & emails</h2>

            <div class="contacts">
              <div class="contact">
                <h3>car repair</h3>
                <div class="links">
                  <a href="https://wa.link/rt49uv"
                    ><i class="fa-brands fa-whatsapp"></i> +237677 387 714</a
                  >
                  <a href="tel:+237699391316"
                    ><i class="fa-solid fa-phone"></i> +237 699 391 316</a
                  >
                  <a href="mailto:garagebiscam@gmail.com"
                    ><i class="fa-solid fa-envelope"></i>
                    garagebiscam@gmail.com</a
                  >
                </div>
              </div>
              <div class="contact">
                <h3>flight</h3>
                <div class="links">
                  <a href="https://wa.link/290wme"
                    ><i class="fa-brands fa-whatsapp"></i> +237654213803</a
                  >
                  <a href="tel:+237683079785"
                    ><i class="fa-solid fa-phone"></i> +237683079785</a
                  >
                  <a href="mailto:biscamflight@gmail.com"
                    ><i class="fa-solid fa-envelope"></i>
                    biscamflight@gmail.com</a
                  >
                </div>
              </div>
              <div class="contact">
                <h3>spare part</h3>
                <div class="links">
                  <a href="https://wa.link/rt49uv"
                    ><i class="fa-brands fa-whatsapp"></i> +237677 387 714</a
                  >
                  <a href="tel:++237699391316"
                    ><i class="fa-solid fa-phone"></i> +237 699 391 316</a
                  >
                  <a href="mailto:garagebiscam@gmail.com"
                    ><i class="fa-solid fa-envelope"></i>
                    garagebiscam@gmail.com</a
                  >
                </div>
              </div>
              <div class="contact">
                <h3>maritime</h3>
                <div class="links">
                  <a href="https://wa.link/wrxet8"
                    ><i class="fa-brands fa-whatsapp"></i> +237679450640</a
                  >
                  <a href="tel:+237683079785"
                    ><i class="fa-solid fa-phone"></i> +237683079785</a
                  >
                  <a href="mailto:biscamcleaning@gmail.com"
                    ><i class="fa-solid fa-envelope"></i>
                    biscamcleaning@gmail.com</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copy-right">
        <p>
          <span>YUHAZON COMPANY</span> &copy;Copyright 2023 All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
const appointmentState = useAppointmentState();
</script>
<style lang="scss" scoped>
footer {
  width: 100vw;
  height: fit-content;
  background: rgb(15, 48, 109);

  .footer-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .footer-links {
      width: 100%;
      height: fit-content;
      padding: 15px 0;
      background: rgb(217, 142, 2);
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-div {
        width: max-content;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        h2 {
          text-transform: capitalize;
          color: white;
          padding-left: 20px;
          font: 500 15px "Montserrat", "Nunito Sans", sans-serif;

          @media screen and (max-width: 500px) {
            font-size: 12px;

            @media screen and (max-width: 390px) {
              padding-left: 10px;
            }
          }
        }
      }

      .right-div {
        width: fit-content;
        height: 100%;
        padding-right: 20px;
        .right-div-wrapper {
          width: max-content;
          height: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          gap: 15px;

          .icon {
            width: 30px;
            height: 30px;
            border-radius: 100%;
            border-radius: 100%;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            i {
              font-size: 13px;
              color: rgb(15, 48, 109);
            }

            &:hover {
              transform: translateY(-3px);
              i {
                transform: scale(1.1);
              }
            }
            @media screen and (max-width: 390px) {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }
    .footer-content {
      width: 100%;
      height: fit-content;

      .footer-content-wrapper {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 25px;
        padding-bottom: 10px;
        a:hover {
          color: rgb(255, 171, 17);
        }

        .about-container {
          width: 30%;
          height: fit-content;

          h2 {
            text-align: left;
            text-transform: uppercase;
            color: white;
            padding: 10px 0;
            font: 700 20px "Montserrat", "Nunito Sans", sans-serif;
          }
          p {
            text-align: left;
            color: rgb(230, 230, 230);
            font-size: 15px;
            line-height: 27px;
            letter-spacing: 1px;
          }
          @media screen and (max-width: 800px) {
            width: 42%;

            @media screen and (max-width: 620px) {
              width: 90%;
            }
          }
        }

        .pages-container {
          width: 25%;
          height: fit-content;

          h2 {
            color: white;
            text-transform: capitalize;
            text-align: left;
            padding: 10px 0;
          }

          .pages {
            width: 100%;
            height: fit-content;
            a {
              text-decoration: none;
              color: rgb(241, 240, 240);
              text-transform: capitalize;
              display: block;
              width: 100%;
              padding: 10px 0;
              text-align: left;
              font-size: 11px;
            }
          }
          @media screen and (max-width: 800px) {
            width: 90%;
            h2 {
              text-align: center;
            }
            .pages {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;

              a {
                width: max-content;
                height: max-content;
                padding: 10px;
              }
            }
            @media screen and (max-width: 620px) {
              width: 96%;
            }
          }
        }

        .links-container {
          width: 25%;
          height: fit-content;

          h2 {
            color: white;
            text-transform: capitalize;
            text-align: left;
            padding: 10px 0;
          }
          .links {
            width: 100%;
            height: fit-content;

            a {
              text-decoration: none;
              color: white;
              text-transform: capitalize;
              text-align: left;
              display: block;
              padding: 10px 0;
            }
          }

          .tasks {
            width: 100%;
            height: fit-content;

            button {
              width: max-content;
              height: max-content;
              border-radius: 4px;
              background: white;
              border: none;
              display: block;
              margin: 20px 0;
              text-transform: capitalize;
              font-weight: 600;
              padding: 10px;
            }
          }
          @media screen and (max-width: 800px) {
            width: 42%;
          }
          @media screen and (max-width: 620px) {
            width: 90%;
          }
        }

        .email-container {
          width: 95%;
          height: fit-content;
          border-top: 1px solid rgb(214, 212, 212);

          h2 {
            color: white;
            text-transform: capitalize;
            text-align: left;
            padding: 10px 0;
          }

          .contacts {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-wrap: wrap;

            .contact {
              width: 24%;
              height: fit-content;

              h3 {
                color: white;
                padding: 10px 0;
                text-align: left;
                text-transform: capitalize;
              }
              .links {
                width: 100%;
                height: fit-content;

                a {
                  text-decoration: none;
                  color: white;
                  text-align: left;
                  display: block;
                  padding: 10px 0;
                  font-size: 14px;
                  i {
                    padding-right: 10px;
                  }

                  &:last-child {
                    font-size: 11px;
                  }
                }
              }
              @media screen and (max-width: 800px) {
                width: 44%;
                @media screen and (max-width: 520px) {
                  width: 90%;

                  .links {
                    a {
                      font-size: 17px;

                      &:last-child {
                        font-size: 15px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .footer-copy-right {
      width: 100%;
      background: rgb(13, 40, 91);
      height: fit-content;

      p {
        color: white;
        font-weight: 300;
        padding: 10px;
        text-align: center;

        @media screen and (max-width: 550px) {
          font-size: 11px;
        }
      }
    }
  }
}
</style>