<template>
  <div class="flight-main">
    <div class="main-wrapper">
      <div class="ticket-container">
        <div class="ticket-wrapper">
          <h1>book a flight</h1>
          <form @submit="($event) => handleSubmit">
            <el-steps :active="active" finish-status="success">
              <el-step title="Step 1" />
              <el-step title="Step 2" />
              <el-step title="Step 3" />
            </el-steps>
            <div class="form-wrapper" v-if="stepOne">
              <div class="form-data">
                <label for="departure" class="label">departure:</label>
                <div class="form-input">
                  <label for="departure"
                    ><i class="fa-solid fa-plane"></i
                  ></label>
                  <input
                    type="search"
                    name="searchCountry"
                    id="searchCountry"
                    @change="filterCountry"
                  />

                  <el-select
                    v-model="ticketBody.departure"
                    id="departure"
                    placeholder="Origin"
                    size="large"
                    class="form-select"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item"
                      :label="item"
                      :value="item"
                    />
                  </el-select>
                </div>
              </div>
              <div class="form-data">
                <label for="destination" class="label">destination:</label>
                <div class="form-input">
                  <label for="destination">
                    <i class="fa-solid fa-location-dot"></i>
                  </label>
                  <el-select
                    v-model="ticketBody.destination"
                    id="destination"
                    placeholder="Destination"
                    size="large"
                    class="form-select"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item"
                      :label="item"
                      :value="item"
                    />
                  </el-select>
                </div>
              </div>
              <div class="form-data">
                <label for="departure-date" class="label"
                  >departure-date:</label
                >
                <div class="form-input">
                  <label for="departure-date"
                    ><i class="fa-regular fa-calendar-days"></i
                  ></label>
                  <input
                    type="date"
                    name="departure-date"
                    id="departure-date"
                    placeholder="Departure Date"
                    v-model="ticketBody.departureDate"
                  />
                </div>
              </div>
              <div class="form-data">
                <label for="return-date" class="label">return-date:</label>
                <div class="form-input">
                  <label for="return-date"
                    ><i class="fa-regular fa-calendar-days"></i
                  ></label>
                  <input
                    type="date"
                    name="return-date"
                    id="return-date"
                    placeholder="Return Date"
                    v-model="ticketBody.returnDate"
                    required
                  />
                </div>
              </div>
              <div class="form-data">
                <label for="passangers" class="label">passangers</label>
                <div class="form-input">
                  <label for="passangers"
                    ><i class="fa-solid fa-person-walking-luggage"></i
                  ></label>
                  <input
                    type="number"
                    name="passangers"
                    min="1"
                    id="passangers"
                    placeholder="Departure Date"
                    v-model="ticketBody.passangers"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="form-wrapper" v-if="stepTwo">
              <div class="form-data">
                <label for="date">date</label>
                <div class="form-input">
                  <label for="date"><i class="fa-solid fa-date"></i></label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Select Date"
                    required
                  />
                </div>
              </div>
              <div class="form-data">
                <label for="time">time</label>
                <div class="form-input">
                  <label for="time"><i></i></label>
                </div>
                <input
                  type="time"
                  name="time"
                  id="time"
                  placeholder="Select Time"
                />
              </div>
            </div>

            <div class="form-wrapper" v-if="confirm">
              <h2>check your info before submitting</h2>
              <p>
                Departure: <span>{{ ticketBody.departure }}</span>
              </p>
              <p>
                Destination: <span> {{ ticketBody.destination }}</span>
              </p>
              <p>
                Departure Date: <span>{{ ticketBody.departureDate }}</span>
              </p>
              <p>
                Return Date: <span>{{ ticketBody.returnDate }}</span>
              </p>
              <p>
                Passangers: <span>{{ ticketBody.passangers }}</span>
              </p>
            </div>

            <el-button @click="phaseOne()" v-if="stepOne" class="form-button"
              >Next step <i class="fa-solid fa-forward"></i
            ></el-button>
            <el-button @click="phaseTwo()" v-if="stepTwo" class="form-button"
              >Next step <i class="fa-solid fa-forward"></i
            ></el-button>
            <el-button @click="submitForm()" v-if="confirm" class="form-button"
              >confirm booking <i class="fa-solid fa-circle-check"></i
            ></el-button>
          </form>
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
          </div>
        </div>
      </div>
    </div>
    <div class="contact-container">
      <contactForm
        whatsappLink="https://wa.link/290wme"
        whatsappTel="+237654213803"
        tel="+237683079785"
        email="biscamflight@gmail.com"
      />
    </div>
  </div>
</template>

<script setup>
const ticketBody = reactive({
  destination: "",
  departure: "",
  departureDate: "",
  returnDate: "",
  passangers: 1,
});

const options = ref([]);
const stepOne = ref(true);
const stepTwo = ref(false);
const confirm = ref(false);
const active = ref(0);

import axios from "axios";

const requestOptions = {
  method: "GET",
  url: "https://restcountries.com/v3.1/all",
};

onMounted(() => {
  axios
    .request(requestOptions)
    .then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        options.value.push(response.data[i].name.common);
      }

      options.value = options.value.sort();

      console.log(options.value);
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
const filterCountry = (e) => {
  console.log(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const phaseOne = (e) => {
  if (
    ticketBody.departure != "" &&
    ticketBody.destination != "" &&
    ticketBody.departureDate != "" &&
    ticketBody.returnDate != "" &&
    ticketBody.passangers >= 1
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
      title: "warning",
      message: "fill in the form correctly dude",
      offset: 100,
    });
  }
};

const phaseTwo = (e) => {
  confirm.value = true;
  stepOne.value = false;
  stepTwo.value = false;
  active.value = 2;
};

const submitForm = (e) => {
  stepOne.value = true;
  stepTwo.value = false;
  confirm.value = false;
  active.value = 0;
};
</script>

<style lang="scss" scoped>
.flight-main {
  width: 100vw;
  height: fit-content;

  .main-wrapper {
    width: 100%;
    height: fit-content;
    background: url(../assets/flight/airport-terminal.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    .ticket-container {
      width: 100%;
      height: fit-content;
      padding-top: 12vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;

      .ticket-wrapper {
        width: 85%;
        height: fit-content;

        h1 {
          padding: 10px 20px;
          font: 600 35px "Montserrat", "Nunito Sans", sans-serif;
          text-transform: capitalize;
          color: rgb(14, 41, 62);
          text-align: left;
        }

        form {
          width: 90%;
          height: fit-content;
          background: white;
          border-radius: 1px;
          padding: 30px 20px;
          position: relative;
          z-index: 1;
          margin: 0 auto;
          border-radius: 5px;

          h1 {
            text-transform: uppercase;
            padding: 20px 10px;
            font: 700 35px "Montserrat", sans-serif;
          }

          .form-wrapper {
            width: 100%;
            height: fit-content;

            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;

            h2 {
              text-transform: capitalize;
            }

            p {
              display: block;
              width: 90%;
              text-align: left;
              span {
                font-weight: bolder;
                font-size: 1.1em;
              }
            }
            .form-data {
              width: 300px;
              height: fit-content;

              .label {
                display: block;
                text-align: left;
                padding: 5px 0;
                text-transform: capitalize;
                color: rgb(63, 63, 63);
                font-family: "Nunito Sans", sans-serif;
              }

              .form-input {
                width: 100%;
                height: 45px;
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border: 1px solid rgb(201, 201, 201);
                border-radius: 4px;

                label {
                  width: 60px;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
                  border-right: 1px solid rgb(236, 236, 236);
                  background: white;

                  i {
                    color: rgb(170, 170, 170);
                  }

                  &:hover {
                    background: rgb(235, 235, 235);
                    transform: none;
                  }
                }

                input,
                select,
                .el-input__wrapper {
                  width: 100%;
                  height: 45px;
                  outline: none;
                  padding: 10px 15px;
                  font-family: "Nunito sans", sans-serif;
                  color: rgb(58, 57, 57);
                  box-shadow: none;
                }
              }

              @media screen and (max-width: 800px) {
                width: 90%;
              }
            }
          }

          .form-button {
            width: 200px;
            height: 50px;
            background: rgb(21, 62, 95);
            color: white;
            margin-top: 20px;

            i {
              display: none;
              padding-left: 10px;
            }

            &:hover {
              i {
                display: flex;
                color: white;
                animation: next 0.7s infinite linear alternate forwards;
              }
            }
          }
        }

        @keyframes next {
          from {
            transform: translateX(0px);
          }

          to {
            transform: translateX(10px);
          }
        }

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }

      .payment-methods {
        width: 100%;
        min-height: 30vh;
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
        }
      }
    }
  }
}
</style>