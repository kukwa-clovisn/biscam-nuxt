<script setup>
const router = useRouter();

const getCategorySm = (e) => {
  router.push("/spare-part/category/products");
};
</script>
<template>
  <div class="product-header">
    <div class="left-header">
      <h1 class="category-header">product <span>categories</span></h1>
    </div>
    <div class="right-header">
      <nav>
        <button
          :class="[{ 'category-active category-exact-active': '' }, 'route']"
          @click="navigateTo('/spare-part/category/proudcts')"
        >
          all
        </button>
        <button
          :class="[{ 'category-active category-exact-active': '' }, 'route']"
          @click="navigateTo('/spare-part/category/proudcts')"
        >
          car key starter
        </button>
        <button
          :class="[{ 'category-active category-exact-active': '' }, 'route']"
          @click="navigateTo('/spare-part/category/proudctsifold')"
        >
          manifold
        </button>
        <button
          :class="[{ 'category-active category-exact-active': '' }, 'route']"
          @click="navigateTo('/spare-part/category/proudctsines')"
        >
          engines
        </button>
        <button
          :class="[{ 'category-active category-exact-active': '' }, 'route']"
          @click="navigateTo('/spare-part/category/proudctsft')"
        >
          shaft
        </button>
      </nav>
    </div>
    <div class="product-menu-bars">
      <select name="products" id="products" @change="getCategorySm($event)">
        <option value="all">All</option>
        <option value="manifold">Manifold</option>
        <option value="car key starter">Car Key Starter</option>
        <option value="shaft">Shaft</option>
        <option value="engines">Engines</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
      font: 600 18px "Montserrat", "Nunito Sans", sans-serif;
      padding: 10px;

      span {
        color: rgb(243, 164, 18);
        border-bottom: 3px solid rgb(228, 151, 8);
      }

      @media screen and (max-width: 1000px) {
        font-size: 15px;
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

      button.route {
        text-decoration: none;
        border: none;
        background: transparent;
        color: rgb(11, 30, 63);
        cursor: pointer;
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

      .category-active.category-exact-active {
        font-weight: 700;
        color: rgb(220, 145, 4);
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
</style>