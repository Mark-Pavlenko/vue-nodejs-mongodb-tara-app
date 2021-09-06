<template>
  <swiper class="swiper" :options="swiperOption">
    <!--        output images of added products from the hoisting-->
<!--    <swiper-slide v-for="productTitleImage in allExistingImages" :key="allExistingImages.id" :product="allExistingImages">-->
<!--      <img class="img-fluid" :src="`https://decoplastline.ua/app/images/${productTitleImage}`">-->
<!--    </swiper-slide>-->
    <swiper-slide><img class="img-fluid" src="../assets/tara-img-1.png"></swiper-slide>
<!--    <swiper-slide><img class="img-fluid" src="../assets/tara-img-2.jpg"></swiper-slide>-->
    <swiper-slide><img class="img-fluid" src="../assets/tara-img-3.jpg"></swiper-slide>
    <swiper-slide><img class="img-fluid" src="../assets/tara-img-4.jpg"></swiper-slide>
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
        centeredSlides: true,
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
      allFirstImages: [],
      allExistingImages: []
    }
  },
  methods: {
    retrieveProducts() {
      ProductDataService.getAll()
          .then(response => {
            this.products = response.data;
            // console.log(response.data);

            for (let i = 0; i < this.products.length; i++) {
              this.allFirstImages.push(this.products[i].image_first);
            }

          // console.log(this.allFirstImages);

          this.allExistingImages =  this.allFirstImages.filter(e =>  e);
            // console.log(this.allExistingImages);
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

.swiper-slide {
  width: 75%;

  @media(min-width: 992px) {
    img {
      max-width: 50%;
    }
  }
}

.swiper-container {
  height: 400px;
  margin-top: 40px;

  @media(max-width: 920px) {
    height: 300px;
  }

  @media (max-width: 850px) {
    height: 300px;
  }
}

.swiper-slide img {

  //max-width: 30%;


  @media (max-width: 850px) {
    height: 300px;
  }

  @media(min-width: 910px) {
    height: 400px;
  }
}

.swiper-button-prev,
.swiper-button-next {
  color: black !important;
}
</style>
