<template>
  <div class="row">
    <div class="col-4"><Sidebar /></div>
    <div class="col-6 form-wrapper" v-if="!submitted">
      <div class="form">

<!--        <input type="file" name="uploaded_image"  v-on="product.image" id="file" />-->
        <input type="text" name="uploaded_image"  v-model="product.image" id="file" />

        <label for="title">Заголовок</label>
        <input
            type="text"
            id="title"
            required
            v-model="product.title"
        />

        <label for="description">Описание</label>
        <input
            class="form-control"
            id="description"
            required
            v-model="product.description"
            name="description"
        />

        <div class="selects-wrapper">

          <div class="color">
            <label for="color">Цвет: </label>
            <select v-model="product.color" name="color" id="color">
              <option value="Золотой">Золотой</option>
              <option value="Красный">Красный</option>
              <option value="Синий">Синий</option>
            </select>
          </div>

          <div class="volume">
            <label for="volume">Объём: </label>
            <select v-model="product.volume" name="volume" id="volume">
              <option value="10">10 ml</option>
              <option value="25">25 ml</option>
              <option value="50">50 ml</option>
              <option value="100">100 ml</option>
              <option value="250">250 ml</option>
              <option value="550">550 ml</option>
            </select>
          </div>
        </div>

        <label for="description">Стоимость</label>
        <input
            class="form-control"
            id="cost"
            required
            v-model="product.cost"
            name="cost"
        />

        <button type="submit" @click="saveProduct">Добавить товар</button>
      </div>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProduct">Add</button>
    </div>
  </div>
</template>


<script>
import Sidebar from "../components/Sidebar";

import ProductsDataServices from "../services/ProductsDataServices";
  export default {
    components:{
      Sidebar
    },
    data() {
      return {
        product: {
          id: null,
          title: "",
          description: "",
          color: "",
          volume: "",
          cost: null,
          image: ""
        },
        submitted: false
      };
    },
    methods:{
      saveProduct() {
        let data = {
          title: this.product.title,
          description: this.product.description,
          color: this.product.color,
          volume: this.product.volume,
          cost: this.product.cost,
          image: this.product.image
        };

        ProductsDataServices.create(data)
            .then(response => {
              this.product.id = response.data.id;
              console.log(response.data);
              this.submitted = true;
            })
            .catch(e => {
              console.log(e);
            });
      },
      newProduct() {
        this.submitted = false;
        this.product = {};
      }
    }
  }
</script>

<style lang="scss" scoped>
.form-wrapper {
  margin-top: 100px;
}
.form {
  display: flex;
  flex-direction: column;
  button {
    margin-top: 20px;
  }
}
.selects-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.volume {
  margin-right: 50px;
}
</style>
