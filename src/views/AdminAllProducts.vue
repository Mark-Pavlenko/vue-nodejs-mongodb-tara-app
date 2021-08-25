<template>
  <div class="home">
    <Sidebar/>

    <!--    goods cards block-->
    <div id="goods-list">
      <div class="catalog__wrapper row justify-content-between" v-if="this.products.length !== 0">
        <AdminCard class="product-card" v-for="product in products"
                   :key="product.id"
                   :product="product"
        />
      </div>

      <div class="product" v-else>
        <div class='product-inner'>
          <div class="product-image-wrap">
            <img :src="`https://decoplastline.ua/no-image.png`" class="image"/>
          </div>
          <div class="product-detail">
            <h2>На данный момент никаких товаров нет!</h2>
          </div>
        </div>
      </div>


    </div>

    <Footer/>

  </div>
</template>

<script>
import AdminCard from '../components/AdminCard'
import Sidebar from '../components/Sidebar'
import ProductDataService from "../services/GoodsDataServices";

export default {
  components: {
    AdminCard,
    Sidebar
  },
  data() {
    return {
      products: [],
      currentProduct: null,
      product: null,
    }
  },
  methods: {
    retrieveTutorials() {
      ProductDataService.getAll()
          .then(response => {
            this.products = response.data;
            console.log(response.data);

          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteProduct(id) {
      ProductDataService.delete(id)
          .then(response => {
            console.log(response.data);
            window.location.reload()
            // this.$router.push({ name: "products" });
          })
          .catch(e => {
            console.log(e);

          });
    }
  },
  mounted() {
    this.retrieveTutorials();
  }
}
</script>

<style lang="scss" scoped>

#dropdowns-container {
  margin-top: 20px;
}

//dropdowns-items block
.menu__wrapper {
  width: 100%;
  box-sizing: border-box;
}

.menu {
  position: relative;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  width: 100%;
  height: 81px;

  &__wrapper {
    width: 100%;
    height: 81px;
    box-sizing: border-box;
  }

  @media (max-width: 992px) {
    margin-top: 30px;
    margin-left: 30px;
  }
}

#nav {
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    padding: 0 !important;
  }
}

.dropdowns_btn {
  margin-right: 100px;
  cursor: pointer;

  @media(max-width: 1200px) {
    margin-right: 160px;
  }
  @media(max-width: 992px) {
    margin-right: 110px;
  }
}

.goods-dropdowns {
  font-size: 18px;
  border: 0.5px solid gray;
  border-radius: 5px;
}

//cards block
#goods-list {
  //min-height: 100vh;
  overflow: hidden;
  //background-color: #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown-select {
  width: 200px;
}

//-------------

.product {
  flex: 1 1 33.333%;
  width: 100%;
  padding: 25px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    flex: 1 1 45%;
  }
}


.product-inner {
  position: relative;
  padding: 25px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  perspective: 1000px;
  width: 75%;
  margin: 0px auto;
}

.product-text-wrap {
  position: absolute;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.product-text-wrap h2 {
  color: #313131;
  font-size: 128px;
  font-weight: 900;
  opacity: 0.2;
  transform-origin: center;
}

.product-image-wrap {
  position: relative;
  z-index: 1;
  transform-origin: center;
  width: 75%;
  margin: 0px auto;
  //margin-bottom: 25px;
  //background-color: blue;
}

.product-image-wrap .image {
  width: 100%;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
}

.product-detail {
  background-color: #FFF;
  padding: 25px;
  margin: 0px -25px -25px;
}

.product-detail h2 {
  font-size: 20px;
  font-weight: 700;
  color: #676767;
  margin-bottom: 15px;
}

.product-detail p {
  font-size: 14px;
  line-height: 1.5;
  font-weight: 300;
  color: #676767;
}

#card-btn {
  cursor: pointer;
}

</style>
