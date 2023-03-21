<template>
  <main id="main">
    <NuxtLayout name="app-header" />

    <div id="componentContainer">
      <NuxtPage data-aos="slide-left" />
    </div>
    <NuxtLayout name="app-footer" />
    <div class="menu-container" v-if="menuState">
      <div class="blur-wrapper" @click="($event) => (menuState = false)"></div>
      <div :class="[{ 'is-active': menuState }, 'menu-wrapper']">
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
            @click="($event) => (appointmentState = true)"
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
    <div class="appointment-container" v-if="appointmentState">
      <div
        class="blurred-wrapper"
        @click="($event) => (appointmentState = false)"
      ></div>
      <div class="appointment-wrapper">
        <form @submit="event.preventDefault()">
          <button class="close" @click="($event) => (appointmentState = false)">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <h1>book an appointment</h1>
          <el-steps :active="active" finish-status="success">
            <el-step title="Step 1" />
            <el-step title="Step 2" />
            <el-step title="Step 3" />
          </el-steps>
          <h2 v-if="stepOne">Personal info</h2>
          <h2 v-if="stepTwo">appointment category</h2>
          <h2 v-if="confirm">Your appointment details</h2>
          <div class="form-wrapper" v-if="stepOne">
            <div class="form-data">
              <label for="name">Name:</label>
              <input
                name="name"
                type="text"
                v-model="appointmentBody.name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div class="form-data">
              <label for="email">email:</label>
              <input
                type="email"
                name="email"
                v-model="appointmentBody.email"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div class="form-data">
              <label for="tel">tel:</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                v-model="appointmentBody.tel"
                placeholder="Enter You Phone Number"
              />
            </div>
          </div>

          <div class="form-wrapper" v-if="stepTwo">
            <div class="form-data">
              <label for="appointment-category">service</label>
              <el-select
                v-model="appointmentBody.userService"
                id="appointment-category"
                placeholder="Choose Service"
                size="large"
                class="form-select"
                name="appointmentService"
              >
                <el-option
                  v-for="item in services"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="form-data">
              <label for="date">date</label>
              <input
                type="date"
                name="appointmentDate"
                id="date"
                v-model="appointmentBody.date"
                placeholder="Select Date"
                required
              />
            </div>
            <div class="form-data">
              <label for="time">time</label>
              <input
                type="time"
                name="appointmentTime"
                id="time"
                v-model="appointmentBody.time"
                placeholder="Select Time"
              />
            </div>
            <div class="form-data full-width">
              <label for="appointment-message"
                >Tell us about you appointment</label
              ><textarea
                name="appointmentMesaage"
                id="appointment-message"
                cols="30"
                v-model="appointmentBody.message"
                rows="10"
                placeholder="Tell us about your appointment..."
              ></textarea>
            </div>
          </div>

          <div class="form-wrapper" v-if="confirm">
            <p>
              Name:<span> {{ appointmentBody.name }}</span>
            </p>
            <p>
              email: <span>{{ appointmentBody.email }}</span>
            </p>
            <p>
              tel: <span>{{ appointmentBody.tel }}</span>
            </p>
            <p>
              date: <span>{{ appointmentBody.date }}</span>
            </p>
            <p>
              time : <span>{{ appointmentBody.time }}</span>
            </p>
            <p>
              service: <span>{{ appointmentBody.userService }}</span>
            </p>
            <p class="full-width">
              message: <span>{{ appointmentBody.message }}</span>
            </p>
          </div>

          <el-button class="form-button" @click="phaseOne" v-if="stepOne"
            >Next step</el-button
          >
          <el-button
            class="form-button form-prev-button"
            v-if="stepTwo"
            @click="
              ($event) => {
                (stepOne = true), (stepTwo = false), (confirm = false);
              }
            "
            >previous step</el-button
          >
          <el-button class="form-button" @click="phaseTwo" v-if="stepTwo"
            >Next step</el-button
          >
          <el-button
            class="form-button form-prev-button"
            v-if="confirm"
            @click="
              ($event) => {
                (stepOne = false), (stepTwo = true), (confirm = false);
              }
            "
            >previous step</el-button
          >
          <el-button class="form-button" @click="submitForm" v-if="confirm"
            >book appointment</el-button
          >
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
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
});

const appointmentBody = reactive({
  name: "",
  email: "",
  tel: "",
  userService: "",
  date: "",
  time: "",
  message: "",
});

const services = ref([
  {
    label: "Car Repair",
    value: "Car Repair",
  },
  {
    label: "Flight",
    value: "Flight",
  },
  {
    label: "Maritime",
    value: "Maritime",
  },
  {
    label: "Spare Part",
    value: "Spare Part",
  },
]);
const stepOne = ref(true);
const stepTwo = ref(false);
const confirm = ref(false);
const appointmentState = useAppointmentState();
const menuState = useMenuState();
const active = ref(0);

const phaseOne = (e) => {
  if (
    appointmentBody.name != "" &&
    appointmentBody.email != "" &&
    appointmentBody.tel != ""
  ) {
    ElNotification.success({
      title: "step one complete",
      message: "Loading step two...",
      offset: 100,
    });
    active.value = 1;
    stepOne.value = false;
    stepTwo.value = true;
    confirm.value = false;
  } else {
    ElNotification.warning({
      title: "Oooooooppppsss!!",
      message:
        "Make sure all input fields are filled correctly before proceeding.",
      offset: 100,
    });
  }
};

const phaseTwo = (e) => {
  if (
    appointmentBody.date != "" &&
    appointmentBody.time != "" &&
    appointmentBody.userService != "" &&
    appointmentBody.message != ""
  ) {
    active.value = 2;
    stepOne.value = false;
    stepTwo.value = false;
    confirm.value = true;
    ElNotification.success({
      title: "Step Two Complete",
      message: "Assembling Your Info..",
      offset: 100,
    });
  } else {
    ElNotification.warning({
      title: "Oooooooppppsss!!",
      message:
        "Make sure all input fields are filled correctly before proceeding.",
      offset: 100,
    });
  }
};

const submitForm = (e) => {
  active.value = 0;

  ElMessageBox.alert(
    "Your appointment request has been submitted successfully. Anticipate a reply from us any time soon.",
    "Appointment Submitted",
    {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: "OK",
      callback: (action) => {
        appointmentState.value = false;
        appointmentBody.name = "";
        appointmentBody.email = "";
        appointmentBody.tel = "";
        appointmentBody.date = "";
        appointmentBody.time = "";
        appointmentBody.userService = "";
        stepOne.value = true;
        stepTwo.value = false;
        confirm.value = false;
      },
    }
  );
};
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
        // background:red;
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
          width: fit-content;
          height: 13vh;
          overflow: hidden;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          background: white;
          border-radius: 100%;

          img {
            width: auto;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
          }
        }

        p {
          font-size: 12px;
          text-align: center;
          color: rgb(252, 249, 242);
        }

        .appointment {
          border: none;
          background: rgb(231, 174, 3);
          color: white;
          width: 70%;
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

          &:focus {
            background: white;
          }
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
  }

  @keyframes menu_active {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0);
    }
  }

  .appointment-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    animation: popUp 1s 1 linear alternate forwards;
    overflow: hidden;

    .blurred-wrapper {
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgb(31, 31, 31);
      cursor: pointer;
      z-index: 1;
    }

    .appointment-wrapper {
      width: 95%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      form {
        width: 95%;
        height: 97vh;
        background: white;
        border-radius: 5px;
        padding: 10px 20px;
        position: relative;
        box-shadow: 0px 0px 10px 5px rgb(39, 39, 39);
        z-index: 1;
        overflow: hidden;

        button.close {
          position: absolute;
          top: 3%;
          right: 4%;
          border: none;
          background: transparent;
          width: fit-content;
          height: fit-content;
          padding: 10px;

          i {
            font-size: 30px;
          }

          &:hover {
            i {
              color: rgb(255, 208, 0);
            }
          }
        }

        h1 {
          text-transform: uppercase;
          padding: 20px 10px;
          font: 900 30px "Montserrat", sans-serif;
        }
        h2 {
          text-transform: capitalize;
          font: 700 19px "Montserrat", "Nunito Sans", sans-serif;
        }

        .form-wrapper {
          width: 95%;
          height: 43vh;
          margin: 10px auto;
          border-radius: 5px;
          overflow: hidden;
          overflow-y: scroll;
          padding: 20px 10px ;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 20px;
          background:rgb(250, 250, 250);
          box-shadow: 0 0 10px 9px rgb(251,251,251);

          .form-data {
            width: 48%;
            height: fit-content;

            label {
              display: block;
              text-align: left;
              padding: 3px;
              font: 400 16px "Montserrat", "Nunito Sans", sans-serif;
              text-transform: capitalize;
            }

            input {
              width: 100%;
              height: 43px;
              outline: none;
              border: none;
              border: 1px solid rgb(235, 235, 235);
              text-align: left;
              padding: 3px 10px;
              border-radius: 1px;
              background: rgb(243, 243, 243);
              color: rgb(44, 43, 43);
            }
            textarea {
              width: 100%;
              height: 150px;
              border: none;
              background: rgb(243, 243, 243);
              text-align: left;
              outline: none;
              border: 1px solid rgb(235, 235, 235);
              padding: 15px 0 15px 10px;

              &:hover {
                height: 160px;
              }

              &:active,
              &:focus {
                height: 180px;
              }
            }
          }
          .full-width {
            width: 100%;
          }

          p {
            width: 48%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            text-transform: capitalize;
            color: rgb(39, 39, 39);

            span {
              font-weight: 700;
              text-transform: none;
              color: rgb(26, 26, 26);
            }
          }
          p.full-width{ 
            width:100%;
          }
        }
        .form-button {
          width: 250px;
          height: 45px;
          border-radius: 30px;
          margin: 20px auto;
          margin-right: 15px;
          padding: 0 20px;
          color: white;
          text-transform: capitalize;
          transition: all 0.3s ease;
          background: repeating-linear-gradient(
            to bottom right,
            rgb(26, 84, 135),
            rgb(6, 46, 105),
            rgb(20, 67, 132)
          );
        }
        .form-button.form-prev-button {
          background: repeating-linear-gradient(
            to bottom right,
            rgb(193, 126, 3),
            rgb(221, 144, 2)
          );
        }
      }
    }
  }

  .contact-container {
    width: 100%;
    height: fit-content;
    position: relative;
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
  width: 95%;
  gap: 40px 30px;

  .flex-div-content {
    background: rgb(242, 248, 251);
    width: 30%;
    min-height: 300px;
    padding: 20px;
    box-shadow: 0 0 2px 1px #313131;
    border-radius: 10px;
    cursor: pointer;

    .flex-div-content-top {
      width: 100%;
      height: 50%;
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
      height: 50%;
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
        font-weight: 500;
        font-size: 18px;
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

    @media screen and (max-width: 820px) {
      width: 46%;

      @media screen and (max-width: 500px) {
        width: 90%;
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
      }
    }
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
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      margin: 30px auto;

      .product {
        width: 31%;
        height: fit-content;
        padding-top: 0;
        padding-bottom: 20px;
        position: relative;
        border-radius: 1px;
        overflow: hidden;
        border: 1px solid rgb(234, 236, 245);
        cursor: pointer;
        transition: all 0.3s ease-in;

        .wrapper {
          width: 100%;
          height: 350px;
          overflow: hidden;
          position: relative;

          .blur-wrapper {
            display: none;
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
            height: 100%;
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

          h2 {
            text-transform: capitalize;
            text-align: center;
            font: 500 17px "Nunito Sans", sans-serif;
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
            margin: 0 auto;
            border-bottom: 3px solid rgb(235, 154, 3);
            font: 600 16px "Poppins", sans-serif;
            width: max-content;
            height: max-content;
            color: rgb(19, 16, 13);
            transition: all 0.3s ease;

            &:hover {
              border: none;
              background: rgb(238, 184, 7);
              padding: 10px 20px;
              border-radius: 2px;
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
          transform: translateY(-10px);
          box-shadow: 0 0 16px 5px rgb(224, 227, 235);

          .blur-wrapper {
            display: block;
            opacity: 0.2;
          }

          .image {
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 100%;
              height: auto;
            }
          }

          .info {
            display: flex;
            animation: slideUp 0.5s 1 linear alternate forwards;
          }
        }

        @media screen and (max-width: 900px) {
          width: 44%;

          @media screen and (max-width: 600px) {
            width: 100%;
          }
        }
      }

      @keyframes slideUp {
        from {
          transform: translateY(50px);
        }

        to {
          transform: translateY(0px);
        }
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
  background: rgb(177, 176, 176);
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
</style>
