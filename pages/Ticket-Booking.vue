<template>
  <div class="flight-main">
    <Head>
      <Title>Ticket Booking || BISCAM</Title>
    </Head>
    <div class="main-wrapper">
      <div class="ticket-container">
        <div class="ticket-wrapper" v-loading="loader">
          <h1>book a flight</h1>
          <form @submit="($event) => handleSubmit">
            <el-steps :active="active" finish-status="success">
              <el-step title="Step 1" />
              <el-step title="Step 2" />
              <el-step title="Step 3" />
            </el-steps>
            <p>
              Flight prices fluctuate each time. We will communicate flight cost
              to you via your email or Phone.
            </p>
            <div class="form-wrapper" v-if="stepOne">
              <!-- <div class="form-data">
                <label for="test"> test:</label>
                <div class="form-input">
                  <label for="test">
                    <i class="fa-solid fa-location-dot"></i></label
                  ><input
                    type="search"
                    name="test"
                    v-model="searchQuery"
                    @input="filterResult"
                    id="test"
                    placeholder="enter test sentence..."
                  />
                </div>
                <div class="results-wrapper" v-if="searchQuery.length">
                  <div class="results">
                    <li
                      v-for="item in options"
                      :key="item"
                      @click="searchQuery = item"
                    >
                      {{ item }}
                    </li>
                  </div>
                </div>
              </div> -->
              <div class="form-data">
                <label for="departure" class="label">departure:</label>
                <div class="form-input">
                  <label for="departure"
                    ><i class="fa-solid fa-plane"></i
                  ></label>
                  <select
                    v-model="ticketBody.departure"
                    id="departure"
                    class="form-select"
                    placeholder="Origin"
                  >
                    <option
                      v-for="item in options"
                      :key="item"
                      :label="item"
                      :value="item"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-data">
                <label for="destination" class="label">destination:</label>
                <div class="form-input">
                  <label for="destination">
                    <i class="fa-solid fa-location-dot"></i>
                  </label>
                  <select
                    v-model="ticketBody.destination"
                    id="destination"
                    placeholder="Destination"
                    size="large"
                    class="form-select"
                  >
                    <option
                      v-for="item in options"
                      :key="item"
                      :label="item"
                      :value="item"
                    />
                  </select>
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
                <label for="name">name</label>
                <div class="form-input">
                  <label for="name"><i class="fa-solid fa-user"></i></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="ticketBody.name"
                    placeholder="Enter Full Name..."
                    required
                  />
                </div>
              </div>
              <div class="form-data">
                <label for="email">email</label>
                <div class="form-input">
                  <label for="email"
                    ><i class="fa-solid fa-envelope"></i
                  ></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    v-model="ticketBody.email"
                    placeholder="Enter Email address..."
                  />
                </div>
              </div>
              <div class="form-data">
                <label for="tel">tel</label>
                <div class="form-input">
                  <label for="tel"><i class="fa-solid fa-phone"></i></label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    v-model="ticketBody.tel"
                    placeholder="Enter Phone Number..."
                  />
                </div>
              </div>
              <div class="form-data textarea">
                <label for="message">message</label>
                <div class="form-input">
                  <label for="message"><i class="fa-solid fa-pen"></i></label>
                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    v-model="ticketBody.message"
                    placeholder="More Info concerning flight..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="form-wrapper" v-if="confirm">
              <h2>check your info before submitting</h2>
              <h4>
                Flight rates fluctuate always. We'll send you an email with the
                cost or get to you on phone. STay connected.
              </h4>
              <h2>personal info</h2>
              <p>
                Name: <span>{{ ticketBody.name }}</span>
              </p>
              <p>
                Email: <span>{{ ticketBody.email }}</span>
              </p>
              <p>
                Tel: <span>{{ ticketBody.tel }}</span>
              </p>

              <h2>Flight Ticket Details</h2>
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
              <h4>More Info</h4>
              <p>{{ ticketBody.message }}</p>
            </div>

            <el-button @click="phaseOne()" v-if="stepOne" class="form-button"
              >Next step <i class="fa-solid fa-forward"></i
            ></el-button>
            <el-button
              @click="
                ($event) => {
                  (stepOne = true), (stepTwo = false), (confirm = false);
                }
              "
              v-if="stepTwo"
              class="form-button"
              >prev step <i class="fa-solid fa-backward"></i
            ></el-button>
            <el-button @click="phaseTwo()" v-if="stepTwo" class="form-button"
              >Next step <i class="fa-solid fa-forward"></i
            ></el-button>
            <el-button
              @click="
                ($event) => {
                  (stepOne = false), (stepTwo = true), (confirm = false);
                }
              "
              v-if="confirm"
              class="form-button"
              >prev step <i class="fa-solid fa-backward"></i
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
  </div>
</template>

<script setup>
const ticketBody = reactive({
  name: "",
  email: "",
  tel: "",
  destination: "",
  departure: "",
  departureDate: "",
  returnDate: "",
  passangers: 1,
  message: "",
});
const loader = useLoaderState();
const options = ref([]);
const stepOne = ref(true);
const stepTwo = ref(false);
const confirm = ref(false);
const active = ref(0);
// const searchQuery = ref("");

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
    })
    .catch(function (error) {
      return error;
    });
});

// const handleSubmit = (e) => {
//   e.preventDefault();
// };

// const filterResult = (e) => {
//   searchQuery.value = e.target.value;

//   if (searchQuery.value !== " ") {
//     options.value = options.value.filter((item) =>
//       item.includes(searchQuery.value)
//     );

//   } else return options.value;
// };

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
  loader.value = true;
  stepOne.value = true;
  stepTwo.value = false;
  confirm.value = false;
  active.value = 0;

  axios
    .post("http://localhost:9005/api/flight/booking", ticketBody)
    .then((res) => {
      loader.value = false;

      ElNotification.success({
        title: "Flight Booking successful",
        message:
          "We will get back to you with more details. Redirecting to homepage....",
        offset: 100,
      });
      navigateTo("/");
    })
    .catch((err) => {
      loader.value = false;
      err;
      ElNotification.error({
        title: "Booking failed",
        message: "check your connection and try again...",
        offset: 100,
      });
    });
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
              position: relative;

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
                textarea .el-input__wrapper {
                  width: 100%;
                  height: 45px;
                  outline: none;
                  padding: 10px 15px;
                  font-family: "Nunito sans", sans-serif;
                  color: rgb(58, 57, 57);
                  box-shadow: none;
                  text-align: left;
                }
              }

              .form-select {
                width: 100%;
                height: 45px;
                border: 1px solid rgb(232, 232, 232);

                label {
                  height: 100%;
                  width: 30%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-right: 1px solid rgb(236, 231, 231);
                }

                input {
                  height: 100%;
                  width: 70%;
                  text-align: left;
                }
              }

              .results-wrapper {
                position: relative;
                width: 100%;
                height: 40px;
              }

              .results {
                position: absolute;
                top: 2px;
                left: 0;
                z-index: 1;
                background-color: white;
                // border: 1px solid gray;
                height: 200px;
                width: 100%;
                border-radius: 5px;
                overflow-y: scroll;
                box-shadow: 0 7px 10px 4px rgb(226, 226, 226);

                li {
                  color: black;
                  width: 100%;
                  padding: 7px;
                  text-align: left;
                  list-style-type: none;
                  cursor: pointer;
                  list-style-position: inside;

                  &:hover {
                    background: rgb(3, 47, 104);
                    color: white;
                  }
                }
              }

              @media screen and (max-width: 800px) {
                width: 90%;
              }
            }

            .form-data.textarea {
              width: 80%;
              height: 200px;

              .form-input {
                height: 200px;
                align-items: flex-start;
                label {
                  height: 50px;
                  text-align: left;
                }
                textarea {
                  width: 100%;
                  height: 100%;
                  border: none;
                  outline: none;
                  padding: 20px;
                }
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