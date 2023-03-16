<template>
  <div class="contact-wrapper">
    <div class="blur-wrapper"></div>
    <h1 class="heading-1">
      make business with us! <i class="fa-solid fa-arrow-down"></i>
    </h1>
    <div class="content">
      <div class="left-content">
        <form class="contact-form" id="contact">
          <h1>contact us now</h1>
          <p>Contact us directly:</p>
          <div class="direct-contacts">
            <a :href="'tel:' + tel" title="give us a call"
              ><i class="fa-solid fa-phone"></i> {{ tel }}</a
            >
            <a :href="'mailto:' + email" title="send us an email"
              ><i class="fa-solid fa-envelope"></i> {{ email }}</a
            >
            <a :href="whatsappLink" title="chat with us on whatsapp"
              ><i class="fa-brands fa-whatsapp"></i> {{ whatsappTel }}</a
            >
          </div>
          <div class="form-data">
            <label for="name">name</label>
            <input type="text" placeholder="Enter Name..." id="name" required />
          </div>
          <div class="form-data">
            <label for="email">email</label>
            <input
              type="email"
              placeholder="Enter email..."
              id="email"
              required
            />
          </div>
          <div class="form-data">
            <label for="tel">tel</label>
            <input type="tel" placeholder="Enter tel..." id="tel" required />
          </div>
          <div class="form-data">
            <label for="message">message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Leave a message...."
              required
            ></textarea>
          </div>
          <div class="form-button">
            <button type="submit" class="hover-animation">submit</button>
          </div>
        </form>
      </div>
      <div class="right-content">
        <div class="media-links">
          <h1>connect with biscam</h1>
          <div class="links">
            <div class="link"><i class="fa-solid fa-phone"></i></div>
            <div class="link"><i class="fa-brands fa-whatsapp"></i></div>
            <div class="link"><i class="fa-brands fa-facebook"></i></div>
          </div>
          <h2>useful links</h2>
          <div class="nav-links">
            <nav>
              <NuxtLink to="/car-repairs"
                >car repair <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
            </nav>

            <nav>
              <NuxtLink to="/maritime"
                >maritime <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
            </nav>

            <nav>
              <NuxtLink to="/flight"
                >flight <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
            </nav>

            <nav>
              <NuxtLink to="/cleaning-agency"
                >cleaning agency <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
            </nav>
            <nav>
              <NuxtLink to="/spare-part"
                >spare part <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
            </nav>
            <nav>
              <NuxtLink to="/about-us"
                >about us <i class="fa-solid fa-arrow-right"></i
              ></NuxtLink>
            </nav>

            <nav>
              <NuxtLink to="#contact"
                >contact <i class="fa-solid fa-arrow-right"></i>
              </NuxtLink>
            </nav>
            <button
              class="appointment hover-animation"
              @click="(event) => ($store.state.appointment = true)"
            >
              book an appointment <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <span>YUHAZON COMPANY</span> Copyright 2023 All rights reserved.
    </footer>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Contact",
  props: {
    whatsappLInk: String,
    whatsappTel: String,
    tel: String,
    email: String,
  },
  setup(props) {
    const whatsappLInk = ref(props.whatsappLInk);
    const whatsappTel = ref(props.whatsappTel);
    const tel = ref(props.tel);
    const email = ref(props.email);
    return {
      whatsappLInk,
      whatsappTel,
      tel,
      email,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-wrapper {
  width: 100%;
  height: fit-content;
  margin: 0;
  background: #0e066a;
  padding: 30px 10px;
  padding-bottom: 0;
  background: url(../assets/flight/team-work.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .heading-1 {
    color: rgb(255, 249, 241);
    padding: 20px;
    text-transform: capitalize;
    font: 600 26px "Montserrat", "Nunito Sans", sans-serif;
    position: relative;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px 10px;
    position: relative;

    .left-content {
      width: 45%;
      height: 100%;
      padding: 30px 20px;
      border-radius: 3px;
      background: rgb(255, 255, 255);

      .contact-form {
        width: 100%;
        height: fit-content;
        padding: 20px;

        h1 {
          padding: 10px;
          text-transform: capitalize;
          text-align: left;
          color: rgb(243, 164, 17);
          font-family: "Montserrat", "Poppins", sans-serif;
          font-size: 40px;
          font-weight: 700;
        }

        p {
          text-transform: capitalize;
          padding: 20px 10px;
          color: rgb(214, 140, 3);
          font: 600 17px "Montserrat", "Poppins", sans-serif;
        }

        .direct-contacts {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px 5px;

          a {
            text-decoration: none;
            color: rgb(63, 63, 63);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 5px;
            font: 500 12px "Montserrat", "Nunito Sans", sans-serif;
            padding: 5px;

            &:hover {
              border-bottom: 3px solid rgb(208, 137, 5);
              color: rgb(225, 154, 1);
            }
          }
        }

        .form-data {
          width: 100%;
          height: fit-content;
          margin: 20px auto;

          label {
            padding: 10px 20px 4px 2px;
            text-transform: uppercase;
            color: rgb(241, 162, 42);
            text-align: left;
            margin: 0;
            display: block;
          }

          input {
            width: 100%;
            height: 45px;
            outline: none;

            border: 1px solid rgb(221, 163, 2);

            padding: 10px 16px;
            font-size: 15px;
            border-radius: 4px;
            background: transparent;
            color: rgb(122, 121, 121);
          }

          textarea {
            width: 100%;
            height: 200px;
            padding: 20px;
            outline: none;
            font-size: 16px;
            border-radius: 2px;
            color: rgb(156, 156, 156);
            background: transparent;
            border: none;
            border: 1px solid rgb(221, 163, 2);
          }
        }

        .form-button {
          width: 95%;
          height: fit-content;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10px auto;

          button {
            width: 45%;
            height: 48px;
            cursor: pointer;
            border-radius: 2px;
            font-size: 17px;
            text-transform: uppercase;
            padding: 5px;
            position: relative;
            overflow: hidden;
            border: none;
            background: rgb(249, 163, 42);
            color: white;

            &:hover {
              background: rgb(21, 77, 122);
              color: white;
            }
          }
        }
      }
    }

    .right-content {
      width: 30%;
      height: 100%;
      background: rgb(15, 48, 109);
      border-radius: 5px;

      .media-links {
        width: 100%;
        height: fit-content;
        padding: 10px;

        h1 {
          text-transform: uppercase;
          padding: 20px;
          text-align: left;
          color: rgb(249, 163, 42);
          line-height: 55px;
          font: 600 22px "Montserrat", "Poppins", sans-serif;
        }

        .links {
          width: 80%;
          height: fit-content;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-wrap: wrap;
          margin: 10px 0;

          .link {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            background: rgb(250, 222, 169);
            cursor: pointer;

            i {
              font-size: 23px;
              color: rgb(40, 39, 39);
            }

            &:hover {
              i {
                transform: scale(1.1);
              }
            }
          }
        }
      }

      h2 {
        color: rgb(254, 176, 68);
        padding: 20px;
        text-align: left;
        text-transform: capitalize;
        font: 500 19px "Nunito Sans", sans-serif;
      }

      .nav-links {
        width: 80%;
        height: fit-content;
        padding: 10px;

        nav {
          width: 100%;
          margin: 5px auto;
          padding: 10px;

          a {
            color: white;
            text-transform: uppercase;
            text-align: left;
            text-decoration: none;
            font-family: "Montserrat", "Poppins", sans-serif;
            letter-spacing: 1px;
            font: 600 16px "Nunito Sans", sans-serif;
            height: fit-content;
            display: block;

            i {
              color: rgb(240, 142, 22);
              font-size: 14px;
              visibility: hidden;
            }
          }

          &:hover {
            a {
              color: rgb(241, 162, 42);

              i {
                color: rgb(241, 162, 42);
                visibility: visible;
              }
            }
          }
        }

        .appointment {
          width: 80%;
          height: 45px;
          border-radius: 5px;
          border: none;
          background: rgb(227, 149, 4);
          color: rgb(229, 244, 254);
          margin: 10px 0;
          text-transform: capitalize;
          font: 600 15px "Nunito Sans", sans-serif;

          i {
            visibility: hidden;
          }

          &:hover {
            i {
              visibility: visible;
            }

            background: rgb(11, 55, 120);
            box-shadow: 0 0 5px 5px rgb(13, 45, 80);
          }
        }
      }
    }

    @media screen and (max-width: 900px) {
      flex-direction: column;
      gap: 30px;
      .left-content,
      .right-content {
        width: 95%;

        @media screen and (max-width: 400px) {
          width: 100%;
        }
      }

      .left-content {
        .contact-form {
          h1 {
            text-align: center;
            font-size: 40px;
          }

          .form-button {
            @media screen and (max-width: 500px) {
              flex-direction: column;

              button {
                width: 100%;
                margin: 15px auto;
              }
            }
          }
        }
      }

      .right-content {
        padding-top: 30px;

        .media-links {
          h1 {
            text-align: center;
            font-size: 40px;
          }
        }

        h2 {
          text-align: center;
          padding: 20px 10px;
        }

        .nav-links {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 20px;

          nav {
            width: 300px;
          }
        }
      }
    }
  }

  footer {
    width: 100%;
    height: fit-content;
    padding: 10px;
    background: #ececec;
    font-weight: 600;
    position: relative;

    span {
      padding-right: 20px;
    }
  }
}
</style>