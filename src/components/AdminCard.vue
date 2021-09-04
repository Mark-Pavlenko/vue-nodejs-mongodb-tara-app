<template>
  <div class="product">
    <div class='product-inner'>
      <div class="product-image-wrap">
        <img :src="`https://decoplastline.ua/app/images/${product.image_first}`" class="image" v-if='product.image_first !== ""'/>
        <img :src="`https://decoplastline.ua/no-image.png`" class="image" v-else/>
      </div>
      <div class="product-detail">
        <h2>{{ product.title }}</h2>
        <p><span>Опис товару</span> <br/><br/>{{ product.description }}</p>
        <p><span>Колір:</span> {{ product.color }}</p>
        <p><span>Об'єм:</span> {{ product.volume }} мл</p>
        <p><span>Матеріал:</span> {{ product.material }}</p>
        <p><span>Комплектація:</span> {{ product.complectation }}</p>
        <div class="admin-cards-buttons">
          <router-link :to="{path: `/admin/edit/${product.id}`}" class="card-btn btn btn-info">Редагувати</router-link>
          <button @click="deleteProduct(product.id)" class="card-btn btn btn-danger">Видалити</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ProductDataService from "../services/GoodsDataServices";
import axios from "axios";

export default {
  name: 'product',
  props: ['product'],
  methods:{
    deleteProduct(id) {

      ProductDataService.delete(id)
          .then(response => {
            console.log('product was deleted!');
            // console.log(response.data);

            // this.$router.push({ name: "products" });
          })
          .catch(e => {
            console.log(e);

          });

      let arr = [
        this.product.image_first,
        this.product.image_second,
        this.product.image_third,
        this.product.image_fourth,
        this.product.image_fifth,
      ];

      let newArr = arr.filter((a) => a);
      console.log(newArr);

      for(let i=0; i < newArr.length; i++) {
        const formData = newArr[i];
        console.log(formData);

        let dataOfDeletedImage = {
          name: formData
        }

        axios
            .post("http://localhost:8080/delete/image", dataOfDeletedImage,)
            .then(res => {
              console.log(res);

            })
            .catch(err => {
              console.log(err);
            });

        window.location.reload();

      }


    }
  }
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

.admin-cards-buttons{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top:20px;

  @media(max-width: 992px){
    display: flex;
    align-items: center;
    justify-content: center !important;
  }

  @media(max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center !important;
  }
}

.card-btn {
  cursor: pointer;
  border-radius:10px;


}

</style>
