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
                      <img src="../../app/images/tara-img.png" class="img-fluid" alt=""/>
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
      // formData.append("file", ); // appending file

      // sending file to backend
      axios
          .post("http://localhost:8080/delete/image", dataOfDeletedImage,)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
    }

  },
  mounted() {
    this.message = '';
    this.getProduct(this.$route.params.id);
  }
}
</script>


<style lang="scss" scoped>

#add-product-card {
  //min-height: 100vh;
  overflow: hidden;
  //background-color: #EEE;
  //display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
}

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
  background: #f6f6f6;
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media(max-width: 992px) {

  }
}

.add-product-form {
  width: 100%;
  max-width: 839px;
  height: auto;
  padding: 15px 0;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0px auto;
  /* border-radius: 12px; */
  /* margin: 0px auto; */
  /* margin-bottom: -26px; */


  @media (max-width: 992px) {
    margin-bottom: 20px;
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

    @media(max-width: 910px) {
      width: 500px;
    }

    @media(max-width: 710px) {
      width: 300px;
    }


  }

  label {
    margin-bottom: 10px;
  }
}

.add-product-wrapper {
  padding: 0 10px 0 10px;
  // width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  #editProductInput {
    width: 342px;
    height: 58px;
    color: white;

    background: #00c851;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;

    outline: none;
    border: none;

    margin-top: 30px;
    margin-bottom: 50px;
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

.description-container-title {
  margin-top: 20px;
  margin-bottom: 10px;
}

#image-loader {
  padding-top: 10px;
}

.product-image {

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.5);
  margin-top: 20px;

  //margin-bottom: 40px;
}

</style>
