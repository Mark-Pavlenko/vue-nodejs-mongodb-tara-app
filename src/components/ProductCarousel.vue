<template>
  <swiper class="swiper" :options="swiperOption">
    <!--    output images of added products from the hoisting-->
    <!--    <swiper-slide v-for="product in products" :key="product.id" :product="product">-->
    <!--      <img class="img-fluid" :src="`https://decoplastline.ua/app/images/${product.image}`">-->
    <!--    </swiper-slide>-->
    <swiper-slide><img class="img-fluid" src="../assets/home-slider-images/first.jpg"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../assets/home-slider-images/second.jpg"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../assets/home-slider-images/third.jpg"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../assets/home-slider-images/fourth.jpg"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../assets/home-slider-images/fifth.jpg"></swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import ProductDataService from "../services/GoodsDataServices";

export default {
  name: 'swiper-example-loop',
  title: 'Loop mode / Infinite loop',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      products: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods:{
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
  },
  mounted() {
    this.retrieveProducts();
  }
}
</script>

<style lang="scss" scoped>

.swiper-slide{
  width:75%;
}

.swiper-container {
  margin-top:40px;

  @media(max-width: 920px){
    height: 300px;
  }

  @media (max-width: 850px){
    height: 300px;
  }
}

.swiper-slide img{

  max-width: 75%;


  @media (max-width: 850px){
    height: 300px;
  }
}

.swiper-button-prev,
.swiper-button-next{
  color:black !important;
}
</style>
