<template>
  <div>

    <div class="header container">

      <div class="logo">
        <img src="../assets/logo.png" alt=""/>
      </div>

      <div class="contacts">
        <div class="contacts__description">
          <img src="../assets/time.png" alt=""/>
          <p>
            пн-пт 10:00 до 18:00 <br/>
            сб-вс выходной
          </p>
        </div>
        <div class="contacts__description">
          <img src="../assets/location.png" alt=""/>
          <p>г. Харьков</p>
        </div>
        <div class="contacts__description">
          <img src="../assets/calling.png" alt=""/>
          <p>+380 63 144 34 06</p>
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
        <div
            class="header__button"
            @click="scrollToContacts($event)"
        >
          Перезвоните Мне
        </div>
      </div>

      <span id="contacts" class="header__button" @click="scrollToContacts($event)">
        Перезвоните Мне
      </span>

    </div>

    <div class="menu__wrapper">
      <div id="header-container" class="container">
        <div class="menu">
          <div class="web">
            <div id="nav">
              <div class="menu_btn">Главная</div>
              <div class="menu_btn">Каталог</div>
              <div id="about" class="menu_btn"> О Нас</div>
              <div id="contacts-list-item" class="menu_btn"> Контакты</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CardCarousel/>

    <div class="description-container" ref="about">
        <span class="description-container-title">О нас</span>
<!--      <div class="container-image-title">-->
<!--        <img src="../assets/logo.png" alt=""/>-->
<!--      </div>-->
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

<!--    goods-->
    <div>
      <span class="description-container-title">Каталог товаров</span>
    </div>

  </div>
</template>

<script>
import CardCarousel from './CardCarousel'

export default {
  components: {
    CardCarousel
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 20px;

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
      width: 230px;
      margin: 0;
      padding: 0;
    }
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

  @media (max-width: 992px) {
    padding-left: 0px;
    p {
      width: 178px;
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

// header menu

.menu__wrapper {
  width: 100%;
  height: 81px;
  background: #f6f6f6;
  box-sizing: border-box;
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 81px;
  position: relative;
  margin-left: 50px;
}

#nav {
  display: flex;
  justify-content: center;
}

.menu_btn {
  margin-right: 170px;
  cursor: pointer;
}

.description-container-title {
  display: block;
  margin-bottom: 30px;
  padding-top:30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 75px;

  color: rgba(0, 0, 0, 0.85);
}

.description-container{
  margin-top:50px;
  padding-bottom: 50px;
  background: #f6f6f6;
}

.description-container-text{
  line-height: 2;
  font-size: 18px;
  margin: 0px auto;
  width: 80%;
  text-align: center;

}


</style>
