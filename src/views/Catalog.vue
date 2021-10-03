<template>
  <div class="home">
    <Header/>

    <div id="dropdowns-container" class="d-flex justify-content-around flex-wrap">
      <div class="p-3">
        <v-select
            class="dropdown-select"
            :options="colorsOptions"
            @input="getColorParams"
            placeholder="Оберіть колір"
        ></v-select>
      </div>
      <div class="p-3">
        <v-select
            class="dropdown-select"
            :options="volumeOptions"
            @input="getVolumeParams"
            placeholder="Оберіть об'єм (мл)"
        ></v-select>
      </div>
      <div class="p-3">
        <v-select
            class="dropdown-select"
            :options="[{label:'Найдавніші', value:'asc'}, {label:'Найсвіжіші', value:'desc'}]"
            @input="getDataParams"
            placeholder="Сортувати за датою"
        ></v-select>
      </div>
    </div>

    <!--    goods cards block-->
    <div id="goods-list">
      <div class="catalog__wrapper row justify-content-between" v-if="this.products.length !== 0">
        <Card class="product-card" v-for="product in products"
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
            <h2>Товари з обраними характеристиками відсутні!</h2>
          </div>
        </div>
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
      repeatedVolumeOptions: [],

      colorsOptions: [],
      volumeOptions: [],

      filteredByColorProducts: [],
      filteredByVolumeProducts: [],

      selectedDropdownColor: "",
      selectedDropdownVolume: null,
    }
  },
  methods: {
    retrieveProducts() {
      ProductDataService.getAll()
          .then(response => {
            this.products = response.data;
            // console.log(this.products);

            // sort products for date by asc and desc
            //default data output - from old to new
            this.products.sort(function compare(a, b) {
              let dateA = new Date(a.createdAt);
              let dateB = new Date(b.createdAt);
              return dateA - dateB;
            });

            for (let i = 0; i < this.products.length; i++) {
              this.repeatedColorsOptions.push(this.products[i].color);
              this.repeatedVolumeOptions.push(this.products[i].volume)
            }

            //filter repeated params in dropdowns
            function filter(data) {
              return data.filter((value, index) => data.indexOf(value) === index);
            }

            this.colorsOptions = filter(this.repeatedColorsOptions.sort());
            this.volumeOptions = filter(this.repeatedVolumeOptions.sort((a, b) => a - b));
            // console.log(this.colorsOptions);
            // console.log(this.volumeOptions);
          })
          .catch(e => {
            console.log(e);
          });
    },

    getColorParams(selectedColor) {
      this.selectedDropdownColor = selectedColor;
      // console.log(this.selectedDropdownColor);

      ProductDataService.getAll()
          .then(response => {
            this.products = response.data.sort((a, b) => (a.volume > b.volume) ? 1 : -1);

            let selectedColorParam = this.selectedDropdownColor;
            let selectedVolumeParam = this.selectedDropdownVolume;

            if (!this.selectedDropdownVolume) {

              let selectedProductsByColor = this.products.filter(function (filteredElem) {
                return filteredElem.color === selectedColorParam;
              });

              this.products = selectedProductsByColor;

            } else {
              let selectedProductsByColor = this.products.filter(function (filteredElem) {
                return filteredElem.color === selectedColorParam && filteredElem.volume === selectedVolumeParam;
              });
              this.products = selectedProductsByColor;
              console.log(this.products);
            }
          })
          .catch(e => {
            console.log(e);
          });
    },

    getVolumeParams(selectedVolume) {
      this.selectedDropdownVolume = selectedVolume;
      // console.log(this.selectedDropdownVolume);

      ProductDataService.getAll()
          .then(response => {
            this.products = response.data.sort((a, b) => (a.color > b.color) ? 1 : -1);

            let selectedColorParam = this.selectedDropdownColor;
            let selectedVolumeParam = this.selectedDropdownVolume;

            if (!this.selectedDropdownColor) {

              // console.log('no color was chosen!');

              let selectedProductsByVolume = this.products.filter(function (filteredElem) {
                return filteredElem.volume === selectedVolumeParam;
              });

              // console.log(selectedProductsByVolume)
              this.products = selectedProductsByVolume;
            } else {
              // console.log(`color was chosen:${this.selectedDropdownColor}`)

              let selectedProductsByVolume = this.products.filter(function (filteredElem) {
                return filteredElem.color === selectedColorParam && filteredElem.volume === selectedVolumeParam;
              });

              // console.log(selectedProductsByVolume)
              this.products = selectedProductsByVolume;
              console.log(this.products);
            }


          })
          .catch(e => {
            console.log(e);
          });
    },

    getDataParams(selectedData) {

      if (selectedData.value === 'desc') {
        this.products.sort(function (a, b) {
          let dateA = new Date(a.createdAt);
          let dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
      } else if (selectedData.value === 'asc') {
        this.products.sort(function compare(a, b) {
          let dateA = new Date(a.createdAt);
          let dateB = new Date(b.createdAt);
          return dateA - dateB;
        });
      }

    }

  },
  mounted() {
    this.retrieveProducts();
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
  width: 70%;
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
