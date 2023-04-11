<template>
  <main>
    <div class="landing-page">
      <div class="blur-wrapper"></div>
      <h3>
        Biscam Investment Sarl is a multi-service Company that is die-hardly
        committed to satisfy her customers with her resources.
      </h3>
      <h2>Make Business With Us Today!</h2>
      <button>
        <a href="#contact">contact</a>
      </button>
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
              message="redirecting..."
              :items="linkDropdown"
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
    <div class="address-div">
      <div class="address-wrapper">
        <div class="left-wrapper">
          <h2>email</h2>
          <p>GARAGE: businessinvesmentsarl@gmail.com</p>
          <p>AGENCY: biscamflight@gmail.com</p>
          <p>MARITME: businessinvesmentsarl@gmail.com</p>

          <h2>facebook</h2>
          <a href="#">biscam investment sarl</a>
          <a href="#">biscam flight agency</a>
          <h2>whatsapp</h2>
        </div>
        <div class="right-wrapper">
          <h2>address</h2>

          <p><span>head office</span>-Rondpoint deido, behind hotel meno</p>

          <p>office-line: +237 654 21 38 03</p>
          <p>office-line: +237 683 07 97 85</p>

          <p><span>Spare part shop</span> - Camp Yabassi</p>

          <p>office-line: +237 677 38 77 14</p>
          <p>office-line: +237 699 39 13 16</p>
          <p>office-line: +237 695 56 75 65</p>

          <p><span>Garage</span>- Bonasama opposite Ola mobile</p>

          <p>office-line: +237 677 94 15 47</p>
          <p>office-line: +237 671 69 67 87</p>

          <p><span> Douala Port</span></p>
          <p>office-line: +237 683 07 97 85</p>
        </div>
      </div>
    </div>

    <div class="map-div">
      <div class="map-wrapper">
        <div class="service-wrapper">
          <h3>see what we do</h3>
          <h2>browse our services</h2>
          <NuxtLink to="/about-us">services</NuxtLink>
        </div>
        <div class="map-image">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.889999936998!2d9.714111714704378!3d4.042863348135908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128e4b134dd9%3A0x83dbe2b04e36f866!2sCOGENI%20Camp%20Yabassi!5e0!3m2!1sen!2scm!4v1678379515778!5m2!1sen!2scm"
            width="100%"
            height="auto"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
const stickyHeader = ref(false);

const linkDropdown = useLinkState();

console.log(linkDropdown.value);

if (process.client) {
  window.addEventListener("scroll", () => {
    stickyHeader.value = true ? window.scrollY > 0 : false;
  });
}
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: fit-content;

  .landing-page {
    width: 100vw;
    height: 90vh;
    background: url(../assets/flight/how-screen-printing-works.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-top: 15vh;

    .blur-wrapper {
      background: rgb(81, 4, 81);
    }

    h3 {
      width: 85%;
      padding: 15px;
      color: white;
      position: relative;
      font-weight: 300;
    }

    h2 {
      text-align: center;
      padding: 20px;
      position: relative;
      color: white;
      font-weight: 700;
      font-size: 35px;
      text-transform: capitalize;
      font-family: "Montserrat", "Nunito Sans", sans-serif;
    }

    button {
      width: 150px;
      height: 50px;
      background: transparent;
      border: 1px solid white;
      cursor: pointer;
      position: relative;
      margin: 10px auto;

      a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
      }
    }
  }

  .address-div {
    width: 100%;
    height: fit-content;

    .address-wrapper {
      width: 100%;
      height: fit-content;
      padding: 4% 20px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;

      h2,
      p,
      a {
        text-align: left;
      }

      .left-wrapper {
        width: 47%;
        height: fit-content;

        h2 {
          color: goldenrod;
          text-transform: uppercase;
          padding: 10px;
        }

        p,
        a {
          padding: 10px;
          text-decoration: none;
          display: block;
        }
      }

      .right-wrapper {
        width: 47%;
        height: fit-content;

        h2 {
          color: goldenrod;
          padding: 20px 10px;
          text-transform: uppercase;
        }

        p {
          padding: 10px;

          span {
            color: goldenrod;
            text-transform: capitalize;
            font-size: 1.2em;
          }
        }
      }

      @media screen and (max-width: 680px) {
        flex-direction: column;
        align-items: center;

        .left-wrapper,
        .right-wrapper {
          width: 90%;

          @media screen and (max-width: 400px) {
            p,
            a {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .map-div {
    width: 100%;
    height: fit-content;

    .map-wrapper {
      width: 100%;
      height: fit-content;

      .service-wrapper {
        background: goldenrod;
        width: 100%;
        height: fit-content;
        padding: 30px 20px;

        h2 {
          font: 700 60px/90px "Montserrat", "Poppins", sans-serif;
          padding: 20px;
          text-transform: uppercase;

          @media screen and (max-width: 400px) {
            font-size: 45px;
            padding: 20px 10px;
          }
        }

        h3 {
          color: white;
          padding: 10px;
          text-transform: uppercase;
          font: 500 30px "Nunito Sans", sans-serif;
        }

        a {
          width: fit-content;
          height: fit-content;
          padding: 10px 20px;
          background: white;
          color: goldenrod;
          text-transform: uppercase;
          text-decoration: none;
          display: block;
          margin: 20px auto;
        }
      }

      .map-image {
        width: 100%;
        height: 70vh;
        overflow-x: hidden;

        iframe {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }
  }
}
</style>