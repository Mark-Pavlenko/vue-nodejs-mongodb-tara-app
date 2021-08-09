<template>
  <div class="home">
    <Header/>

    <!--description block -->
    <div class="description-container" ref="about">
      <span class="description-container-title">О нас</span>

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
      <div id="goods-list">
        <div class="products">
          <Card v-for="product in products"
                :key="product.color"
                :product="product"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'

export default {
  data() {
    return {
      products: [
        {
          title: 'Nike Air Max',
          color: 'green',
          // bgtext: 'NIKE',
          src: require('../assets/green-shoe.png'),
          description: 'Desc 1'
        },
        {
          title: 'Nike flex',
          color: 'blue',
          // bgtext: 'AIR',
          src: require('../assets/blue-shoe.png'),
          description: 'Desc 2'
        },
        {
          title: 'Nike Roche Runs',
          color: 'pink',
          // bgtext: 'MAX',
          src: require('../assets/pink-shoe.png'),
          description: 'Desc 3'
        }
      ]
    }
  },
  name: 'Home',
  components: {
    Header,
    Card
  }
}
</script>

<style lang="scss" scoped>

//description block
.description-container-title {
  display: block;
  margin-bottom: 30px;
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
  width: 80%;
  text-align: center;

}

//products

#goods-list {
  min-height: 100vh;
  overflow: hidden;

  background-color: #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.products {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}
</style>
