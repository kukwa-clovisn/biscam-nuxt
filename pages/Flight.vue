<template>
  <div class="main">
    <div class="landing-page">
      <div class="blur-wrapper"></div>
      <div class="carousel-div">
        <slider :images="dg_images" />
      </div>
      <div class="landing-page-content">
        <h1><span>biscam</span> travel agency</h1>
        <p>travel everywhere with us</p>
        <div class="booking-div">
          <p>book flight ticket now</p>
          <button class="hover-animation">
            <NuxtLink to="/ticket-booking">book ticket now</NuxtLink>
          </button>
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
            <a href="#">facebook</a>
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
    <div class="section-1">
      <h2>flight ticket</h2>
      <div class="section-flex">
        <div class="section-flex-img">
          <img src="~/assets/flight/man-preparing-travel.jpg" alt="" />
        </div>
        <div class="section-flex-content">
          <h3>make a hotel reservation</h3>
          <p>
            Booking an airline ticket sometimes require research luckily, we can
            help with this. our airline service will book you an appropriate
            flight that suits your loyalty program, budget and other needs. If
            you are a frequent flier, leave everything to us. Ticket booking can
            become time consuming and sometimes over budget if its not managed
            well by a dedicated travel professional. We therefore offer both
            corporate flight tickets and personal flight tickets.
          </p>
          <button>
            <NuxtLink to="/ticket-booking">book now</NuxtLink>
          </button>
        </div>
      </div>
    </div>
    <div class="section-2">
      <h2>hotel reservation</h2>
      <div class="section-flex">
        <div class="section-flex-img">
          <img
            src="~/assets/flight/black-woman-with-suitcase-airport.jpg"
            alt=""
          />
        </div>
        <div class="section-flex-content">
          <h3>book for a traveling ticket</h3>
          <p>
            Are you traveling for leisure or business, but worried about booking
            a hotel? Our hotel management has your coverage. We area recognized
            travel service providers with acclaimed hotel booking services. Book
            both budget and luxury hotels worldwide. With exceptional and
            practical experience, we strive to offer our best recommendations to
            travelers. Our amiable report worth accommodation provides results
            in the most reasonable hotel rates. Guests are given a VIP treatment
            and even have cancelation flexibility at select hotels worldwide.
          </p>
          <button>
            <NuxtLink to="/ticket-booking">book now</NuxtLink>
          </button>
        </div>
      </div>
    </div>
    <div class="section-1">
      <h2>meet and greet</h2>
      <div class="section-flex">
        <div class="section-flex-img">
          <img
            src="~/assets/flight/two-african-businessman-meeting-together.jpg"
            alt=""
          />
        </div>
        <div class="section-flex-content">
          <h3>meet and greet someone</h3>
          <p>
            This is a service offered by biscam flight agency.it makes airport
            visit hassle -free. If you want to fast track through arrival,
            departure or transfer for yourself, your guest, executive or family
            member, we guarantee a quick smooth and safe travel experience at
            the airport. Our airport meets and greet service ensures a
            comfortable and relaxed trip. Meet and greet terminal service
            includes Management of flight coordination-guaranteeing that all
            scheduled flight services are fulfilled Ful-time flight supervision
            including ticketing services and announcing. Exceptional priorities,
            baggage handling Meet and greet passenger services includes Superb
            hospitality and thorough escorting. Special assistance for travels
            with reduced mobility. Collection of excess baggage.
          </p>
          <button>
            <NuxtLink to="/ticket-booking">book now</NuxtLink>
          </button>
        </div>
      </div>
    </div>
    <div class="section-2">
      <h2>tour and transportation</h2>
      <div class="section-no-flex">
        <p>
          We save your time and money as well as assure youth best vehicles
          available we can also arrange you the best prices bonuses, exotic
          cars, whatever your transportation needs big or small while visiting
          here, biscam flight agency will arrange for you. A uniformed driver
          will wait for you with a sign and a luggage card inside of the
          arrivals greeting you personally, he will assist you personally with
          your bag(s)
        </p>
        <button>
          <NuxtLink to="/ticket-booking">book now</NuxtLink>
        </button>
      </div>
    </div>
    <div class="others">
      <h2>others</h2>
      <ol type="1">
        <li>Visa Assistance</li>
        <li>Biometric Passport Application</li>
      </ol>
    </div>
    <div class="payment-methods">
      <div class="wrapper">
        <h2>accepted payment methods</h2>
        <div class="payment-modes">
          <div class="img">
            <img src="~/assets/flight/mtn-momo.png" alt="" />
          </div>
          <div class="img">
            <img src="~/assets/flight/orange-money.png" alt="" />
          </div>
          <div class="img">
            <img src="~/assets/flight/visa-card.png" alt="" />
          </div>
          <div class="img">
            <img src="~/assets/flight/paypal.png" alt="" />
          </div>
        </div>

        <NuxtLink to="/ticket-booking" class="route"
          >book your tickets now</NuxtLink
        >
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
import img from "assets/flight/airplane-sunset.jpg";
import img1 from "assets/flight/airport-terminal.jpg";
import img2 from "assets/flight/sky-plane.jpg";
import img3 from "assets/flight/black-woman-with-suitcase-airport.jpg";

const dg_images = ref([img, img1, img2, img3]);
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
    height: 90vh;
    position: relative;
    background: url(../assets/flight/black-woman-with-suitcase-airport.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    .carousel-div {
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 0;
      left: 0;
    }

    .blur-wrapper {
      opacity: 0.5;
    }

    .landing-page-content {
      width: 100%;
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    h1,
    h3,
    p,
    button {
      z-index: 1;
    }

    h1 {
      text-transform: uppercase;
      font-size: 60px;
      color: white;
      font-weight: 800;
      position: relative;
      padding: 10px;

      span {
        color: rgb(241, 162, 42);
      }

      @media screen and (max-width: 768px) {
        font-size: 50px;

        @media screen and (max-width: 500px) {
          font-size: 40px;

          @media screen and (max-width: 400px) {
            font-size: 30px;
          }
        }
      }
    }

    p {
      color: white;
      padding: 10px;
      text-transform: capitalize;
    }

    .booking-div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;

      p {
        color: white;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 23px;
      }

      button {
        width: 200px;
        height: 45px;
        background: rgb(241, 162, 42);
        border: none;
        border-radius: 4px;

        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-decoration: none;
          text-transform: capitalize;
          font-size: 15px;
        }
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
  .navbar.changeBg {
    box-shadow: 0 8px 18px 2px rgb(213, 212, 212);
  }

  .section-flex {
    width: 90%;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
    padding: 10px 0;
    padding-top: 0;

    .section-flex-img {
      height: 100%;
      width: 40%;
      cursor: pointer;
      overflow: hidden;

      img {
        height: 85%;
        width: auto;
        margin-left: 0;
      }
    }

    .section-flex-content {
      width: 58%;
      height: fit-content;
      padding: 5px;
      padding-top: 0;

      h3 {
        text-align: left;
        text-transform: capitalize;

        font: 600 24px/40px "Montserrat", "Nunito Sans", sans-serif;
      }

      p {
        text-align: left;
      }

      button {
        border: none;

        margin: 20px;
        margin-left: 0;
        width: 200px;
        height: 40px;
        display: block;

        a {
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }
    @media screen and (max-width: 900px) {
      flex-direction: column;
      height: fit-content;
      align-items: center;

      .section-flex-img {
        height: 50vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 100%;
          margin: auto;
        }
      }

      .section-flex-content {
        width: 100%;
        height: fit-content;

        h3,
        p {
          text-align: center;
        }

        h3 {
          font-size: 28px;
          font-weight: bolder;
        }
        p {
          font-size: 18px;
          line-height: 27px;
        }

        button {
          width: 80%;
          margin: 20px auto;
          height: 55px;
          font-size: 1.2em;
        }
      }
    }
  }

  .section-no-flex {
    width: 80%;
    margin: 0 auto;
    height: fit-content;

    p {
      width: 90%;
      text-align: left;
      margin: 0 auto;
      line-height: 40px;
    }

    button {
      border: none;

      margin: 30px auto;

      width: 200px;
      height: 40px;
      display: block;

      a {
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }

  .section-1,
  .section-2,
  .others {
    width: 100%;
    height: fit-content;
    margin: 10px auto;
    padding: 20px 0;

    h2 {
      font-size: 40px;
      padding: 20px;
      text-transform: uppercase;
      font-family: "Nunito Sans", sans-serif;
    }
  }

  .section-1 {
    button {
      background: rgb(241, 162, 42);

      a {
        color: white;
      }
    }
  }

  .section-2 {
    background: rgb(241, 162, 42);

    h2 {
      color: white;

      @media screen and (max-width: 500px) {
        font-size: 26px;
      }
    }

    p {
      @media screen and (max-width: 500px) {
        font-size: 1.1em;
      }
    }

    button {
      background: white;

      a {
        color: rgb(241, 162, 42);
      }
      @media screen and (max-width: 500px) {
        width: 90%;
      }
    }
  }

  .others {
    width: 50%;
    margin: 0 auto;
    min-height: 40vh;

    h2 {
      color: rgb(241, 162, 42);
      text-transform: uppercase;
    }

    ol {
      li {
        list-style-position: inside;
        text-align: left;
        font-weight: 600;
        font-size: 20px;
        line-height: 40px;
      }
    }
    @media screen and (max-width: 800px) {
      width: 80%;
      @media screen and (max-width: 500px) {
        width: 90%;
      }
    }
  }

  .payment-methods {
    width: 100%;
    min-height: 35vh;
    background: #ececec;

    .wrapper {
      width: 100%;
      height: fit-content;
      padding: 20px;

      h2 {
        text-transform: capitalize;
        padding: 20px;
        font: 700 40px "Montserrat", "Nunito Sans", sans-serif;
      }

      .payment-modes {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        .img {
          width: fit-content;
          height: 80px;
          overflow: hidden;

          img {
            width: auto;
            height: 100%;
            border-radius: 4px;

            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }

      a.route {
        text-decoration: none;
        width: max-content;
        height: max-content;
        padding: 15px 25px;
        color: white;
        background: rgb(224, 148, 6);
        border-radius: 5px;
        display: block;
        margin: 20px auto;
        margin-top: 40px;
        text-transform: capitalize;
        font: 600 18px "Montserrat", "Nunito Sans", sans-serif;
      }
    }
  }

  .address-container {
    background: url(../assets/flight/airplane-sunset.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
}
</style>