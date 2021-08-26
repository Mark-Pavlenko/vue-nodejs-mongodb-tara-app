<template>
  <div>
    <Sidebar/>

    <!--add-product-->
    <div id="add-product-card">
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div id="form-body" class="wrapper">
              <div class="row justify-content-center">
                <div id="test" class="col-lg-10">

                  <div class="add-product-wrapper" v-if="!edited" @submit.prevent="editProduct">

                    <div class="col-md-8 text-center">
                      <h2 class="description-container-title">Редактировать продукт</h2>
                    </div>

                    <div class="product-image">
                      <!--                      <img src="../../app/images/tara-img.png" class="img-fluid" alt=""/>-->
                      <!--                      <img :src="`http:/localhost:8080/app/images/${currentProduct.image}`" class="img-fluid"-->
                      <!--                           v-if='currentProduct.image !== ""'/>-->
                      <!--                      <img :src="`https://decoplastline.ua/no-image.png`" class="image" v-else/>-->
                    </div>
                    <br/>
                    <button type="submit" class="card-btn btn btn-danger" @click="deleteImage">Удалить картинку</button>

                    <!--form with main content-->

                    <form class="add-product-wrapper" v-if="!edited" @submit.prevent="editProduct">


                      <div class="input">
                        <br/>

                        <!--                      if we have currentProduct.image === "" -->

                        <!--                      <label for="image">Загрузите изображение</label>-->
                        <!--                      <input id="image-loader" type="file" @change="onFileChange"/>-->
                      </div>

                      <div class="input">
                        <label for="title">Заголовок</label>
                        <input
                            type="text"
                            id="title"
                            v-model="currentProduct.title"
                            placeholder="Заголовок"
                            required
                        />
                      </div>

                      <div class="input">
                        <label for="description">Описание</label>
                        <textarea
                            name="description"
                            id="description"
                            class="form-control"
                            placeholder="Описание"
                            v-model="currentProduct.description"
                            required
                            style="height: 300px;"

                        />
                      </div>

                      <div class="input">
                        <label for="color">Цвет: </label>
                        <select v-model="currentProduct.color" name="color" id="color" required>
                          <option value="Белый">Белый</option>
                          <option value="Золотой">Золотой</option>
                          <option value="Перламутровый">Перламутровый</option>
                          <option value="Серебрянный ">Серебрянный</option>
                          <option value="Черный">Черный</option>
                          <option value="Прозрачный">Прозрачный</option>
                        </select>
                      </div>

                      <div class="input">
                        <label for="volume">Объём: </label>
                        <select v-model="currentProduct.volume" name="volume" id="volume" style="width: 150px;"
                                required>
                          <option value="10">10 ml</option>
                          <option value="25">25 ml</option>
                          <option value="50">50 ml</option>
                          <option value="100">100 ml</option>
                          <option value="250">250 ml</option>
                          <option value="550">550 ml</option>
                        </select>
                      </div>

                      <div class="input">
                        <label for="material">Материал</label>
                        <input
                            name="material"
                            id="material"
                            class="form-control"
                            v-model="currentProduct.material"
                            placeholder="Материал"
                            required
                        />
                      </div>

                      <div class="input">
                        <label for="complectation">Комплектация</label>
                        <input
                            id="complectation"
                            class="form-control"
                            name="complectation"
                            v-model="currentProduct.complectation"
                            placeholder="Комплектация"
                            required
                        />
                      </div>
                      <input type="submit" value="Сохранить изменения" id="editProductInput">
                    </form>
                  </div>


                  <div class="add-product-wrapper" v-else>
                    <br/>
                    <h4>Товар был успешно отредактирован!</h4>
                    <router-link class="btn btn-success" to="/admin/">Вернуться на главную страницу</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import ProductsDataService from "../services/GoodsDataServices";
import axios from "axios";
export default {
  name: "product",
  components: {
    Sidebar
  },
  data() {
    return {
      currentProduct: null,
      message: '',
      edited: false
    };
  },
  methods: {
    getProduct(id) {
      ProductsDataService.get(id)
          .then(response => {
            this.currentProduct = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    editProduct() {
      ProductsDataService.update(this.currentProduct.id, this.currentProduct)
          .then(response => {
            console.log(response.data);
            this.message = 'The product was updated successfully!';
            this.edited = true;
          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteImage() {
      const formData = this.currentProduct.image;
      console.log(formData);
      let dataOfDeletedImage = {
        name: formData
      }
      // sending file to backend
      axios
          .post("http://localhost:8080/delete/image", dataOfDeletedImage,)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      let test = '';
      this.currentProduct.image = test;
      let obj = {image: test};
      ProductsDataService.updateImage(this.currentProduct.id, obj)
          .then(response => {
            console.log(this.currentProduct.image);
            console.log(response.data);
            // this.message = 'The product was updated successfully!';
            this.edited = true;
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.message = '';
    this.getProduct(this.$route.params.id);
  }
}
</script>