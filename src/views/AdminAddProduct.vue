<template>
  <div id="add-product-page" class="row">
    <div class="col-4">
      <Sidebar/>
    </div>
    <div class="col-6 form-wrapper" v-if="!submitted">
      <div class="form">

        <input type="file" name="file" id="file"/>

        <label for="title">Заголовок</label>
        <input
            type="text"
            id="title"
            required
            v-model="product.title"
        />

        <label for="description">Описание</label>
        <textarea
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
              <option value="Белый">Белый</option>
              <option value="Золотой">Золотой</option>
              <option value="Перламутровый">Перламутровый</option>
              <option value="Серебрянный ">Серебрянный</option>
              <option value="Черный">Черный</option>
              <option value="Прозрачный">Прозрачный</option>
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

        <label for="material">Материал</label>
        <input
            class="form-control"
            id="material"
            required
            v-model="product.material"
            name="material"
        />


        <label for="complectation">Комплектация</label>
        <input
            class="form-control"
            id="complectation"
            required
            v-model="product.complectation"
            name="complectation"
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

import ProductsDataService from "../services/GoodsDataServices";

export default {
  components: {
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
        material: "",
        complectation: "",

      },
      submitted: false
    };
  },
  methods: {
    saveProduct() {
      let data = {
        title: this.product.title,
        description: this.product.description,
        color: this.product.color,
        volume: this.product.volume,
        material: this.product.material,
        complectation: this.product.complectation,
      };

      ProductsDataService.create(data)
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


#add-product-page{
  height:100%;
}

.form-wrapper {
  margin-top: 100px;
}

.form {
  display: flex;
  flex-direction: column;

  button {
    margin-top: 20px;
  }

  input{
    margin-top:10px;
    margin-bottom:10px;
  }
}

.selects-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.color {

  label {
    margin-right: 10px;
  }
}


.volume {
  padding-left: 50px;

  label {
    margin-right: 10px;
  }
}
</style>
