<template>
  <div class="home">
    <Header/>
    <CardCarousel/>
    <!--description block -->
    <div class="description-container" ref="about">
      <span id="about-us" class="description-container-title">О нас</span>

      <div class="description-container-text">
        Мы являемся национальным производителем и представляем тару разного
        объёма. <br/>
        Данная тара практична в использовании и позволяет хранить различную продукцию <br/>
        косметической, фармацевтической и пищевой промышлености.<br/>
        Для её производства используется качественное импортное сырьё. <br/>
        Вся продукция является сертифицированной. <br/>
        Компания DecoPlastLine изготовляет косметическую упаковку для <br/>
        производителей косметики, фармацевтики, бытовой химии, автохимии, пищевых добавок.
      </div>
    </div>

    <!--goods-->
    <span class="description-container-title">Каталог товаров</span>
    <div id="goods-list">
      <div class="catalog__wrapper row justify-content-between">
        <Card class="product-card" v-for="product in products"
              :key="product.color"
              :product="product"
        />
      </div>
    </div>

    <!--contacts-->
    <div class="contacts-container" ref="contacts">
      <span class="description-container-title">Обратная связь</span>
      <div class="contacts-form">
        <div id="contacts-card-body" class="row">
          <div class="col-lg-6 col-12">
            <div class="contacts-wrapper">
              <div class="input">
                <label>Имя</label>
                <input type="text"/>
              </div>
              <div class="input">
                <label>Электронный адрес</label>
                <input type="email"/>
              </div>
              <div class="input">
                <label>Моб. Телефон</label>
                <input type="text"/>
              </div>
              <button>Отправить</button>
            </div>
          </div>
          <div class="col-lg-6 col-12 d-flex justify-content-center">
            <div class="contacts-image">
              <div class="contacts-user">
                <img src="../assets/Profile.png" class="img-fluid" alt=""/>
              </div>
              <div class="contacts-desc">
                Введите ваши данные и мы с вами свяжемся
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!--go up btn-->

    <button class="go-top-button" v-if="this.windowTop >= 250" @click="goToTop()">
      <!--      v-if="scrollFromTop >= 1400" @click="goToTop"-->

      <img src="@/assets/arrow-up.png" alt=""/>
    </button>

    <!--footer-->
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card.vue'
import CardCarousel from "../components/Carousel"
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  components: {
    Card,
    CardCarousel,
    Footer,
    Header
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
      windowTop: 0
    }
  },
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
    },

    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  name: 'Home',
}
</script>

<style lang="scss" scoped>

@import "../scss/_variables.scss";

//description block
.description-container-title {
  display: block;
  margin-bottom: 30px;
  padding-top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 75px;

  color: rgba(0, 0, 0, 0.85);
}

.description-container {
  margin-top: 50px;
  padding-bottom: 50px;
  background: #f6f6f6;
}

.description-container-text {
  line-height: 2;
  font-size: 18px;
  margin: 0px auto;
  width: 80%;
  text-align: center;

}

//products

#goods-list {
  //min-height: 100vh;
  overflow: hidden;
  //background-color: #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.products {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}

//contacts
.contacts-container {
  background: #f6f6f6;
  height: 725px;

  @media(max-width: 992px) {

  }
}

.contacts-form {
  width: 100%;
  max-width: 839px;
  height: auto;
  padding: 15px 0;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0px auto;
  /* border-radius: 12px; */
  /* margin: 0px auto; */
  /* margin-bottom: -26px; */


  @media (max-width: 992px) {
  margin-bottom: 20px;
  }
}

#contacts-card-body {
  padding-bottom: 10px;
}

.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  input {
    width: 342px;
    height: 58px;
    background: #ffffff;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    outline: none;
    border: none;
    padding-left: 20px;
  }

  label {
    margin-bottom: 10px;
  }
}

.contacts-wrapper {
  padding: 0 10px 0 10px;
  // width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 342px;
    height: 58px;
    color: white;

    background: rgba(182, 12, 12, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;

    outline: none;
    border: none;

    margin-top: 30px;
  }
}

.contacts-user {
  width: 180px;
  height: 180px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background: rgba(182, 12, 12, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-bottom: 40px;

  @media (max-width: 992px) {
    display: none
  }
}

.contacts-desc {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
  color: rgba(0, 0, 0, 0.85);
  width: 345px;

  @media (max-width: 992px) {
    display: none;
  }
}

.contacts-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    margin-top: 50px;
  }
}

//go to top btn
.go-top-button {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: rgba(182, 12, 12, 0.8);
  border-radius: 100%;
  bottom: calc(15px);
  right: 15px;
  cursor: pointer;
}


</style>
