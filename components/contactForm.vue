<template>
  <div class="contact-wrapper">
    <div class="blur-wrapper"></div>
    <h1 class="heading-1">
      make business with us! <i class="fa-solid fa-arrow-down"></i>
    </h1>
    <div class="content">
      <form class="contact-form" id="contact">
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
        <div class="form-data-wrapper">
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
          <div class="form-data full-width">
            <label for="message">message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Leave a message...."
              required
            ></textarea>
          </div>
          <div class="form-button full-width">
            <button type="submit" class="hover-animation">submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  whatsappLink: String,
  whatsappTel: String,
  tel: String,
  email: String,
});
</script>

<style lang="scss" scoped>
.contact-wrapper {
  width: 100%;
  height: fit-content;
  margin: 0;
  background: #0e066a;
  padding: 30px 0;
  padding-bottom: 0;
  background: url(../assets/flight/team-work.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .heading-1 {
    color: white;
    text-transform: capitalize;
    font-weight: 600;
    position: relative;

    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
    padding: 0;

    .contact-form {
      width: 80%;
      height: fit-content;
      padding: 20px 0;

      p {
        text-transform: capitalize;
        padding: 20px 10px;
        color: rgb(220, 220, 220);
        font: 600 17px "Montserrat", "Poppins", sans-serif;
      }

      .direct-contacts {
        width: 90%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        margin: 20px auto;

        a {
          text-decoration: none;
          color: rgb(253, 253, 253);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 5px;
          font: 500 12px "Montserrat", "Nunito Sans", sans-serif;
          padding: 5px;

          &:hover {
            border-bottom: 3px solid rgb(208, 137, 5);
            color: rgb(252, 232, 188);
          }
        }
        @media screen and (max-width: 600px) {
          width: 100%;
          a {
            font-size: 9px;
          }
        }
      }
      .form-data-wrapper {
        width: 90%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
      .form-data {
        width: 47%;
        height: fit-content;
        margin-bottom: 10px;

        label {
          padding: 10px 20px 4px 2px;
          text-transform: capitalize;
          font-weight: 600;
          color: rgb(234, 234, 234);
          text-align: left;
          margin: 0;
          display: block;
        }

        input {
          width: 100%;
          height: 45px;
          outline: none;
          text-align: left;
          border: none;
          border-bottom: 1px solid rgb(187, 187, 187);
          display: block;
          margin: 0;
          font-size: 15px;
          background: transparent;
          color: rgb(203, 201, 201);
          font-weight: 500;
          &:hover {
            border-left: 5px solid rgb(10, 103, 232);
          }
          &:active {
            border-left: 5px solid rgb(239, 101, 2);
          }
          &:focus {
            background: white;
            padding: 0 10px;
            color: rgb(28, 28, 28);
            border-left: 5px solid orange;
          }
        }

        textarea {
          width: 100%;
          height: 50px;
          padding: 20px 0;
          outline: none;
          text-align: left;
          font-size: 16px;
          border-radius: 2px;
          color: rgb(232, 232, 232);
          background: transparent;
          border: none;
          border-bottom: 1px solid rgb(229, 229, 229);

          &:hover {
            height: 80px;
          }

          &:active,
          &:focus {
            background: white;
            color: rgb(28, 28, 28);
            padding: 0 10px;
            height: 100px;
          }
        }

        @media screen and (max-width: 600px) {
          width: 100%;
        }
      }

      .full-width {
        width: 100%;
      }

      .form-button {
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px auto;

        button {
          width: 100%;
          height: 50px;
          padding: 0 10px;
          cursor: pointer;
          border-radius: 32px;
          font-size: 17px;
          text-transform: uppercase;
          padding: 5px;
          position: relative;
          overflow: hidden;
          border: none;
          background: transparent;
          border: 1px solid white;
          color: white;

          &:hover {
            transform: none;
            background: rgb(218, 145, 0);
            color: white;
            border: none;
          }
        }
      }
    }

    @media screen and (max-width: 900px) {
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
  }
}
</style>