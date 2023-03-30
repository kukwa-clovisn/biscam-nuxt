<template>
  <div class="appointment-container">
    <div class="appointment-wrapper">
      <form @submit="event.preventDefault()" ref="formdata">
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
          <div class="form-data">
            <label for="time">time</label>

            <input
              type="date"
              name="appointmentTime"
              v-model="appointmentBody.time"
              placeholder="Select Date and Time"
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
            appointment time : <span>{{ appointmentBody.time }}</span>
          </p>
          <p>
            appointment for: <span>{{ appointmentBody.userService }}</span>
          </p>
          <p class="full-width">
            message: <span>{{ appointmentBody.message }}</span>
          </p>
        </div>
        <div class="form-buttons">
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
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import emailjs from "@emailjs/browser";
const router = useRouter();
const active = ref(0);
const stepOne = ref(true);
const stepTwo = ref(false);
const confirm = ref(false);
const formdata = ref(null);

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

  var templateParams = {
    name: "codingherald",
    notes: "texting email js api",
  };

  emailjs
    .send(
      "service_ep4i5d9",
      "template_p18qg84",
      templateParams,
      "GnFR9bf1unlodMFZG"
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);

        ElMessageBox.alert(
          "Your appointment request has been submitted successfully. Anticipate a reply from us any time soon.",
          "Appointment Submitted",
          {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: "OK",
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
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
</script>
<style lang="scss" scoped>
.appointment-container {
  width: 100%;
  height: fit-content;
  padding-top: 14vh;
  background: rgb(255, 255, 255);
  animation: popUp 1s 1 linear alternate forwards;

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
      background: white;
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
        font: 700 19px "Montserrat", "Nunito Sans", sans-serif;
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
            border-bottom: 1px solid rgb(169, 167, 167);
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

          @media screen and (max-width: 768px) {
            width: 90%;
          }
        }
      }

      .form-preview {
        width: 70%;
        height: fit-content;
        background: rgb(234, 232, 232);
        margin: 20px auto;
        border-radius: 5px;
        padding: 20px;
        p {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          text-transform: capitalize;
          color: rgb(39, 39, 39);
          margin: 25px 10px;
          font-size: 19px;

          span {
            font-weight: 700;
            text-transform: none;
            color: rgb(26, 26, 26);
            font-size: 20px;
            padding-left: 20px;
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
          width: 46%;
          height: 45px;
          border-radius: 30px;
          color: white;
          text-transform: capitalize;
          transition: all 0.3s ease;
          background: repeating-linear-gradient(
            to bottom right,
            rgb(26, 84, 135),
            rgb(6, 46, 105),
            rgb(20, 67, 132)
          );

          @media screen and (max-width: 768px) {
            width: 95%;
            height: 60px;
            margin: 20px auto;
            font-size: 1.2em;
          }
        }
        .form-button.form-prev-button {
          background: repeating-linear-gradient(
            to bottom right,
            rgb(193, 126, 3),
            rgb(221, 144, 2)
          );
        }

        @media screen and (max-width: 768px) {
          width: 90%;
        }
      }
    }
  }
}
</style>