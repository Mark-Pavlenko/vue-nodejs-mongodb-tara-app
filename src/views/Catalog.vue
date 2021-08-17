<template>
  <div class="home">
    <Header/>

    <div id="dropdowns-container" class="d-flex justify-content-around flex-wrap" >
      <div class="p-2" >
        <Dropdown
            :options="[{ id: 1, name: 'Option 1'}, { id: 2, name: 'Option 2'}]"
            :disabled="false"
            name="color"
            :maxItem="10"
            placeholder="Выберите объем">
        </Dropdown>
      </div>
      <div class="p-2">
                <Dropdown
                    :options="[{ id: 1, name: 'Option 1'}, { id: 2, name: 'Option 2'}]"
                    :disabled="false"
                    name="color"
                    :maxItem="10"
                    placeholder="Выберите цвет">
                </Dropdown>
      </div>
    </div>



    <!--    goods cards block-->
    <div id="goods-list">
      <div class="catalog__wrapper row justify-content-between">
        <Card class="product-card" v-for="product in products"
              :key="product.color"
              :product="product"
        />
      </div>
    </div>

    <Footer/>

  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Dropdown from 'vue-simple-search-dropdown';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default {
  components: {
    Card,
    Dropdown,
    Header,
    Footer
  },
  data() {
    return {
      products: [
        {
          title: 'Nike Air Max 1',
          // bgtext: 'NIKE',
          src: require('../assets/about-img.png'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Nike flex 2',

          // bgtext: 'AIR',
          src: require('../assets/about-img.png'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Nike Air Max 3',
          // bgtext: 'NIKE',
          src: require('../assets/about-img.png'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Nike Roche Runs 4',

          // bgtext: 'MAX',
          src: require('../assets/about-img.png'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Nike Roche Runs 5',

          // bgtext: 'MAX',
          src: require('../assets/about-img.png'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Nike Roche Runs 6',

          // bgtext: 'MAX',
          src: require('../assets/about-img.png'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>

#dropdowns-container{
  margin-top:20px;
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

//.dropdown .dropdown-input{
//  text-align:center !important;
//}

</style>
