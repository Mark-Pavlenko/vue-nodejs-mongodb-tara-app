<template>
  <div>
    <Header/>

    <!--add-product-->
    <div id="add-product-card">
      <section class="ftco-section">
        <div class="container">

          <div class="text-center">
            <h2 class="description-container-title">{{currentProduct.title}}</h2>
            <br/>
          </div>

          <div class="row justify-content-between">
            <div class="col-5" style="  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.5);">
              <div class="product-image-additional">
                <swiper class="swiper" :options="swiperOption">
                  <swiper-slide v-for="existImage in existedImages" :key="existImage.id" :product="existImage">
                    <img :src="`https://decoplastline.ua/app/images/${existImage}`">
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
            </div>
            <div class="col-5">
              <div class="product-image-additional">
                {{ this.currentProduct.description }}

              </div>
            </div>
          </div>

        </div>
      </section>
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
            console.log(this.existedImages)

            //get five images
            // for (let i = 0; i < 5; i++) {
            //   this.existedImages.push(this.currentProduct.image);
            //   // console.log(this.existedImages);
            // }
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


.products {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}

//add-product
.ftco-section {
  margin-top: 50px;
  margin-bottom: 50px;

  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media(max-width: 992px) {

  }
}

#add-product-card-body {
  padding-bottom: 10px;
}

.input, {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  input,
  textarea {
    width: 800px;
    height: 50px;
    background: #ffffff;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    outline: none;
    border: none;
    padding-left: 20px;
    margin: 0px auto;

    @media(max-width: 910px) {
      width: 500px;
    }

    @media(max-width: 710px) {
      width: 280px;
    }


  }

  label {
    margin-bottom: 10px;
  }
}


.add-product-user {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
}

.add-product-desc {
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

.add-product-image {
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
}

//
#add-product-title-block,
#form-body {
  background-color: white;
}

.container{
  //display: flex;
  align-content: space-between;
}

.description-container-title {
  margin-top: 20px;
  margin-bottom: 20px;
}

.image-loader {
  padding-top: 10px;
}

.product-image {

  width: 60%;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.5);
  margin: 30px auto;
  margin-bottom: 0px;

  img {
    width: 100%;
  }
}

#product-image-main-container {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  padding-top: 10px;
  margin-top: 40px;
  margin-bottom: 20px;
  padding-bottom: 25px;
}

#product-image-additional-container {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  padding-bottom: 25px;
  padding-top: 25px;
}

.product-image-additional {
  width: 100%;
  margin: 30px auto;
  margin-bottom: 0px;

  h5 {
    padding-top: 10px;
  }

  img {
    width: 95%;
    margin-bottom: 20px;
  }
}


.add-image-block {
  margin-bottom: 20px;
}

#editProductForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#add-images-form {
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 30px;
}


.swiper-button-prev,
.swiper-button-next {
  color: black !important;
}

</style>

<!--<style lang="scss" scoped>-->

<!--#main-container {-->
<!--  margin-bottom: 50px-->
<!--}-->

<!--#catalog-back {-->
<!--  margin-top: 20px;-->
<!--}-->

<!--#thumb-example {-->

<!--  //height: 480px;-->
<!--  width: 710px;-->
<!--  //background-color: #e3e3e3;-->
<!--  margin-top: 25px;-->
<!--  padding-bottom: 5px;-->

<!--  @media(max-width: 992px) {-->
<!--    margin-top: 40px;-->
<!--  }-->
<!--}-->

<!--.swiper {-->
<!--  .swiper-slide {-->
<!--    background-size: cover;-->
<!--    background-position: center;-->
<!--  }-->

<!--  &.gallery-top {-->
<!--    height: 80%;-->
<!--    width: 100%;-->
<!--  }-->

<!--  &.gallery-thumbs {-->
<!--    height: 20%;-->
<!--    box-sizing: border-box;-->
<!--    //padding: 5px;-->
<!--    cursor: pointer;-->
<!--  }-->

<!--  &.gallery-thumbs .swiper-slide {-->
<!--    width: 25%;-->
<!--    height: 100%;-->
<!--    opacity: 0.4;-->
<!--  }-->

<!--  &.gallery-thumbs .swiper-slide-active {-->
<!--    opacity: 1;-->

<!--  }-->

<!--  .swiper-button-prev,-->
<!--  .swiper-button-next {-->
<!--    color: black !important;-->
<!--  }-->
<!--}-->

<!--.description-wrapper {-->
<!--  width: 80%;-->
<!--  margin-left: 40px;-->
<!--  margin-top: 50px !important;-->
<!--}-->

<!--.buy-btn {-->

<!--  font-family: Roboto;-->
<!--  font-style: normal;-->
<!--  font-weight: normal;-->
<!--  font-size: 21px;-->
<!--  color: #f6f6f6;-->

<!--  line-height: 100px;-->

<!--  background: rgba(182, 12, 12, 0.8);-->
<!--  border: 1px solid rgba(0, 0, 0, 0.1);-->
<!--  box-sizing: border-box;-->
<!--  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);-->
<!--  border-radius: 20px;-->

<!--  cursor: pointer;-->

<!--  padding: 10px;-->
<!--  text-decoration: none;-->

<!--  @media (max-width: 992px) {-->
<!--    line-height: 150px;-->
<!--  }-->

<!--  @media (max-width: 710px) {-->
<!--    line-height: 100px;-->
<!--  }-->
<!--}-->

<!--.swiper-slide {-->
<!--  width: 75%;-->

<!--}-->

<!--.swiper-container {-->
<!--  margin-top: 40px;-->

<!--  //height: 250px;-->

<!--  @media(max-width: 920px) {-->
<!--    height: 300px;-->
<!--    margin-top: -50px;-->
<!--  }-->

<!--  @media (max-width: 850px) {-->
<!--    //height: 300px;-->
<!--  }-->
<!--}-->

<!--.swiper-slide img {-->

<!--  max-width: 75%;-->


<!--  @media (max-width: 850px) {-->
<!--    height: 300px;-->
<!--  }-->
<!--}-->


<!--</style>-->
