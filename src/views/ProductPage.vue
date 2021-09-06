<template>
  <div class="page">
    <Header/>

    <div id="main-container">
      <div id="catalog-back">
        <h2>{{ currentProduct.title }}</h2>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div id="thumb-example">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="existImage in existedImages" :key="existImage.id" :product="existImage">
                <img :src="`https://decoplastline.ua/app/images/${existImage}`">
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
          <div class="col">
            <div class="product-detail">

              <p><span>Опис товару</span> <br/><br/>{{ currentProduct.description }}</p>
              <p><span>Колір:</span> {{ currentProduct.color }}</p>
              <p><span>Об'єм:</span> {{ currentProduct.volume }}</p>
              <p><span>Матеріал:</span> {{ currentProduct.material }}</p>
              <p><span>Комплектація:</span> {{ currentProduct.complectation }}</p>
            </div>

            <anchor-router-link :to="{name:'Home', hash:'#contacts-card'}" id="contacts"
                                class="buy-btn">
              Передзвоніть мені
            </anchor-router-link>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>

</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import AnchorRouterLink from 'vue-anchor-router-link';
import 'swiper/css/swiper.css'


import ProductDataService from "../services/GoodsDataServices";

export default {
  components: {
    AnchorRouterLink,
    Header,
    Footer,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      productImage: [],
      existedImages: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      currentProduct: ''
    }
  },
  methods: {
    getProduct(id) {
      ProductDataService.get(id)
          .then(response => {
            this.currentProduct = response.data;
            console.log(this.currentProduct);

            let totalImagesList = [
              this.currentProduct.image_first,
              this.currentProduct.image_second,
              this.currentProduct.image_third,
              this.currentProduct.image_fourth,
              this.currentProduct.image_fifth,
            ];

            this.existedImages = totalImagesList.filter((a) => a);
            console.log(this.existedImages);

          })
          .catch(e => {
            console.log(e);
          });
    },


  },
  mounted() {
    this.getProduct(this.$route.params.id);
  }
}
</script>

<style lang="scss" scoped>

#main-container {
  margin-bottom: 50px;
  padding: 10px;
}

#catalog-back {
  margin-top: 40px;

  @media(max-width: 992px) {
    margin-bottom: 70px;
  }
}

#thumb-example {

  //height: 480px;
  width: 710px;
  //background-color: #e3e3e3;
  margin-top: 25px;
  padding-bottom: 5px;

  @media(max-width: 992px) {
    margin: 0px auto;
  }
}

.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  &.gallery-top {
    height: 80%;
    width: 100%;
  }

  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    //padding: 5px;
    cursor: pointer;
  }

  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;

  }

  .swiper-button-prev,
  .swiper-button-next {
    color: black !important;
    width: calc(var(--swiper-navigation-size) / 27 * 20);


    @media(max-width: 992px) {
      width: calc(var(--swiper-navigation-size) / 200 * 20)
    }
  }
}


.col {
  //box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
}

.description-wrapper {

  //width: 80%;
  //margin-left: 40px;
  margin-top: 50px;
  padding: 15px;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  @media(max-width: 992px) {
    width: 100%;
    margin-left: 0px !important;
    margin-top: 0px !important;
  }
}

.buy-btn {

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  color: #f6f6f6;

  line-height: 100px;

  background: rgba(182, 12, 12, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  cursor: pointer;

  padding: 10px;
  text-decoration: none;

  @media (max-width: 992px) {
    line-height: 150px;
  }

  @media (max-width: 710px) {
    line-height: 100px;
  }
}

.swiper-slide {
  width: 75%;

}

.swiper-container {
  margin-top: 40px;

  //height: 250px;

  @media(max-width: 920px) {
    height: 300px;
    margin-top: -50px;
  }

  @media (max-width: 850px) {
    //height: 300px;
  }
}

.swiper-slide img {

  max-width: 75%;


  @media (max-width: 850px) {
    height: 300px;
  }

  @media (max-width: 450px) {
    max-width: 100%;
  }
}

.swiper-button-prev,
.swiper-button-next {
  color: black !important;
}

.product-detail {
  background-color: #FFF;
  padding: 25px;
  //margin: 0px -25px -25px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    //color: #676767;
    margin-bottom: 15px;
  }

  p {
    //font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
    //color: #676767;
  }

  span {
    font-weight: bold;
    font-size: 16px;
  }
}

</style>
