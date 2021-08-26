<template>
  <div>

    <!--main header-->
    <div class="header">
      <div class="row">
        <div class="col-md-4">
          <div class="dbox w-100 text-center">
            <div>
              <div class="logo">
                <img src="../assets/logo.png" class="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="dbox w-100 text-center">
            <div class="header-contacts-data">

              <div class="d-flex justify-content-center">
                <div class="contacts">
                  <div class="contacts__description">
                    <img src="../assets/time.png" alt=""/>
                    <p>пн - пт 10:00 - 18:00 <br/> сб - вс Выходной</p>
                  </div>
                  <div class="contacts__description">
                    <img src="../assets/location.png" alt=""/>
                    <p>г. Харьков</p>
                  </div>
                  <div class="contacts__description">
                    <img src="../assets/envelope.png" alt="" style="width: 30px; "/>
                    decoplastline@gmail.com
                    <br/>
                    banochkiopt@gmail.com
                  </div>
                  <div class="contacts__description">
                    <img src="../assets/calling.png" alt=""/>
                    <p>0631443406</p>
                  </div>

                  <div class="contacts__description">
                    <img src="../assets/instagram.jpg" alt=""
                         style="width: 30px;;margin-left: -5px; margin-right: 15px;"/>
                    <a href="https://www.instagram.com/decoplastline/" style="">@decoplastline</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="dbox w-100 text-center">
            <div class=" align-items-center justify-content-center">
              <div class="align-middle">
                <anchor-router-link :to="{name:'Home', hash:'#contacts-card'}" id="contacts"
                                    class="header__button">
                  Перезвоните Мне
                </anchor-router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--menu-->
    <div class="menu__wrapper">
      <div id="header-container" class="container">
        <div class="menu">
          <div class="web">

            <div id="nav">
              <div class="menu_btn">
                <router-link to="/" class="router-link">Главная</router-link>
              </div>
              <div class="menu_btn">
                <router-link to="/catalog" class="router-link">Каталог</router-link>
              </div>
              <div id="about" class="menu_btn">
                <anchor-router-link :to="{name:'Home', hash:'#about-us'}" class="router-link">О Нас</anchor-router-link>
              </div>
              <div id="contacts-list-item" class="menu_btn">
                <anchor-router-link class="router-link" :to="{name:'Home', hash:'#footer-contacts'}">
                  Контакты
                </anchor-router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import CardCarousel from './Carousel.vue';
import AnchorRouterLink from 'vue-anchor-router-link';

export default {
  components: {
    AnchorRouterLink,
    CardCarousel
  },
}
</script>

<style lang="scss" scoped>

.container {
  @media(max-width: 992px) {
    //max-width: 770px;
  }
}

.header {
  padding-top: 25px;
  padding-bottom: 25px;

  @media (max-width: 992px) {
    //margin-top: 0px;
    //margin-bottom: 0px;
  }

  &__button {
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

    @media (max-width: 992px) {
      width: 400px;
      margin: 0;
      padding: 0;
    }

  }
}

.logo {

  @media(min-width: 750px) {
    margin-top: 60px;
    margin-left: 30px;
  }

  @media (max-width: 992px) {
    line-height: 150px;

  }

  @media (max-width: 710px) {
    line-height: 100px;
  }
}

.header__button {
  padding: 10px;
  text-decoration: none;

  @media (max-width: 992px) {
    line-height: 150px;
  }

  @media (max-width: 710px) {
    line-height: 100px;
  }
}

.contacts {
  //display: flex;
  //flex-direction: column;
  //position: relative;
  margin: 0px auto;
  @media (max-width: 992px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: 992px) {
    //margin-right: 10px;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: #000000;
    top: 0;
    left: -50px;
    width: 1px;
    height: 100px;
    @media (max-width: 1200px) {
      display: none;
    }
  }

}

.contacts__description {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;

  span {
    font-weight: bold;
  }


  @media (max-width: 992px) {

    #city {
      margin-left: -35px !important;
    }

    padding-left: 0px;
    p, a {
      //width: 160px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }



  img {
    margin-right: 18px;
  }
}


.menu__wrapper {
  width: 100%;
  height: 81px;
  background: #f6f6f6;
  box-sizing: border-box;
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
}

.menu {
  //position: relative;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  //width: 100%;
  height: 81px;

  &__wrapper {
    width: 100%;
    height: 81px;
    // padding: 0 64px;
    background: #f6f6f6;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 992px) {
    margin-top: 30px;
    margin-left: 70px;
  }

  @media (max-width: 710px) {
    margin-left: 20px;
  }
}

#nav {
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    padding: 0 !important;
    margin-left: -10px;
  }

  @media (max-width: 710px) {
    margin-left: -10px;
  }
}

.menu_btn {
  margin-right: 170px;
  cursor: pointer;

  @media(max-width: 1200px) {
    margin-right: 140px;
  }
  @media(max-width: 992px) {
    margin-right: 100px;
  }
  @media(max-width: 710px) {
    font-size: 14px;
    margin-right: 30px;
    //margin-left:-10px;
  }
}

.router-link {
  text-decoration: none;
  font-weight: normal !important;
}

.row {
  --bs-gutter-x: 0rem !important;
}

.header-contacts-data {
  @media(max-width: 992px) {
    margin-left: 30px;
  }
}

#header-cart-icon-block {
  margin-top: -30px;
  margin-left: 0 !important
}

#header-cart-icon {
  width: 25%;
}

.align-middle {
  @media (min-width: 750px) {
    margin-top: 60px;
    margin-left: 30px;
  }
}

</style>
