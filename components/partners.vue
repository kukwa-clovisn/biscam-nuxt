<template>
  <div class="partners-container">
    <div class="partners-wrapper">
      <h1>our speciality</h1>
      <div class="partners-content">
        <div class="partner">
          <div class="blur-wrapper"></div>
          <div class="image">
            <img src="~/assets/car-images/car-1.jpg" alt="" />
          </div>
          <div class="details">
            <h2>partner name</h2>
            <p>partner credentials</p>
          </div>
        </div>
        <div class="partner">
          <div class="blur-wrapper"></div>
          <div class="image">
            <img src="~/assets/car-images/car-2.jpg" alt="" />
          </div>
          <div class="details">
            <h2>partner name</h2>
            <p>partner credentials</p>
          </div>
        </div>
        <div class="partner">
          <div class="blur-wrapper"></div>
          <div class="image">
            <img src="~/assets/car-images/car-6.jpg" alt="" />
          </div>
          <div class="details">
            <h2>partner name</h2>
            <p>partner credentials</p>
          </div>
        </div>
        <div class="partner">
          <div class="blur-wrapper"></div>
          <div class="image">
            <img src="~/assets/car-images/car-7.jpg" alt="" />
          </div>
          <div class="details">
            <h2>bus</h2>
            <p>Buses of all categories</p>
          </div>
        </div>
        <div class="partner">
          <div class="blur-wrapper"></div>
          <div class="image">
            <img src="~/assets/car-images/car-5.jpg" alt="" />
          </div>
          <div class="details">
            <h2>hilux</h2>
            <p>Hilux and all it's sub types</p>
          </div>
        </div>
        <div class="partner">
          <div class="blur-wrapper"></div>
          <div class="image">
            <img src="~/assets/car-images/car.jpg" alt="" />
          </div>
          <div class="details">
            <h2>partner name</h2>
            <p>partner credentials</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.partners-container {
  width: 100%;
  height: fit-content;
  background: white;

  .partners-wrapper {
    width: 80%;
    height: fit-content;
    margin: auto;
    padding: 40px 0;

    h1 {
      text-align: left;
      text-transform: uppercase;
      font: 700 40px "Montserrat", Poppins, sans-serif;
      padding: 40px 20px;
    }

    .partners-content {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
      flex-wrap: wrap;

      .partner {
        width: 310px;
        height: 300px;
        border-radius: 3px;
        position: relative;

        .blur-wrapper {
          display: none;
        }
        .image {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.6s ease;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .details {
          display: none;
        }

        &:hover {
          border: 1px solid rgb(255, 190, 70);
          box-shadow: 0 0 17px 7px rgb(212, 210, 210);

          .image {
            position: absolute;
            top: -45px;
            left: 55px;
            width: 200px;
            height: 200px;
            border-radius: 100%;
            border: 7px solid orange;
            transform: rotateZ(-45deg);
            perspective: 500px;
            background: rgb(255, 255, 255);
            box-shadow: 0 0 19px 7px rgb(207, 206, 206);
          }

          .details {
            display: block;
            animation: moveUp 0.6s 1 ease-in-out forwards;
            position: relative;

            h2 {
              text-align: center;
              text-transform: uppercase;
              padding: 10px;
              color: rgb(228, 128, 5);
            }

            p {
              color: black;
              text-transform: capitalize;
            }
          }
        }

        @keyframes moveUp {
          from {
            transform: scale(0.5);
          }
          to {
            transform: scale(1) translateY(140px);
          }
        }

        @media screen and (max-width: 500px) {
          width: 90%;
        }
      }
    }

    @media screen and (max-width: 768px) {
      width: 90%;

      h1 {
        text-align: center;
      }
      .partners-content {
        justify-content: center;
      }

      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }
  }
}
</style>