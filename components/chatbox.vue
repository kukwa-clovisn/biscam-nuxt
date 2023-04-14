<template>
  <div
    :class="[
      { active: openchat },
      { inactive: !openchat },
      'chatbox-container',
    ]"
  >
    <div class="chat-header">
      <h1>biscam investment sarl</h1>
      <span @click="openchat = false">&times;</span>
    </div>
    <div class="chatbox-wrapper">
      <h2>leave us a message</h2>
      <form>
        <div class="form-data">
          <label for="name">name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter Your Name..."
          />
        </div>
        <div class="form-data">
          <label for="email">email</label
          ><input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter Email..."
          />
        </div>
        <div class="form-data">
          <label for="message">Message</label
          ><textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
            placeholder="Leave A Message..."
          ></textarea>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const openchat = openChat();
</script>

<style lang="scss" scoped>
.chatbox-container {
  width: 350px;
  height: 480px;
  position: fixed;
  right: 2%;
  bottom: 10%;
  background: rgb(228, 145, 3);
  border-radius: 5px;
  z-index: 890;
  overflow: hidden;
  box-sizing: border-box;

  .chat-header {
    width: 100%;
    height: 75px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h1 {
      font: 600 17px "Montserrat", sans-serif;
      color: rgb(255, 255, 255);
      text-transform: uppercase;
    }
    span {
      font-size: 40px;
      color: white;
      cursor: pointer;
      position: absolute;
      top: 2%;
      right: 2%;
    }
  }

  .chatbox-wrapper {
    width: 94%;
    height: 390px;
    padding: 10px;
    margin: 0 auto;
    border-radius: 5px;
    background: rgb(255, 255, 255);
    box-sizing: border-box;

    h2 {
      font: 400 14px "Montserrat", sans-serif;
      text-align: left;
      text-transform: capitalize;
      color: rgb(84, 82, 82);
      padding: 0 10px;
    }

    form {
      width: 100%;
      height: fit-content;
      padding: 10px;

      .form-data {
        width: 100%;
        margin: 12px auto;

        label {
          display: block;
          text-transform: capitalize;
          text-align: left;
          font-size: 12px;
          padding: 2px 0;
        }
        input,
        textarea {
          display: block;
          width: 100%;
          padding: 2px 5px;
          padding-left: 10px;
          border: none;
          background: rgb(255, 255, 255);
          height: 30px;
          outline: none;
          text-align: left;
          box-shadow: 0 0 10px 4px rgb(231, 229, 229);
        }
        textarea {
          height: 100px;
        }
      }
      button {
        width: 80%;
        height: 40px;
        border-radius: 4px;
        border: none;
        margin: 10px auto;
        background: orange;
        color: white;
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 100vw;
    height: 100vh;
    bottom: 0;
    right: 0;
    .chat-header {
      height: 15%;
    }
    .chatbox-wrapper {
      height: 83%;
      overflow: hidden;
      overflow-y: scroll;
      form {
        .form-data {
          label {
            font-size: 1.1em;
            padding: 10px 2px;
          }
          input {
            height: 50px;
          }
          textarea {
            height: 160px;
          }
          input,
          textarea {
            font-size: 18px;
          }
        }
        button {
          width: 100%;
          height: 45px;
        }
      }
    }
  }
  @media screen and (max-height: 500px) {
    height: 100vh;
    bottom: 0;
    left: 0;
    width: 100vw;
    .chat-header {
      height: 15%;
    }
    .chatbox-wrapper {
      height: 83%;
      overflow: hidden;
      overflow-y: scroll;
      form {
        .form-data {
          label {
            font-size: 1.1em;
            padding: 10px 2px;
          }
          input {
            height: 50px;
          }
          textarea {
            height: 160px;
          }
          input,
          textarea {
            font-size: 18px;
          }
        }
        button {
          width: 100%;
        }
      }
    }
  }
}
.active {
  animation: openchat 0.4s linear alternate forwards;
}

.inactive {
  animation: closechat 0.8s linear alternate forwards;
}

@keyframes openchat {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes closechat {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200%);
    display: none;
  }
}
</style>