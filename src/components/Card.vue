<template>
  <div class="product">
    <div class='product-inner'>
      <div class="product-image-wrap">
        <router-link :to="{path: `/product/${product.id}`}" v-if='product.image_first !== ""'>
          <img :src="`https://decoplastline.ua/app/images/${product.image_first}`" class="image" />
        </router-link>
        <router-link :to="{path: `/product/${product.id}`}" v-else>
          <img :src="`https://decoplastline.ua/no-image.png`" class="image" />
        </router-link>
      </div>
      <div class="product-detail">
        <h2>{{ product.title }}</h2>
        <p><span>Опис товару</span> <br/> <br/>{{ product.description }}</p>
        <p><span>Колір:</span> {{ product.color }}</p>
        <p><span>Об'єм:</span> {{ product.volume }} мл</p>
        <p><span>Матеріал:</span> {{ product.material }}</p>
        <p><span>Комплектація:</span> {{ product.complectation }}</p>
        <router-link :to="{path: `/product/${product.id}`}" id="card-btn" class="btn btn-light" >Переглянути /
          замовити
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: ['product']
}
</script>

<style lang="scss" scoped>
.product {
  flex: 1 1 33.333%;
  width: 100%;
  padding: 25px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    flex: 1 1 45%;
  }
}


.product-inner {
  position: relative;
  padding: 25px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  perspective: 1000px;
}

.product-text-wrap {
  position: absolute;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.product-text-wrap h2 {
  color: #313131;
  font-size: 128px;
  font-weight: 900;
  opacity: 0.2;
  transform-origin: center;
}

.product-image-wrap {
  position: relative;
  z-index: 1;
  transform-origin: center;
  //margin-bottom: 25px;
  //background-color: blue;
}

.product-image-wrap .image {
  width: 100%;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
}

.product-detail {
  background-color: #FFF;
  padding: 25px;
  margin: 0px -25px -25px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #676767;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
    color: #676767;
  }

  span{
    font-weight: bold;
    font-size:16px;
  }
}

#card-btn {
  color: white;
  background-color: rgba(182, 12, 12, 0.8) !important;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

}

</style>
