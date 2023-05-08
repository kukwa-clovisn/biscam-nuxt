<template>
  <div class="spare-part-main">
    <Head>
      <Title>Spare Part || BISCAM</Title>
    </Head>
    <div class="header-component"></div>
    <div class="main-wrapper">
      <div class="blur-wrapper"></div>
      <div class="carousel-div">
        <slider :images="dg_images" />
      </div>
      <div class="landing-page-content">
        <h1><span>biscam</span> spare part</h1>
        <p>Purchase your car Spare part with us!</p>
        <div class="booking-div">
          <p>shop now</p>
          <button class="hover-animation">
            <a href="#products">view products</a>
          </button>
        </div>
      </div>
    </div>
    <div class="product-section">
      <SparePart-Category-header />

      <div class="product-body">
        <div class="product-body-wrapper" id="products">
          <div class="detail-products" v-if="products.length">
            <div
              class="product"
              v-for="product in products"
              :key="product"
              @click="displayProduct(product.id, product.name)"
            >
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    :src="product.data"
                    :alt="product.name"
                  />
                </div>

                <div class="details">
                  <!-- <h2>{{ product.name }}</h2> -->
                  <div class="info">
                    <a href="https://wa.link/rt49uv" target="_blank" rel="noopener noreferrer" data-aos="slide-up"
                      ><i class="fa-brands fa-whatsapp"></i
                    ></a>
                    <a href="https://wa.link/rt49uv" target="_blank" rel="noopener noreferrer" data-aos="slide-up"
                      ><i class="fa-solid fa-phone"></i
                    ></a>
                    <a href="mailto:garagebiscam@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="slide-up"
                      ><i class="fa-solid fa-envelope"></i
                    ></a>
                  </div>
                  <!-- stars can come in here -->
                  <NuxtLink
                    :to="`/spare-part/${product.id}`"
                    class="product-link"
                    >view product <i class="fa-brands fa-shopify"></i
                  ></NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="detail-products" v-else>
            Please wait products loading...
          </div>
        </div>
      </div>

      <div class="category-display">
        <div class="category-wrapper">
          <h2 data-aos="slide-up">shop with <span>us</span></h2>
          <p data-aos="slide-up">reserved spare parts just for you.</p>

          <div class="category-list">
            <div
              class="content"
              @click="navigateTo('/spare-part/category/shaft')"
            >
              <div class="image">
                <img src="~/assets/spare-parts/3.jpg" alt="" />
              </div>
              <h3>Quality</h3>
            </div>
            <div
              class="content"
              @click="navigateTo('/spare-part/category/car key starter')"
            >
              <div class="image">
                <img src="~/assets/spare-parts/9.jpg" alt="" />
              </div>
              <h3>Original</h3>
            </div>
            <div
              class="content"
              @click="navigateTo('/spare-part/category/engine')"
            >
              <div class="image">
                <img src="~/assets/spare-parts/7.jpg" alt="" />
              </div>
              <h3>Consistency</h3>
            </div>
            <div
              class="content"
              @click="navigateTo('/spare-part/category/manifold')"
            >
              <div class="image">
                <img src="~/assets/spare-parts/17.jpg" alt="" />
              </div>
              <h3>cheap</h3>
            </div>
            <div
              class="content"
              @click="navigateTo('/spare-part/category/shaft')"
            >
              <div class="image">
                <img src="~/assets/spare-parts/4.jpg" alt="" />
              </div>
              <h3>effective</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="advert-container">
        <div class="wrapper">
          <div class="left-content">
            <h2 data-aos="slide-up">all car spare parts available</h2>
            <h3 data-aos="slide-up">superb quality</h3>
            <p data-aos="slide-up">
              contact us to find more of our available and quality products.
            </p>
            <a
              href="https://wa.link/rt49uv"
              target="_blank"
              rel="noopener noreferrer"
              >shop now</a
            >
          </div>
          <div class="right-content" data-aos="slide-left"></div>
        </div>
      </div>
      <div class="product-body">
        <div class="product-body-wrapper">
          <div class="detail-products sub-category">
            <div
              class="product"
              v-for="product in products"
              :key="product._id"
              @click="displayProduct(product.id, product.name)"
            >
              <div class="wrapper">
                <div class="image">
                  <img :src="product.data" :alt="product.name" />
                </div>
                <div class="details">
                  <!-- <h2>{{ product.name }}</h2> -->
                  <div class="info">
                    <a
                      href="https://wa.link/rt49uv"
                      target="_blank"
                      rel="noopener noreferrer"
                      ><i class="fa-brands fa-whatsapp"></i
                    ></a>
                    <a href="https://wa.link/rt49uv"
                      ><i class="fa-solid fa-phone"></i
                    ></a>
                    <a
                      href="mailto:garagebiscam@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      ><i class="fa-solid fa-envelope"></i
                    ></a>
                  </div>
                  <NuxtLink
                    :to="`/spare-part/${product.id}`"
                    class="product-link"
                    >view product<i class="fa-brands fa-shopify"></i
                  ></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="link-container" data-aos="flip-left">
        <div class="wrapper">
          <div class="blur-wrapper"></div>
          <h1 data-aos="slife-right">Find spare parts for all cars you want</h1>
          <p data-aos="fade-up">
            Browse our amazing spare part store and find the product that suits
            your need
          </p>
          <a
            href="https://wa.link/rt49uv"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="flip-right"
            class="hover-animation"
            >shop now</a
          >
        </div>
      </div>

      <div class="display-product">
        <div class="wrapper">
          <h1>can't find your product yet?</h1>
          <p>contact us directly:</p>
          <div class="links">
            <a
              href="https://wa.link/rt49uv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-whatsapp"> </i> +237677387714
            </a>

            <a href="tel:+237695569565"
              ><i class="fa-solid fa-phone"></i> +237695569565</a
            >
            <a href="mailto:garagebiscam@gmail.com"
              ><i
                class="fa-solid fa-envelope"
                target="_blank"
                rel="noopener noreferrer"
              ></i>
              garagebiscam@gmail.com</a
            >
          </div>
        </div>
      </div>
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

    <div class="address-div">
      <div class="blur-wrapper"></div>
      <div class="address-wrapper">
        <div class="address-box">
          <h2>address</h2>
          <p>camp yabassi</p>
          <p><a href="tel:+237699391316"> Tel : +237677941547</a></p>
          <p>
            <a
              href="https://wa.link/rt49uv"
              target="_blank"
              rel="noopener noreferrer"
              >whatsapp : +237 677941547
            </a>
          </p>
          <p>
            <a
              href="mailto:garagebiscam@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >Email: garagebiscam@gmail.com</a
            >
          </p>
          <button>
            <NuxtLink to="/contact-page">contact us</NuxtLink>
          </button>
          <button @click="($event) => navigateTo('/appointment')">
            book an appointment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import axios from "axios";
import img from "assets/spare-parts/15.jpg";
import img1 from "assets/spare-parts/9.jpg";
import img2 from "assets/spare-parts/4.jpg";
import img3 from "assets/spare-parts/5.jpg";
import img4 from "assets/spare-parts/6.jpg";
import img5 from "assets/spare-parts/7.jpg";
import img6 from "assets/spare-parts/8.jpg";

const dg_images = ref([img, img1, img2, img3,img4,img5,img6]);
// const loader = useLoaderState();
const products = productState();

// onMounted(() => {
//   axios("/api/product")
//     .then((res) => {
//       products.value = res.data;

//       products.value = shuffleProducts(products.value);
//     })
//     .catch((err) => {
//       return err;
//     });
// });

const shuffleProducts = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

shuffleProducts(products.value);

const displayProduct = (id, productName) => {
  localStorage.setItem("product_id", id);
  localStorage.setItem("product name", productName);
  // localStorage.setItem("product category", category);
  navigateTo(`/Spare-Part/product/${id}`);
};
</script>
 
<style lang="scss" scoped>
.spare-part-main {
  width: 100%;
  height: fit-content;
  .header-component {
    width: 100%;
    height: 13vh;
    background: rgb(251, 165, 118);
    background: rgb(15, 48, 109);
    position: relative;
  }

  .main-wrapper {
    width: 100vw;
    height: 90vh;
    position: relative;
    background: url(../assets/flight/black-woman-with-suitcase-airport.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    .carousel-div {
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 0;
      left: 0;
    }

    .blur-wrapper {
      opacity: 0.3;
    }

    .landing-page-content {
      width: 100%;
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    h1,
    h3,
    p,
    button {
      z-index: 1;
    }

    h1 {
      text-transform: uppercase;
      font-size: 60px;
      color: white;
      font-weight: 800;
      position: relative;
      padding: 10px;

      span {
        color: rgb(241, 162, 42);
      }

      @media screen and (max-width: 768px) {
        font-size: 50px;

        @media screen and (max-width: 500px) {
          font-size: 40px;

          @media screen and (max-width: 400px) {
            font-size: 30px;
          }
        }
      }
    }

    p {
      color: white;
      padding: 10px;
      text-transform: capitalize;
    }

    .booking-div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;

      p {
        color: white;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 23px;
      }

      button {
        width: 200px;
        height: 45px;
        background: rgb(241, 162, 42);
        border: none;
        border-radius: 4px;

        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-decoration: none;
          text-transform: capitalize;
          font-size: 15px;
        }
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
  }

  .product-section {
    width: 100%;
    height: fit-content;
    padding-top: 30px;
    padding-bottom: 0;

    .category-display {
      width: 100%;
      height: fit-content;
      background: rgb(10, 34, 45);

      .category-wrapper {
        width: 80%;
        height: fit-content;
        margin: auto;
        padding: 20px 0;

        h2 {
          padding: 20px;
          text-transform: capitalize;
          color: rgb(255, 255, 255);
          font: 600 40px "Montserrat", sans-serif;

          span {
            color: rgb(253, 178, 38);
          }
        }

        p {
          text-align: center;
          padding: 20px 10px;
          text-transform: capitalize;
          color: white;
        }

        .category-list {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;

          .content {
            width: fit-content;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            flex-direction: column;

            .image {
              width: 150px;
              height: 150px;
              border-radius: 100%;
              overflow: hidden;
              background: black;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                cursor: pointer;
              }
              @media screen and (max-width: 600px) {
                width: 250px;
                height: 250px;
                @media screen and (max-width: 400px) {
                  width: 200px;
                  height: 200px;
                }
              }
            }

            h3 {
              padding: 10px;
              text-transform: capitalize;
              color: rgb(222, 219, 219);
              text-align: center;
              font: 600 17px "Nunito Sans", sans-serif;
              position: relative;
              @media screen and (max-width: 600px) {
                font-size: 1.3em;
              }
            }
            @media screen and (max-width: 600px) {
              width: 100%;
              height: fit-content;
              gap: 10px;
            }
          }
        }
      }
    }

    .advert-container {
      width: 100%;
      height: fit-content;

      margin: 0;

      .wrapper {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;

        .left-content {
          width: 50%;
          height: fit-content;
          padding: 20px 0;

          h2 {
            font: 650 25px "Montserrat", "Nunito Sans", sans-serif;
            text-transform: capitalize;
            text-align: left;
          }

          h3 {
            font: 700 45px "Montserrat", "Nunito Sans", sans-serif;
            text-transform: capitalize;
            color: rgb(255, 136, 32);
            text-align: left;
            padding: 10px 0;
          }

          p {
            color: rgb(55, 56, 56);
            font-family: "Nunito Sans", sans-serif;
            text-align: left;
            padding: 20px 0;
          }

          a {
            text-decoration: none;
            text-transform: capitalize;
            display: block;
            margin: 0;
            border-radius: 4px;
            font: 700 20px "Poppins", sans-serif;
            width: max-content;
            height: max-content;
            color: rgb(19, 16, 13);
            background: rgb(10, 34, 45);
            color: white;
            padding: 10px 20px;
            position: relative;
            transition: all 0.3s ease;

            &:hover {
              border: none;
              transform: none;
              border-radius: 30px;
            }
          }
        }

        .right-content {
          width: 40%;
          height: 60vh;
          background: url(../../assets/car-images/car-4.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 5px;
        }

        @media screen and (max-width: 1000px) {
          height: fit-content;
          padding: 30px 0;
          background: rgb(10, 34, 45);
          .left-content {
            width: 100%;
            height: fit-content;
            padding: 30px 0;

            h2,
            h3,
            p {
              text-align: center;
              margin: 10px auto;
              width: 95%;
            }

            h2,
            p {
              color: white;
            }

            a {
              background: rgb(226, 148, 2);
              margin: auto;
              width: 300px;
              display: block;
            }

            @media screen and (max-width: 500px) {
              h2 {
                font-size: 17px;
              }
              h2 {
                font-size: 23px;
              }
              a {
                width: 80%;
                height: 55px;
                font-size: 1.2em;
              }
            }
          }
          .right-content {
            display: none;
          }
        }
      }
    }

    .link-container {
      width: 100%;
      height: fit-content;
      background: url(../../assets/car-images/car-8.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;

      .wrapper {
        width: 100%;
        height: fit-content;
        padding: 100px 10px;
        position: relative;

        .blur-wrapper {
          background: rgb(33, 33, 33);
          opacity: 0.6;
        }

        h1 {
          width: 90%;
          margin: auto;
          padding: 20px;
          position: relative;
          font: 700 45px "Poppins", sans-serif;
          text-transform: capitalize;
          color: white;

          @media screen and (max-width: 500px) {
            font-size: 35px;
          }
        }

        p {
          width: 90%;
          margin: auto;
          padding: 10px;
          color: white;
          position: relative;
        }

        a {
          text-decoration: none;
          text-transform: capitalize;
          display: block;
          margin: 20px auto;
          border-radius: 4px;
          font: 700 20px "Poppins", sans-serif;
          width: max-content;
          height: max-content;
          color: rgb(19, 16, 13);
          background: white;
          padding: 10px 20px;
          position: relative;
          transition: all 0.3s ease;
          border-radius: 30px;
        }
      }
    }

    .display-product {
      width: 100%;
      min-height: 50vh;
      background: rgb(10, 34, 45);

      .wrapper {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding: 100px 0;
        position: relative;

        h1 {
          width: 90%;
          margin: 0 auto;
          color: white;
          font: 700 50px "Montserrat", sans-serif;
          position: relative;
          text-transform: capitalize;

          @media screen and (max-width: 519px) {
            font-size: 35px;

            @media screen and (max-width: 390px) {
              font-size: 25px;
            }
          }
        }

        p {
          padding: 10px;
          color: white;
          position: relative;
          text-transform: capitalize;
        }

        .links {
          width: fit-content;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;

          a {
            width: max-content;
            height: max-content;
            padding: 20px;
            text-decoration: none;
            text-transform: capitalize;
            border-radius: 5px;
            position: relative;
            background: white;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin: 10px;
            background: rgb(233, 152, 3);

            &:hover {
              color: white;
            }

            &:nth-child(even) {
              background: rgb(255, 255, 255);
              color: rgb(31, 31, 31);
            }
          }
        }
      }
    }
  }

  .payment-methods {
    width: 100%;
    min-height: 30vh;
    background: #ffffff;

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
</style>

