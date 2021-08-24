<template>
  <div class="home">
    <Header/>

    <div id="dropdowns-container" class="d-flex justify-content-around flex-wrap">
      <div class="p-2">
        <v-select
            class="dropdown-select"
            :options="colorsOptions"
            @input="getColorParams"
            placeholder="Выберите цвет"
        ></v-select>
      </div>
      <div class="p-2">
        <v-select
            class="dropdown-select"
            :options="volumeOptions"
            @input="getVolumeParams"
            placeholder="Выберите объем"
        ></v-select>
      </div>
    </div>

    <!--    goods cards block-->
    <div id="goods-list">
      <div class="catalog__wrapper row justify-content-between">
        <Card class="product-card" v-for="product in products"
              :key="product.id"
              :product="product"
        />
      </div>
    </div>

    <Footer/>

  </div>
</template>

<script>
import Card from '../components/Card.vue'
import dropdown from 'vue-dropdowns';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductDataService from "../services/GoodsDataServices";

import 'vue-select/dist/vue-select.css';

export default {
  components: {
    Card,
    'dropdown': dropdown,
    Header,
    Footer
  },
  data() {
    return {
      products: [],

      repeatedColorsOptions: [],
      colorsOptions: [],

      repeatedVolumeOptions: [],
      volumeOptions: [],

      selectedDropdownColor: "",
      selectedDropdownVolume: null
    }
  },
  methods: {
    retrieveProducts() {
      ProductDataService.getAll()
          .then(response => {
            this.products = response.data;
            console.log(response.data);

            for (let i = 0; i < this.products.length; i++) {
              this.repeatedColorsOptions.push(this.products[i].color);
              this.repeatedVolumeOptions.push(this.products[i].volume)
            }

            function filter(data) {
              return data.filter((value, index) => data.indexOf(value) === index);
            }

            this.colorsOptions = filter(this.repeatedColorsOptions);
            this.volumeOptions = filter(this.repeatedVolumeOptions);

            // console.log(this.colorsOptions);
            // console.log(this.volumeOptions);
          })
          .catch(e => {
            console.log(e);
          });
    },
    getColorParams(selectedColor) {
      this.selectedDropdownColor = selectedColor;
      console.log(this.selectedDropdownColor);
    },
    getVolumeParams(selectedVolume) {
      this.selectedDropdownVolume = selectedVolume;
      console.log(this.selectedDropdownVolume);
    },
    getFilteredByColorProducts(){

    }
  },
  mounted() {
    this.retrieveProducts();
    this.getFilteredByColorProducts();
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

</style>
