<template>
  <div class="appointment-container">
    <Head>
      <Title>BISCAM || Appointment</Title>
    </Head>
    <div class="header-component"></div>
    <div class="appointment-wrapper">
      <form @submit="(e) => e.preventDefault()">
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
            <select
              v-model="appointmentBody.userService"
              id="appointment-category"
              placeholder="Choose Service"
              name="appointmentService"
            >
              <option
                v-for="(service, index) in services"
                :key="index"
                :value="service.value"
                :disabled="service.disabled ? service.disabled : false"
              >
                {{ service.label }}
              </option>
            </select>
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

        <div class="form-preview" v-if="confirm">
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
            appointment date: <span>{{ appointmentBody.date }}</span>
          </p>

          <p>
            appointment for: <span>{{ appointmentBody.userService }}</span>
          </p>
          <p class="full-width">
            message: <span>{{ appointmentBody.message }}</span>
          </p>
        </div>
        <div class="form-buttons">
          <el-button class="form-button" @click="phaseOne" v-if="stepOne">
          </el-button>

          <el-button
            class="form-button form-prev-button"
            v-if="stepTwo"
            @click="
              ($event) => {
                (stepOne = true), (stepTwo = false), (confirm = false);
              }
            "
          ></el-button>
          <el-button
            class="form-button"
            @click="phaseTwo"
            v-if="stepTwo"
          ></el-button>
          <el-button
            class="form-button form-prev-button"
            v-if="confirm"
            @click="
              ($event) => {
                (stepOne = false), (stepTwo = true), (confirm = false);
              }
            "
          ></el-button>
          <el-button
            class="form-button confirm"
            @click="submitForm"
            v-if="confirm"
          ></el-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
const router = useRouter();
const active = ref(0);
const stepOne = ref(true);
const stepTwo = ref(false);
const confirm = ref(false);
const loader = useLoaderState();

const appointmentBody = reactive({
  name: "",
  email: "",
  tel: "",
  userService: "",
  date: "",
  message: "",
});

const services = ref([
  {
    value: "",
    label: "choose service",
    disabled: true,
  },
  {
    value: "Maritime",
    label: "Maritime",
  },
  {
    value: "flight",
    label: "flight",
  },
  {
    value: "Car Repair",
    label: "Car Repair",
  },
  {
    value: "Cleaning Agency",
    label: "Cleaning Agency",
  },
]);

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
  loader.value = true;

  axios
    .post("/api/appointment", appointmentBody)
    .then((res) => {
      if (200 <= res.status && res.status < 400) {
        loader.value = false;
        setTimeout(() => {
          ElMessageBox.alert(
            "Your appointment request has been submitted successfully. Anticipate a reply from us any time soon.",
            "Appointment Submitted",
            {
              // if you want to disable its autofocus
              // autofocus: false,
              confirmButtonText: "Homepage",
              callback: () => {
                router.push("/");
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
        }, 1000);
      }
    })
    .catch((err) => {
      loader.value = false;
      setTimeout(() => {
        ElMessageBox.alert(
          "Your appointment request has not been submitted . Try Again ",
          "Appointment Failed",
          {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: "OK",
            callback: () => {
              router.push("/appointment");

              stepOne.value = true;
              stepTwo.value = false;
              confirm.value = false;
            },
          }
        );
      }, 1000);

      return err;
    });
};
</script>
<style lang="scss" scoped>
.appointment-container {
  width: 100%;
  height: fit-content;
  background: rgb(244, 244, 244);
  animation: popUp 1s 1 linear alternate forwards;

  .header-component {
    height: 13vh;
    width: 100%;
    background: rgb(16, 48, 110);
  }

  .appointment-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    form {
      width: 90%;
      height: fit-content;
      background: rgb(244, 244, 244);
      border-radius: 5px;
      padding: 10px 20px;
      position: relative;
      z-index: 1;

      h1 {
        text-transform: uppercase;
        padding: 20px 10px;
        font: 900 30px "Montserrat", sans-serif;
      }
      h2 {
        text-transform: capitalize;
        font: 700 21px "Montserrat", "Nunito Sans", sans-serif;
      }

      .form-wrapper {
        width: 100%;
        height: fit-content;

        .form-data {
          width: 70%;
          height: fit-content;
          margin: 20px auto;

          label {
            display: block;
            text-align: left;
            padding: 3px;
            font: 400 16px "Montserrat", "Nunito Sans", sans-serif;
            text-transform: capitalize;
          }

          input,
          select {
            width: 100%;
            height: 45px;
            margin: 15px auto;
            border: none;
            border-bottom: 1px solid rgb(196, 196, 196);
            box-shadow: 0 0 17px 4px rgb(210, 210, 210);
            display: block;
            text-align: left;
            outline: none;
            padding: 5px 10px;
            border-radius: 3px;

            &:hover {
              border-right: 10px solid orange;
              border-bottom: 1px solid #d4a20b;
              border-left: 3px solid orange;
              box-shadow: 0 0 10px 7px rgb(231, 231, 231);
            }
            &:active,
            &:focus {
              border: 1px solid rgb(247, 168, 23);
              border-right: 10px solid orange;

              border-left: 3px solid orange;
            }
            @media screen and (max-width: 768px) {
              width: 100%;
            }
          }
          textarea {
            width: 100%;
            height: 150px;
            border: none;
            text-align: left;
            outline: none;
            border: 1px solid rgb(169, 167, 167);
            padding: 15px 0 15px 10px;

            &:hover {
              border-right: 10px solid orange;
              border-bottom: 1px solid #d4a20b;
              border-left: 3px solid orange;
              box-shadow: 0 0 10px 7px rgb(231, 231, 231);
              height: 170px;
            }
            &:active,
            &:focus {
              border: 1px solid rgb(247, 168, 23);
              border-right: 10px solid orange;
              height: 190px;
              border-left: 3px solid orange;
            }
          }

          ::-webkit-input-placeholder {
            text-transform: capitalize;
            color: rgb(103, 103, 103);
          }

          @media screen and (max-width: 768px) {
            width: 90%;
          }
        }
      }

      .form-preview {
        width: 90%;
        height: fit-content;
        // background: rgb(255, 255, 255);
        // box-shadow: 0 0 17px 6px rgb(212, 211, 211);
        margin: 20px auto;
        border-radius: 5px;
        padding: 20px;
        p {
          max-width: 100%;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-items: flex-start;
          background: white;
          gap: 20px;
          text-align: left;
          text-transform: capitalize;
          color: rgb(214, 140, 3);
          margin-bottom: 20px;
          padding: 20px;
          font-size: 17px;
          box-shadow: 0 0 18px 10px rgb(227, 225, 225);

          span {
            font-weight: 500;
            text-transform: none;
            color: rgb(8, 42, 61);
            font-size: 21px;
            padding-left: 10px;
            white-space: pre-wrap;
          }

          @media screen and (max-width: 500px) {
            font-size: 16px;
            span {
              font-size: 16px;
            }
          }
        }
        p.full-width {
          width: 100%;
          flex-direction: column;
        }

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
      .form-buttons {
        width: 70%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        margin: 20px auto;
        .form-button {
          width: 45%;
          height: 55px;
          border-radius: 50px;
          color: white;
          box-shadow: 0 0 17px 6px rgb(215, 213, 213);
          text-transform: capitalize;
          transition: all 0.3s ease;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: row-reverse;
          gap: 10px;
          padding: 0;
          margin: 0;
          background: white;

          @media screen and (max-width: 768px) {
            width: 95%;
            height: 60px;
            margin: 20px auto;
            font-size: 1.2em;
          }

          &::before {
            content: "next step";
            height: 100%;
            width: 100%;
            border-radius: 50px;
            background: rgb(197, 124, 8);
            box-shadow: 15px 0 17px 6px rgb(212, 212, 212);
            color: white;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;
            font: 600 20px "Montserrat", sans-serif;
            border: none;
            transition: all 0.3s ease;
          }
          &:hover {
            &::before {
              border: none;
              animation: sliceBg 0.4s 1 alternate forwards;
            }
          }
        }

        .form-button.confirm {
          &::before {
            content: "confirm booking";
          }
        }

        @keyframes sliceBg {
          to {
            width: 80%;
          }
        }

        .form-button.form-prev-button {
          border-radius: 50px;
          flex-direction: row;

          &::before {
            content: "previous step";
            border-radius: 50px;
            box-shadow: -17px 0 17px 6px rgb(221, 220, 220);
          }
        }

        @media screen and (max-width: 768px) {
          width: 90%;
        }
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        padding: 20px 10px;
      }
    }
  }
}
</style>