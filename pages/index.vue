<template>
  <div class="main">
    <div class="main-shadow">
      <div class="landing-page">
        <div class="slider-div">
          <div class="blur-wrapper"></div>
          <slider :images="HomeViewImages" />
        </div>
        <div class="wrapper">
          <div class="left-wrapper">
            <h2>become our highly esteem customer today</h2>
            <h1>BISCAM INVESTMENT SARL</h1>

            <div class="text-animation">
              <div class="text-wrapper">
                <ul>
                  <li>Biscam sarl is a multi-service company</li>
                  <li>
                    that deals with the sales of cars, spare parts of cars,
                  </li>
                  <li>maritime services, flight services,</li>
                  <li>digital services and printing.</li>
                </ul>
              </div>
            </div>
            <div class="link-wrapper">
              <NuxtLink to="/about-us">READ MORE</NuxtLink>
              <NuxtLink to="/contact-page">contact us</NuxtLink>
            </div>
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
    </div>

    <div class="garage-section">
      <div class="wrapper">
        <h2 class="custom-header-2" data-aos="slide-up">Multi-Brand Garage</h2>
        <p class="desc" data-aos="slide-up">
          This sector of Biscam deals with car maintenance, car renewal and
          ensures a car proper functioning for safety. We deal with cars of
          different ranges like Toyota, Scarlet, Picks, Dinner Rav par etc.
        </p>

        <div class="flex-div">
          <div
            class="flex-div-content"
            data-aos="slide-right"
            @click="$router.push({ path: '/car-repairs' })"
          >
            <div class="flex-div-content-top">
              <div class="flex-div-content-top-img">
                <img
                  src="~/assets/flight/download.jpg"
                  data-aos="fade"
                  alt=""
                />
              </div>
            </div>
            <div class="flex-div-content-bottom">
              <h2>MAINTENANCE</h2>
              <p data-aos="slide-up">
                We offer car maintanance services top norch!
              </p>
              <button>learn more</button>
            </div>
          </div>
          <div
            class="flex-div-content"
            data-aos="fade"
            @click="$router.push({ path: '/car-repairs' })"
          >
            <div class="flex-div-content-top">
              <div class="flex-div-content-top-img">
                <img
                  src="~/assets/flight/car-programming.png"
                  data-aos="fade"
                  alt=""
                />
              </div>
            </div>
            <div class="flex-div-content-bottom">
              <h2>PROGRAMMING</h2>
              <p data-aos="slide-up">
                Let us give your car the programming it deserves with high level
                professionality
              </p>
              <button>learn more</button>
            </div>
          </div>
          <div
            class="flex-div-content"
            data-aos="slide-up"
            @click="$router.push({ path: '/car-repairs' })"
          >
            <div class="flex-div-content-top">
              <div class="flex-div-content-top-img">
                <img
                  src="~/assets/flight/car-wash.jpg"
                  data-aos="fade"
                  alt=""
                />
              </div>
            </div>
            <div class="flex-div-content-bottom">
              <h2>CAR WASHING</h2>
              <p data-aos="slide-up">
                Cleanness builds confidence. Let's build your confidence by
                keeping your car clean and sparkling
              </p>
              <button>learn more</button>
            </div>
          </div>
          <div
            class="flex-div-content"
            data-aos="slide-left"
            @click="$router.push({ path: '/car-repairs' })"
          >
            <div class="flex-div-content-top">
              <div class="flex-div-content-top-img">
                <img
                  src="~/assets/flight/car-wiring.png"
                  data-aos="fade"
                  alt=""
                />
              </div>
            </div>
            <div class="flex-div-content-bottom">
              <h2>CAR WIRING</h2>
              <p data-aos="slide-up">
                We offer car wiring with outmost professionalism
              </p>
              <button>learn more</button>
            </div>
          </div>
          <div
            class="flex-div-content"
            data-aos="slide-up"
            @click="$router.push({ path: '/car-repairs' })"
          >
            <div class="flex-div-content-top">
              <div class="flex-div-content-top-img">
                <img
                  src="~/assets/flight/pana-biting.png"
                  data-aos="fade"
                  alt=""
                />
              </div>
            </div>
            <div class="flex-div-content-bottom">
              <h2>PANA BITING</h2>
              <p data-aos="slide-up">
                let's be your pana biter and you'll be grateful
              </p>
              <button>learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flight-section" data-aos="fade">
      <div class="blur-wrapper"></div>
      <h2 class="custom-header-2" data-aos="slide-up">BISCAM FLIGHT AGENCY</h2>
      <p data-aos="slide-up" class="heading">
        We are into sales of Personal and corporate flight tickets and other
        services such as Hotel reservation and Meet and Greet services.
      </p>
      <div class="flex-div">
        <div
          class="flex-div-content"
          data-aos="slide-right"
          @click="$router.push({ path: '/flight' })"
        >
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                src="~/assets/flight/ticket-booking.png"
                data-aos="fade"
                alt=""
              />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <h2>flight ticket</h2>
            <p data-aos="slide-up">
              Book you flight ticket at the comfort of you home.
            </p>
            <button>learn more</button>
          </div>
        </div>
        <div
          class="flex-div-content"
          data-aos="fade"
          @click="$router.push({ path: '/flight' })"
        >
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="~/assets/flight/hotel.png" data-aos="fade" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <h2>hotel reservation</h2>
            <p data-aos="slide-up">
              Let us handle you hotel reservation services with the best hotels
              in town
            </p>
            <button>learn more</button>
          </div>
        </div>
        <div
          class="flex-div-content"
          data-aos="slide-left"
          @click="$router.push({ path: '/flight' })"
        >
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img
                src="~/assets/flight/persons-greet.jpg"
                data-aos="fade"
                alt=""
              />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <h2>meet and greet</h2>
            <p data-aos="slide-up">
              Want to travel for a visit? travelling made easy with us.
              <br />let us compile your documents with ease
            </p>
            <button>learn more</button>
          </div>
        </div>
      </div>
    </div>

    <div class="maritime-section">
      <div class="wrapper">
        <h1>maritime</h1>
        <div class="carousel-wrapper" data-aos="slide-right">
          <carousel :images="maritime_images" />
        </div>
        <div class="wrapper-container" data-aos="slide-up">
          <h2 class="custom-header-2">maritime</h2>
          <p>
            Maritime Department of Biscam deals with different maritime services
            which include; offshore services, import and export, ship chandling,
            general supply (door to door services etc )
          </p>

          <button class="hover-animation">
            <NuxtLink to="/maritime">visit us now</NuxtLink>
          </button>
        </div>
      </div>
    </div>
    <div class="maritime-section digi-centre">
      <div class="wrapper">
        <div class="wrapper-container" data-aos="slide-right">
          <h2 class="custom-header-2">Digital centre</h2>
          <p>
            BISCAM also renders documentation services and Graphic designing/
            printing services. Documentation services includes Typing,
            plastification, printing, photocopy, spiral binding etc and Graphic
            design services include the designing of all sort of designs and
            printing like banners, stickers, mugs, plates, caps, t-shirts,
            calenders, magazines etc
          </p>
          <button class="hover-animation">
            <NuxtLink to="/contact-page">visit us now</NuxtLink>
          </button>
        </div>
        <div class="carousel-wrapper" data-aos="slide-up">
          <carousel :images="dg_images" />
        </div>
        <h1>digital center</h1>
      </div>
    </div>

    <div class="custom-services">
      <div class="blur-wrapper"></div>
      <h1 data-aos="slide-up">looking for more services?</h1>
      <p data-aos="slide-up">Yes We knew you would...</p>
      <div class="buttons">
        <NuxtLink to="/about-us" data-aos="slide-up">browse services</NuxtLink>
        <button
          @click="($event) => navigateTo('/')"
          class="appointment"
          data-aos="slide-up"
        >
          book an appointment
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import maritime_zero from "assets/flight/offshore.jpg";
import maritime_one from "assets/flight/boat-floating-sea.jpg";
import maritime_two from "assets/flight/maritime-coast.jpg";
import maritime_three from "assets/flight/import-export.jpg";
import digital_zero from "assets/flight/digital-ideas.jpg";
import digital_one from "assets/flight/empty-modern-creative-agency-office.jpg";
import flightView from "assets/flight/airplane-sunset.jpg";
import flightView1 from "assets/flight/airport-terminal.jpg";
import maritimeView from "assets/flight/boat-floating-sea.jpg";
import maritimeView1 from "assets/flight/maritime-coast.jpg";
import garageView from "assets/flight/mechanic-servicing-car.jpg";
import garageView1 from "assets/flight/artificial-lighting-employee-blue.jpg";
import cleaningView from "assets/flight/black-woman-with-suitcase-airport.jpg";
import cleaningView1 from "assets/flight/cleaning-equipments-1.jpg";
import ecommerceView from "assets/flight/auto-elect-two.webp";

const HomeViewImages = ref([
  cleaningView,
  maritime_three,
  ecommerceView,
  garageView,
  maritimeView,
  flightView,
  digital_one,
  cleaningView1,
  garageView1,
  maritimeView1,
  flightView1,
]);
const maritime_images = ref([
  maritimeView,
  maritimeView1,
  maritime_zero,
  maritime_one,
  maritime_two,
  maritime_three,
]);
const linkDropdown = useLinkState();
const dg_images = ref([digital_zero, digital_one]);
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
  padding: 0;
  margin: 0;
  background: rgb(217, 217, 217);

  .main-shadow {
    width: 100vw;
    height: fit-content;
    background: rgb(14, 6, 106);
    position: relative;

    .slider-div {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .landing-page {
      width: 100%;
      height: 90vh;
      position: relative;
      background: url(../assets/flight/boat-floating-sea.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;

      .wrapper {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .left-wrapper {
          width: 90%;
          height: fit-content;
          position: relative;
          padding-top: 15vh;

          h1 {
            font-size: 55px;

            padding: 10px;
            color: rgb(14, 6, 106);
            color: white;
            font-weight: 900;
            font-family: "Montserrat", "Nunito Sans", sans-serif;
          }

          h2 {
            text-transform: capitalize;
            font-size: 20px;
            font-weight: 500;
            color: rgb(238, 238, 238);
            font-family: "Montserrat", "Nunito Sans", sans-serif;
            margin: 0;
          }

          .text-animation {
            width: fit-content;
            height: 35px;
            position: relative;
            margin: 20px auto;
            background: transparent;

            .text-wrapper {
              width: fit-content;
              height: 35px;
              overflow: hidden;
              position: relative;
              padding: 0;

              ul {
                list-style: none;
                width: max-content;
                height: 140px;
                animation: step_up 16s steps(4) infinite;
                margin: 0;
                position: relative;
                transition: all 0.5s ease;
                background: transparent;

                li {
                  text-align: left;
                  width: max-content;
                  height: 35px;
                  padding: 0;
                  display: flex;
                  color: rgb(231, 231, 231);
                  justify-content: flex-start;
                  align-items: center;
                  font: 500 19px "Poppins", "Nunito Sans", sans-serif;
                  text-transform: capitalize;
                }

                @media screen and (max-width: 450px) {
                  width: 90vw;

                  li {
                    font-size: 12px;
                  }
                }
              }

              @keyframes step_up {
                from {
                  top: 0;
                }

                to {
                  top: -140px;
                }
              }
            }

            @keyframes show_hide {
              from {
                right: 0;
              }

              to {
                width: 0;
              }
            }

            &::before {
              content: "";
              width: 2px;
              height: 2px;
              position: absolute;
              left: 0;
              top: 50%;
              background: rgb(241, 162, 42);
              animation: beep 2s linear infinite alternate forwards;
            }

            @media screen and (max-width: 400px) {
              width: 97vw;
            }
          }

          @keyframes beep {
            from {
              width: 0;
              height: 0;
            }

            to {
              transform: scaleY(30);
            }
          }

          .link-wrapper {
            width: fit-content;
            height: fit-content;

            margin: 15px auto;
            display: flex;
            justify-content: center;
            align-items: center;

            a {
              display: flex;
              justify-content: center;
              background: rgb(241, 162, 42);
              align-items: center;
              width: 200px;
              height: 50px;
              margin: 30px 40px 10px 0;
              font-size: 15px;
              color: white;
              text-decoration: none;
              position: relative;
              overflow: hidden;
              text-transform: uppercase;

              &:last-child {
                background: transparent;
                border: 1px solid rgb(241, 162, 42);
                color: white;
              }

              @media screen and (max-width: 500px) {
                margin: 20px auto;
              }

              &:hover {
                background: white;
                color: rgb(59, 59, 59);
                border: none;

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
            }
          }

          @media screen and (max-width: 1080px) {
            width: 85%;
            height: fit-content;
            padding-bottom: 20px;

            h1,
            p {
              padding: 10px;
            }

            .text-animation {
              margin-top: 5vh;
            }

            @media screen and (max-width: 768px) {
              h1 {
                font-size: 35px;
              }

              h2 {
                font-size: 16px;
              }

              .text-animation {
                .text-wrapper {
                  ul {
                    li {
                      font-size: 15px;
                    }
                  }
                }
              }

              @media screen and (max-width: 500px) {
                h1 {
                  font-size: 25px;
                }
                h2 {
                  font-size: 12px;
                  padding: 10px;
                }
                .text-animation .text-wrapper ul li {
                  font-size: 10px;
                }
                .link-wrapper {
                  flex-direction: column;
                  width: 100%;
                  margin: 20px auto;

                  a {
                    display: flex;
                    width: 90%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .garage-section {
    width: 100vw;
    height: fit-content;
    background: linear-gradient(
      to bottom,
      rgb(20, 15, 94),
      rgb(17, 8, 119),
      rgb(8, 4, 58)
    );
    margin: 0;
    padding-top: 30px;

    .wrapper {
      width: 100%;
      height: fit-content;
      padding: 50px 10px;

      p.desc {
        font-size: 17px;
        line-height: 30px;
        color: rgb(220, 220, 220);
        text-align: center;
        width: 70%;
        margin: 15px auto;
        padding: 20px 10px;

        @media screen and (max-width: 500px) {
          width: 90%;
        }
      }
    }
  }

  .flight-section {
    width: 100vw;
    height: fit-content;
    margin: 0;
    background: url(../assets/flight/airplane-sunset.jpg);
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
    position: relative;
    padding-top: 50px;
    padding-bottom: 20px;

    .bur-wrapper {
      background: rgb(14, 6, 106);
      opacity: 0.7l;
    }
    h2 {
      @media screen and (max-width: 768px) {
        font-size: 30px;
      }
    }

    .heading {
      width: 80%;
      margin: 10px auto;
      position: relative;
      color: white;
      line-height: 40px;
    }

    .flex-div-content {
      padding: 10px;
      border-radius: 2px;
    }
  }

  .maritime-section {
    width: 100vw;
    height: fit-content;
    padding: 20px 0;
    background: linear-gradient(
      to bottom,
      rgb(14, 6, 106),
      rgb(14, 46, 106),
      rgb(9, 31, 72)
    );

    .wrapper {
      width: 90%;
      height: fit-content;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      background: transparent;
      padding-top: 4%;
      padding-bottom: 3%;

      h1 {
        display: none;
      }

      .carousel-wrapper {
        width: 60%;
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;

        h2 {
          display: none;
        }
      }

      .wrapper-container {
        width: 40%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow-x: hidden;
        gap: 15px;

        h2 {
          margin: 0;
        }

        p {
          color: white;
          width: 90%;
          text-align: left;
        }

        button {
          border: none;
          width: 200px;
          height: 45px;
          border-radius: 4px;
          margin: 0 auto;
          background: rgb(197, 140, 8);

          a {
            color: rgb(234, 233, 233);
            text-decoration: none;
            text-transform: capitalize;
            font: 600 19px "Montserrat", "Poppins", sans-serif;
          }

          &:hover {
            background: rgb(252, 252, 252);

            a {
              color: rgb(43, 43, 43);
            }
          }
        }
      }

      @media screen and (max-width: 1000px) {
        flex-direction: column;
        padding-top: 30px;
        padding-bottom: 20px;

        h1 {
          display: flex;
          justify-content: center;
          align-items: center;
          text-transform: uppercase;
          width: 100%;
          padding: 20px;
          color: white;
          text-align: center;
          font: 700 50px "Poppins", sans-serif;

          @media screen and (max-width: 500px) {
            font-size: 35px;
          }
        }

        .carousel-wrapper,
        .wrapper-container {
          width: 95%;
        }

        .wrapper-container {
          padding: 30px auto;
          display: block;
          margin: 10px auto;

          h2 {
            padding: 20px;
            display: none;
          }

          p {
            padding: 10px;
            text-align: center;
            width: 95%;
          }

          button {
            margin: 20px auto;
            width: 230px;
          }
        }
      }
    }
  }

  .maritime-section.digi-centre {
    background: linear-gradient(to top, rgb(14, 46, 106), rgb(9, 31, 72));

    .wrapper {
      @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
      }
    }
  }

  .cleaning-agency {
    width: 100%;
    height: fit-content;

    img {
      width: 100%;
      height: auto;
      cursor: pointer;
    }
  }

  .custom-services {
    width: 100%;
    height: fit-content;
    padding: 20px;
    background: url(../assets/flight/low-angle-greyscale-shot-airplane-flying-high-rise-buildings.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;

    h1 {
      font: 700 30px "Nunito sans", sans-serif;
      padding: 20px;
      text-transform: capitalize;
      color: rgb(255, 153, 0);
      position: relative;
    }

    p {
      padding: 10px;
      color: rgb(254, 179, 38);
      position: relative;
    }

    .buttons {
      width: fit-content;
      margin: 10px auto;
      position: relative;

      a {
        width: max-content;
        height: 45px;
        padding: 10px 20px;
        text-decoration: none;
        text-transform: uppercase;
        background: white;
        color: rgb(187, 125, 11);
        border-radius: 5px;
        margin: 20px;
        font-size: 17px;
      }

      .appointment {
        border: none;
        width: max-content;
        height: 45px;
        padding: 10px 20px;
        background: rgb(231, 164, 8);
        color: white;
        margin: 20px;
        border-radius: 5px;
        text-transform: uppercase;
        font-size: 17px;
        position: relative;
      }
    }
  }
}
</style>