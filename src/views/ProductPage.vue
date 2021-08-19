<template>
  <div class="page">
    <Header/>

    <div class="container-fluid">
      <div id="catalog-back" class="">
        <p>Каталог</p>
      </div>
      <div class="row">
        <div class="col">
          <div id="thumb-example" class="container-fluid">
            <!-- swiper1 -->
            <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
              <swiper-slide class="slide-1"></swiper-slide>
              <swiper-slide class="slide-2"></swiper-slide>
              <swiper-slide class="slide-3"></swiper-slide>
              <swiper-slide class="slide-4"></swiper-slide>
              <swiper-slide class="slide-5"></swiper-slide>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
              <swiper-slide class="slide-1"></swiper-slide>
              <swiper-slide class="slide-2"></swiper-slide>
              <swiper-slide class="slide-3"></swiper-slide>
              <swiper-slide class="slide-4"></swiper-slide>
              <swiper-slide class="slide-5"></swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="col">
          <div class="description-wrapper">
            Мы предлагаем Вам оригинальную тару для косметики и парфюмерии: —
            стеклянные флаконы с кисточками для лака (гель лака);<br />
            — стеклянные и пластиковые флаконы для парфюмерии и
            автопарфюмерии;<br />
            — пластиковые, металлические, стеклянные баночки для кремов и
            лосьонов;<br />
            — триггеры, дозаторы, спреи, а также другие комплектующие.
            {{ windowWidth }}
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
import Header from '../components/Header';
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Header,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="scss" scoped>
#thumb-example {
  height: 480px;
  width: 710px;
  background-color: #e3e3e3;
  margin-top:25px;
  padding-bottom: 5px;
}

.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;

    &.slide-1 {
      background-image: url('../assets/gold-bank.png');
      margin-top:5px;
    }

    &.slide-2 {
      background-image: url('../assets/gold-bank.png');
      margin-top:5px;
    }

    &.slide-3 {
      background-image: url('../assets/gold-bank.png');
      margin-top:5px;
    }

    &.slide-4 {
      background-image: url('../assets/gold-bank.png');
      margin-top:5px;
    }

    &.slide-5 {
      background-image: url('../assets/gold-bank.png');
      margin-top:5px;

    }
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
  }
}
</style>
