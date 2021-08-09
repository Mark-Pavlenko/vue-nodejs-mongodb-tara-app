<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img src="../assets/tara-img.png"></swiper-slide>
    <swiper-slide><img src="../assets/tara-img.png"></swiper-slide>
    <swiper-slide><img src="../assets/tara-img.png"></swiper-slide>
    <swiper-slide><img src="../assets/tara-img.png"></swiper-slide>
    <swiper-slide><img src="../assets/tara-img.png"></swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-loop',
  title: 'Loop mode / Infinite loop',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
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
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  margin-top:40px;
}

.swiper-button-prev,
.swiper-button-next{
  color:black !important;
}
</style>
