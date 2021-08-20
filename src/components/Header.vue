<template>
  <div>

    <div class="header container">

      <div class="logo">
        <img id="header-logo-img" src="../assets/logo.png" alt=""/>
      </div>

      <div class="contacts">
        <div class="contacts__description">
          <img src="../assets/time.png" alt=""/>
          <p>
            <span>Пн-Пт</span> 10:00 до 18:00 <br/>
            <span>Cб-Вс</span> - выходной
          </p>
        </div>
        <div class="contacts__description">
          <img src="../assets/location.png" alt=""/>
          <p id="city">г. Харьков</p>
        </div>
        <div class="contacts__description">
          <img src="../assets/calling.png" alt=""/>
          <span>+380 63 144 34 06</span>
        </div>
      </div>

      <div to="#mobile-contacts" v-if="mobile">
        <div class="contacts">
          <div class="contacts__description">
            <img src="../assets/time.png" alt=""/>
            <p>9 - 19 сб - вс</p>
          </div>
          <div class="contacts__description">
            <img src="../assets/location.png" alt=""/>
            <p>Ул Пушкинка 666 -2345</p>
          </div>
          <div class="contacts__description">
            <img src="../assets/calling.png" alt=""/>
            <p>8 800 555 35 35</p>
          </div>
        </div>
        <anchor-router-link :to="{name:'Home', hash:'#contacts-card-body'}" class="header__button">
          Перезвоните Мне
        </anchor-router-link>
      </div>

      <anchor-router-link :to="{name:'Home', hash:'#contacts-card-body'}" id="contacts" class="header__button">
        Перезвоните Мне
      </anchor-router-link>
    </div>

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
                <anchor-router-link  :to="{name:'Home', hash:'#about-us'}" class="router-link">О Нас</anchor-router-link>
              </div>

              <div id="contacts-list-item" class="menu_btn">
                <anchor-router-link class="router-link" :to="{name:'Home', hash:'#contacts-card-body'}">
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

.container{
  @media(max-width: 992px){
    //max-width: 770px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 20px;

  @media (max-width: 992px){
    margin-top:0px;
    margin-bottom: 0px ;
  }

  &__button {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 2.3;
    color: #f6f6f6;

    width: 285px;
    height: 55px;
    left: 1598px;

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

#header-logo-img{
  @media(max-width: 992px){
    width: 95%;
    margin-left: -40px;
  }
}

.header__button{
  @media(max-width: 992px){
    width: 250px;
    margin-left: 20px;
    text-decoration: none;

    //font-size:20px;
    //padding-left:10px;
    //padding-right:10px;
  }
}

.contacts {
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 992px) {
    margin-top: 30px;
    margin-bottom: 30px;
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
    p {
      width: 160px;
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
  position: relative;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  width: 100%;
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
    margin-left:30px;
  }



}

#nav {
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    padding: 0 !important;
  }

}

.menu_btn {
  margin-right: 170px;
  cursor: pointer;

  @media(max-width:1200px){
    margin-right: 160px;
  }
  @media(max-width:992px){
    margin-right: 110px;
  }
}

.router-link{
  text-decoration: none;
  font-weight: normal !important;
}



</style>
