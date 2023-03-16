<template>
  <main>
    <div class="main-wrapper">
      <div class="left-content">
        <div class="info">
          <h1>Biscam spare part agency</h1>
          <p>Purchase you car spare parts now</p>
          <a href="http://">shop now</a>
        </div>
        <div class="image">
          <img src="../assets/car-engines/car-key-transparent.png" alt="" />
        </div>
      </div>
      <div class="right-content">
        <div class="wrapper">
          <div class="content">
            <div class="img">
              <img
                src="../assets/car-engines/engine-block-transparent.png"
                alt=""
              />
            </div>
            <div class="info">
              <h2>engine block</h2>
              <p>available</p>
              <a href="http://">shop now</a>
            </div>
          </div>
          <div class="content">
            <div class="img">
              <img src="../assets/car-engines/car-key-transparent.png" alt="" />
            </div>
            <div class="info">
              <h2>car key starter</h2>
              <p>available</p>
              <a href="http://">shop now</a>
            </div>
          </div>
          <div class="content">
            <div class="img">
              <img
                src="../assets/car-engines/manifold-1-transparent.png"
                alt=""
              />
            </div>
            <div class="info">
              <h2>manifold</h2>
              <p>available</p>
              <a href="http://">shop now</a>
            </div>
          </div>
          <div class="content">
            <div class="img">
              <img src="../assets/car-engines/shaft.png" alt="" />
            </div>
            <div class="info">
              <h2>shaft</h2>
              <p>available</p>
              <a href="http://wa.link/rt49uv">shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-section">
      <div class="product-header">
        <div class="left-header">
          <h1 class="category-header">New <span>Products</span></h1>
        </div>
        <div class="right-header">
          <nav>
            <NuxtLink to="/spare-part" class="route">all</NuxtLink>
            <NuxtLink to="/spare-part/key-starter" class="route"
              >car key starter</NuxtLink
            >
            <NuxtLink to="/spare-part/manifold" class="route"
              >manifold</NuxtLink
            >
            <NuxtLink to="/spare-part/engine" class="route"
              >engines</NuxtLink
            >
            <NuxtLink to="/spare-part/shaft" class="route"
              >shaft</NuxtLink
            >
          </nav>
        </div>
        <div class="product-menu-bars">
          <select name="products" id="products" @change="getCategory($event)">
            <option value="all">All</option>
            <option value="manifold">Manifold</option>
            <option value="car key starter">Car Key Starter</option>
            <option value="shaft">Shaft</option>
            <option value="engines">Engines</option>
          </select>
        </div>
      </div>
      <router-view v-slot="{ Component }" data-aos="slide-up">
        <transition name="routes">
          <component :is="Component" />
        </transition>
      </router-view>

      <div class="category-display">
        <div class="category-wrapper">
          <h2 data-aos="slide-right">shop with <span>us</span></h2>
          <p data-aos="slide-up">reserved spare parts just for you.</p>

          <div class="category-list" data-aos="slide-left">
            <div class="content">
              <div class="image">
                <img
                  data-aos="slide-up"
                  src="../assets/car-engines/camshaft.jpeg"
                  alt=""
                />
              </div>
              <h3 data-aos="slide-up">camshaft</h3>
            </div>
            <div class="content">
              <div class="image">
                <img
                  data-aos="slide-up"
                  src="../assets/car-engines/car-key-transparent.png"
                  alt=""
                />
              </div>
              <h3 data-aos="slide-up">car key starter</h3>
            </div>
            <div class="content">
              <div class="image">
                <img
                  data-aos="slide-up"
                  src="../assets/car-engines/engine-1.jpg"
                  alt=""
                />
              </div>
              <h3 data-aos="slide-up">engine</h3>
            </div>
            <div class="content">
              <div class="image">
                <img
                  data-aos="slide-up"
                  src="../assets/car-engines/manifold.jpeg"
                  alt=""
                />
              </div>
              <h3 data-aos="slide-up">manifold</h3>
            </div>
            <div class="content">
              <div class="image">
                <img
                  data-aos="slide-up"
                  src="../assets/car-engines/shaft-1.jpeg"
                  alt=""
                />
              </div>
              <h3 data-aos="slide-up">shaft</h3>
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
            <a href="http://" data-aos="flip-left">shop now</a>
          </div>
          <div class="right-content" data-aos="flip-left"></div>
        </div>
      </div>
      <div class="product-body">
        <div class="product-body-wrapper">
          <h2 class="category-header" data-aos="flip-up">
            shop with <span>us</span>
          </h2>
          <p class="product-intro" data-aos="slide-up">
            find out our amazing products
          </p>
          <div class="detail-products" data-aos="slide-up">
            <div class="product" data-aos="slide-up">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/camshaft-many.jpeg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>camshaft</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
            <div class="product" data-aos="flip-left">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/engine.jpg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>engines</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
            <div class="product" data-aos="flip-right">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/key-starter.jpg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>car key starter</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
            <div class="product" data-aos="slide-up">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/top-cylinder.jpg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>top cylinder</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
            <div class="product" data-aos="flip-left">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/top-cylinder-2.jpg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>top cylinder</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
            <div class="product" data-aos="slide-up">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/crank-shaft-2.jpg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>camshaft</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
            <div class="product" data-aos="flip-left">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/engine-1.jpg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>engines</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
            <div class="product" data-aos="flip-right">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/key-starter-1.jpg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>car key starter</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
            <div class="product" data-aos="slide-up">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/top-cylinder-1.jpg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>top cylinder</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
            <div class="product" data-aos="flip-left">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/engine-3.jpg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>engine</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
            <div class="product" data-aos="slide-up">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/crank-shaft-4.jpg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>crankshaft</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
            <div class="product" data-aos="flip-left">
              <div class="wrapper">
                <div class="image">
                  <img
                    data-aos="slide-up"
                    src="../assets/car-engines/car-key-starter-1.jpeg"
                    alt=""
                  />
                </div>
                <div class="blur-wrapper"></div>
                <div class="info">
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <a href="https://wa.link/rt49uv" data-aos="slide-up"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                </div>
              </div>
              <div class="details">
                <h2>car key starter</h2>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                </div>
                <a href="https://wa.link/rt49uv" data-aos="slide-up"
                  >shop now <i class="fa-brands fa-shopify"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="link-container" data-aos="flip-left">
        <div class="wrapper">
          <div class="blur-wrapper"></div>
          <h1 data-aos="slife-right">
            tons of spare part products to <br />
            <span dtat-aos="flip-left">shop</span>
          </h1>
          <p data-aos="fade-up">
            Browse our amazing spare part store and find the product that suits
            your need
          </p>
          <a href="http://" data-aos="flip-right" class="hover-animation"
            >shop now</a
          >
        </div>
      </div>

      <div class="display-product">
        <div class="wrapper">
          <h1>can't find your product yet?</h1>
          <p>contact us directly:</p>
          <div class="links">
            <a href="https://wa.link/rt49uv">
              <i class="fa-brands fa-whatsapp"> </i> +237677387714
            </a>
            <a href="mailto:garagebiscam@gmail.com"
              ><i class="fa-solid fa-envelope"></i> garagebiscam@gmail.com</a
            >
            <a href="tel:+237695569565"
              ><i class="fa-solid fa-phone"></i> +237695569565</a
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
            <img src="../assets/flight/mtn-momo.png" alt="" />
          </div>
          <div class="img">
            <img src="../assets/flight/orange-money.png" alt="" />
          </div>
          <div class="img">
            <img src="../assets/flight/visa-card.png" alt="" />
          </div>
          <div class="img">
            <img src="../assets/flight/paypal.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="contact-container">
      <contactForm
        whatsappLink="https://wa.link/rt49uv"
        whatsappTel="+237677387714"
        tel="+237695569565"
        email="garagebiscam@gmail.com"
      />
    </div>
  </main>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import contactForm from "@/components/contact.vue";
// bringing in car images
import car from "../assets/car-images/car.jpg";
import car1 from "../assets/car-images/car-1.jpg";
import car2 from "../assets/car-images/car-2.jpg";
import car3 from "../assets/car-images/car-3.jpg";
import car4 from "../assets/car-images/car-4.jpg";
import car5 from "../assets/car-images/car-5.jpg";
export default {
  name: "Spare Part",
  components: {
    contactForm,
  },
  setup() {
    const router = useRouter();
    const car_images = ref([car, car1, car2, car3, car4, car5]);

    const category = ref("");

    const productCategory = computed(() => {
      return category.value;
    });

    console.log(productCategory.value);

    const getCategory = (e) => {
      console.log(e.target.value);
      if (e.target.value === "all") router.push("/spare-part");

      if (e.target.value === "manifold") router.push("/spare-part/manifold");
      if (e.target.value === "shaft") router.push("/spare-part/shaft");
      if (e.target.value === "engines") router.push("/spare-part/engine");
      if (e.target.value === "car key starter")
        router.push("/spare-part/key-starter");
    };

    return { car_images, category, getCategory };
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: fit-content;

  .main-wrapper {
    width: 100%;
    height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;

    .left-content {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background: rgb(250, 227, 215);

      .image {
        width: 40%;
        height: fit-content;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        img {
          width: auto;
          height: 80%;
          object-fit: cover;
        }
      }

      .info {
        width: 55%;
        height: fit-content;
        padding: 20px 10px;
        position: relative;

        h1 {
          color: rgb(19, 16, 13);
          text-transform: capitalize;
          word-spacing: 5px;
          letter-spacing: 1px;
          text-align: left;
          padding: 20px;
          font: 700 50px "Montserrat", "Nunito Sans", sans-serif;
        }

        p {
          color: rgb(19, 16, 13);
          padding: 20px;
          text-align: left;
        }

        a {
          text-decoration: none;
          text-transform: capitalize;
          display: block;
          margin: 0;
          border-bottom: 3px solid rgb(235, 154, 3);
          font: 700 20px "Poppins", sans-serif;
          width: max-content;
          height: max-content;
          margin-left: 20px;
          color: rgb(19, 16, 13);

          &:hover {
            border: none;
            background: white;
            padding: 10px 20px;
            border-radius: 2px;
          }
        }
      }
    }

    .right-content {
      width: 50%;
      height: 100%;

      .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        flex-wrap: wrap;

        // gap: 5px;
        padding: 0 10px;

        .content {
          height: 49%;
          width: 49%;
          position: relative;
          background: rgb(189, 227, 216);

          .info {
            padding: 20px;
            position: relative;

            h2 {
              text-transform: capitalize;
              text-align: left;
              position: relative;
            }

            p {
              text-align: left;
            }

            a {
              text-decoration: none;
              text-transform: capitalize;
              display: block;
              margin: 0;
              border-bottom: 3px solid rgb(235, 154, 3);
              font: 700 15px "Poppins", sans-serif;
              width: max-content;
              height: max-content;
              color: rgb(19, 16, 13);
              padding: 5px 0;

              &:hover {
                border: none;
                background: white;
                padding: 5px 20px;
                border-radius: 2px;
              }
            }
          }

          .img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              cursor: pointer;

              &:hover {
                transform: scale(0.9);
              }
            }
          }

          &:nth-child(even) {
            background: rgb(246, 250, 200);
          }

          &:nth-child(odd) {
            background: rgb(248, 204, 184);
          }

          &:nth-child(3n + 1) {
            background: rgb(215, 240, 250);
          }

          @media screen and (max-width: 500px) {
            width: 95%;
          }
        }
      }
    }

    @media screen and (max-width: 900px) {
      flex-direction: column;

      .left-content {
        width: 100%;
        padding: 0;

        .image {
          width: 35%;
        }

        .info {
          width: 60%;

          h1 {
            font-size: 40px;
          }
        }
      }

      .right-content {
        width: 100%;

        .img {
          width: 60% !important;
        }
      }

      @media screen and (max-width: 500px) {
        .left-content {
          .image {
            width: 100%;
            height: 60%;
            position: absolute;
            bottom: 0;
            right: 0;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          }

          .info {
            position: relative;
            width: 100%;
          }
        }

        .right-content {
          width: 100%;
          height: fit-content;
          overflow: hidden;

          .wrapper {
            width: 100%;
            flex-direction: column;
            height: fit-content;

            .content {
              width: 100%;
              // height: 300px;

              .img {
                width: 75%;
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 900px) {
      height: fit-content;
    }
  }

  .product-section {
    width: 100%;
    height: fit-content;
    padding-top: 30px;
    padding-bottom: 0;

    .product-header {
      width: 80%;
      height: 15vh;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-header {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        .category-header {
          text-align: left;
          text-transform: uppercase;
          font: 600 26px "Montserrat", "Nunito Sans", sans-serif;
          padding: 10px;

          span {
            color: rgb(243, 164, 18);
            border-bottom: 3px solid rgb(228, 151, 8);
          }

          @media screen and (max-width: 1000px) {
            font-size: 23px;
          }
        }

        .product-intro {
          padding: 10px 20px;
          text-transform: capitalize;
          text-align: left;
          font-size: 15px;
        }

        @media screen and (max-width: 600px) {
          width: 65%;
        }
      }

      .right-header {
        width: 60%;
        height: 100%;

        nav {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          a.route {
            text-decoration: none;
            color: rgb(11, 30, 63);

            text-transform: capitalize;
            font: 500 17px "Montserrat", "Nunito Sans", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            transition: all 0.3s ease;
            position: relative;

            &:hover {
              border-bottom: 1px solid rgb(215, 166, 5);
            }

            @media screen and (max-width: 1025px) {
              font-size: 11px;
            }
          }

          a.NuxtLink-active.NuxtLink-exact-active {
            font-weight: 700;

            border-bottom: 2px solid rgb(250, 170, 20);
          }
        }

        @media screen and (max-width: 600px) {
          display: none;
        }
      }

      .product-menu-bars {
        width: 30%;
        display: none;
        justify-content: center;
        align-items: center;

        select {
          width: 150px;
          height: 45px;
          border-radius: 5px;
          outline: none;
          border: 1px solid rgb(233, 233, 233);
          box-shadow: 0 0 10px 5px rgb(235, 235, 235);
          padding: 5px;
          cursor: pointer;

          option {
            text-transform: capitalize;
          }
        }

        @media screen and (max-width: 600px) {
          display: flex;
        }
      }

      @media screen and (max-width: 1000px) {
        width: 96%;
      }
    }

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
            }

            h3 {
              padding: 10px;
              text-transform: capitalize;
              color: rgb(222, 219, 219);
              text-align: center;
              font: 600 17px "Nunito Sans", sans-serif;
            }
          }
        }
      }
    }

    .advert-container {
      width: 100%;
      height: fit-content;
      background: #ffffff;

      .wrapper {
        width: 100%;
        height: 100%;
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .left-content {
          width: 50%;
          height: fit-content;

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

            &:hover {
              border: none;

              border-radius: 30px;
            }
          }
        }

        .right-content {
          width: 40%;
          height: 60vh;
          background: url(../assets/car-images/car-4.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 5px;
        }
      }
    }

    .link-container {
      width: 100%;
      height: fit-content;
      background: url(../assets/car-images/car-8.jpg);
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
          padding: 20px;
          position: relative;
          font: 700 45px "Poppins", sans-serif;
          text-transform: capitalize;
          color: white;

          span {
            color: rgb(221, 99, 0);
            text-transform: uppercase;
            font-size: 1.1em;
            font-family: "Montserrat", sans-serif;
          }
        }

        p {
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
        padding: 100px 10px;
        position: relative;

        h1 {
          color: white;
          font: 700 50px "Montserrat", sans-serif;
          position: relative;
          text-transform: capitalize;
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

