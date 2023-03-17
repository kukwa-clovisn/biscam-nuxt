<template>
  <div class="main">
    <div class="main-wrapper">
      <div class="ticket-container">
        <div class="ticket-wrapper">
          <h1>book a flight</h1>
          <form @submit="event.preventDefault()">
            <el-steps :active="active" finish-status="success">
              <el-step title="Step 1" />
              <el-step title="Step 2" />
              <el-step title="Step 3" />
            </el-steps>
            <div class="form-wrapper" v-if="stepOne">
              <div class="form-data">
                <label for="name" class="label">departure:</label>
                <div class="form-input">
                  <label for="departure"><i class="fa-solid fa-plane"></i></label>
                  <input name="departure" type="text" placeholder="Origin" required />
                </div>
              </div>
              <div class="form-data">
                <label for="destination" class="label">destination:</label>
                <div class="form-input">
                  <label for="destination">
                    <i class="fa-solid fa-location-dot"></i>
                  </label>
                  <input type="text" name="destination" id="destination" placeholder="Enter Your destination" required />
                </div>
              </div>
              <div class="form-data">
                <label for="departure-date" class="label">departure-date:</label>
                <div class="form-input">
                  <label for="departure-date"><i class="fa-regular fa-calendar-days"></i></label>
                  <input type="date" name="departure-date" id="departure-date" placeholder="Departure Date" />
                </div>
              </div>
              <div class="form-data">
                <label for="return-date" class="label">return-date:</label>
                <div class="form-input">
                  <label for="return-date"><i class="fa-regular fa-calendar-days"></i></label>
                  <input type="date" name="return-date" id="return-date" placeholder="Return Date" />
                </div>
              </div>
              <div class="form-data">
                <label for="passangers" class="label">passangers</label>
                <div class="form-input">
                  <label for="passangers"><i class="fa-solid fa-person-walking-luggage"></i></label>
                  <input type="number" name="passangers" min="1" id="passangers" placeholder="Departure Date" />
                </div>
              </div>
            </div>

            <div class="form-wrapper" v-if="stepTwo">
              <div class="form-data">
                <label for="date">date</label>
                <input type="date" name="date" id="date" placeholder="Select Date" required />
              </div>
              <div class="form-data">
                <label for="time">time</label>
                <input type="time" name="time" id="time" placeholder="Select Time" />
              </div>
            </div>

            <div class="form-wrpper" v-if="confirm">
              <h2>check your info before submitting</h2>
              <p>Name:</p>
              <p>email:</p>
              <p>tel:</p>
              <p>date:</p>
              <p>time:</p>
            </div>

            <el-button style="margin-top: 12px" @click="next" v-if="stepOne" class="form-button">Next step <i
                class="fa-solid fa-forward"></i></el-button>
            <el-button style="margin-top: 12px" @click="next" v-if="stepTwo" class="form-button">Next step <i
                class="fa-solid fa-forward"></i></el-button>
            <el-button style="margin-top: 12px" @click="next" v-if="confirm" class="form-button">confirm booking <i
                class="fa-solid fa-circle-check"></i></el-button>
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
const stepOne = ref(true);
const stepTwo = ref(false);
const confirm = ref(false);
const active = ref(0);

const next = () => {
  if (active.value++ > 2) {
    active.value = 0;
    stepOne.value = false;
    stepTwo.value = true;
    confirm.value = false;
  } else if (stepTwo.value) {
    confirm.value = true;
    stepOne.value = false;
    stepTwo.value = false;
  } else if (confirm.value) {
    stepOne.value = true;
    stepTwo.value = false;
    confirm.value = false;
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: fit-content;

  .main-wrapper {
    width: 100%;
    height: fit-content;
    padding: 30px 0;
    padding-bottom: 0;
    background: url(../assets/flight/airport-terminal.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    .ticket-container {
      width: 100%;
      height: fit-content;

      .ticket-wrapper {
        width: 85%;
        height: fit-content;
        margin: 10px auto;

        h1 {
          padding: 20px;
          font: 600 40px "Montserrat", "Nunito Sans", sans-serif;
          text-transform: capitalize;
          color: rgb(240, 241, 241);
          text-align: left;
        }

        form {
          width: 100%;
          height: fit-content;
          background: white;
          border-radius: 1px;
          padding: 30px 20px;
          position: relative;
          z-index: 1;

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

                input {
                  width: 100%;
                  height: 45px;
                  outline: none;
                  border: none;
                  padding: 10px 15px;
                  font-family: "Nunito sans", sans-serif;
                  color: rgb(58, 57, 57);
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