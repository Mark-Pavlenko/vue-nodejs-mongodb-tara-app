<template>
  <div class="home">
    <Header/>
    <CardCarousel/>
    <!--description block -->
    <div class="description-container" ref="about">
      <span id="about-us" class="description-container-title">Про нас</span>
      <div class="logo">
        <img src="../assets/logo.png" class="img-fluid" alt=""/>
      </div>
      <br/>
      <div class="description-container-text">
        Ми є національним виробником і пропонуємо тару різного об'єму.
        Дана тара практична в використанні і дозволяє
        зберігати різну продукцію косметичної, фармацевтичної та харчової промисловості.
        Для її виробництва
        використовується якісна імпортна сировина.
        Вся продукція є сертифікованою.
        Компанія DecoPlastLine виготовляє косметичну упаковку для виробників косметики, фармацевтики, побутової хімії,
        автохімії, харчових добавок.
      </div>
    </div>

    <!--products-->
    <span class="description-container-title">Каталог товарів</span>
    <div id="goods-list">
      <div class="catalog__wrapper row justify-content-between">
        <Card class="product-card" v-for="product in products"
              :key="product.id"
              :product="product"
        />
      </div>
    </div>

    <!--contacts-->
    <div id="contacts-card">
      <section class="ftco-section">
        <div class="container">
          <div id="contacts-title-block" class="row justify-content-center">
            <div class="col-md-8 text-center">
              <h2 class="description-container-title">Контакти</h2>
            </div>
          </div>

          <div class="row justify-content-center">
            <div id="form-body" class="wrapper">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="dbox w-100 text-center">
                        <div class="contacts-image">
                          <div class="contacts-user">
                            <img src="../assets/Profile.png" class="img-fluid" alt=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="test" class="col-lg-10">
                  <div class="contacts-wrapper">
                    <h3 class="mb-4 text-center">Напишіть нам, и ми обов'язково з вами зв'яжемось!</h3>

<!--                    <form action="https://formspree.io/f/xpzkkaqz" method="POST"  class="contacts-wrapper">-->
                    <form role="form" method="POST" @submit.prevent="sendEmail" class="contacts-wrapper">

                      <div class="input">
                        <label>Ім'я</label>
                        <input type="text" name="Имя" placeholder="Ваше ім'я" v-model="nameMsg" required/>
                      </div>

                      <div class="input">
                        <label>Електронна адреса</label>
                        <input type="email" name="E-Mail" placeholder="Електронна адреса" v-model="emailMsg" required/>
                      </div>

                      <div class="input">
                        <label>Моб. Телефон</label>
                        <input type="phone" name="Номер телефона" placeholder="Номер телефону" v-model="mobileMsg" required/>
                      </div>

                      <div class="input">
                        <label>Текст повідомлення</label>
                        <textarea type="text" name="Текст сообщения" placeholder="Текст повідомлення" v-model="messageMsg" required/>
                      </div>

                      <button id="footer" type="submit" >Відправити</button>

                      <div class="messageIsSending" v-if="loadingTxt === true">
                        <p class="mb-8 text-primary">Будь ласка, зачекайте. Відбувається відправка повідомлення...</p>
                      </div>

                      <div class="add-product-wrapper" v-if="messageIsSent === true">
                        <p>Повідомлення було успішно відправлено!</p>
                      </div>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

import ProductDataService from "../services/GoodsDataServices";

import axios from 'axios';

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
      windowTop: 0,
      products: [],
      nameMsg: '',
      emailMsg: '',
      mobileMsg: '',
      messageMsg: '',
      loadingTxt: false,
      messageIsSent: false
    }
  },
  methods: {
    retrieveProducts() {
      ProductDataService.getAll()
          .then(response => {
            this.products = response.data;
            // console.log(response.data);

          })
          .catch(e => {
            console.log(e);
          });
    },
    goToTop() {
      window.scrollTo(0, 0);
    },
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    },
    sendEmail() {
      this.loadingTxt = true;

      axios.post('https://formspree.io/f/myyllgkv', {
        'Имя пользователя': this.nameMsg,
        'E-mail пользователя': this.emailMsg,
        _subject: `Форма обратной связи`,
        'Мобильный телефон': this.mobileMsg,
        'Текст сообщения': this.messageMsg,
      }).then((response) => {
        this.nameMsg = '';
        this.emailMsg = '';
        this.mobileMsg = '';
        this.messageMsg = '';
        this.loadingTxt = false;
        this.messageIsSent = true;
        //i redirect my app to '/success' route once payload completed.
        // this.$router.push({path: '/success'});
      }).catch((error) => {
        if (error.response) {
// eslint-disable-next-line no-alert
          alert(error);
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.retrieveProducts();
  }
  ,
  name: 'Home',
}
</script>

<style lang="scss" scoped>

@import "../scss/_variables.scss";

//description block
.description-container-title {
  display: block;
  margin-bottom: 20px;
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
  width: 60%;
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

#contacts-card {
  //min-height: 100vh;
  overflow: hidden;
  //background-color: #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
}

.products {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}

//contacts
.ftco-section {
  margin-top: 50px;
  margin-bottom: 50px;
  background: #f6f6f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

  input,
  textarea {
    width: 450px;
    height: 60px;
    background: #ffffff;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    outline: none;
    border: none;
    padding-left: 20px;
  }

  textarea {
    padding-top: 10px;
    padding-right: 15px;
    height: 200px;
  }

  label {
    margin-bottom: 10px;
  }

  @media(max-width: 450px) {
    input,
    textarea {
      width: 350px;
    }
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
    width: 350px;
    height: 60px;
    color: white;

    background: rgba(182, 12, 12, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;

    outline: none;
    border: none;

    margin-top: 20px;
    margin-bottom: 40px;
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
    //margin-top: 50px;
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
  z-index: 100;
}

#contacts-title-block,
#form-body {
  background-color: white;
}

.messageIsSending{
  font-weight:bold;
  font-size:18px;
}

.add-product-wrapper {
  //padding: 0 10px 0 10px;
  // width: 100%;
  // height: 100%;
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  p{
    font-weight:bold;
    color: green;
    font-size:18px;
  }
}

</style>
