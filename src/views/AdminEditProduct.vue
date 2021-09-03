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

                <div class="col-lg-11" v-if="!edited">

                  <div id="product-image-main-container">
                    <!--delete title image functionality -->
                    <div v-if="currentProduct.image_first !== ''">

                      <div class="text-center">
                        <h2 class="description-container-title">Титульное изображение</h2>
                      </div>

                      <div class="product-image">
                        <img :src="`https://decoplastline.ua/app/images/${currentProduct.image_first}`" class="image"/>
                      </div>

                      <br/>
                      <button type="submit" class="card-btn btn btn-danger" @click="deleteTitleImage">Удалить</button>

                    </div>
                    <!--download new title image instead of deleted-->
                    <div class="add-image-block" v-else>
                      <div class="text-center">
                        <h2 class="description-container-title">Титульное изображение</h2>
                      </div>
                      <div class="product-image-deleted">
                        <img :src="`https://decoplastline.ua/no-image.png`" class="image-fluid"/>
                      </div>
                      <br/>
                      <input id="image-loader" type="file" @change="onFileChange">
                    </div>
                  </div>

                  <div v-if='this.currentProduct.image_second == "" && this.currentProduct.image_third == "" && this.currentProduct.image_fourth == "" && this.currentProduct.image_fifth == ""'>
                    <h1>Here will be form to add all additional images</h1>
                  </div>

                  <div v-else>
                    <!--                      {{additionalArrImages.}}-->
                    <div id="product-image-additional-container" class="container">
                      <br/>

                      <div class="text-center">
                        <h2 class="description-container-title">Дополнительные изображения</h2>
                      </div>

                      <div class="row">
                        <div class="col-lg-6">
                          <div class="product-image-additional">
                            <h5>1 из 4</h5>
                            <img v-if="currentProduct.image_second !== ''"
                                 :src="`https://decoplastline.ua/app/images/${currentProduct.image_second}`"
                                 class="image"/>
                            <img v-else :src="`https://decoplastline.ua/no-image.png`" class="image"/>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="product-image-additional">
                            <h5>2 из 4</h5>
                            <img v-if="currentProduct.image_third !== ''"
                                 :src="`https://decoplastline.ua/app/images/${currentProduct.image_third}`"
                                 class="image"/>
                            <img v-else :src="`https://decoplastline.ua/no-image.png`" class="image"/>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-6">
                          <div class="product-image-additional">
                            <h5>3 из 4</h5>
                            <img
                                v-if="currentProduct.image_fourth !== ''"
                                :src="`https://decoplastline.ua/app/images/${currentProduct.image_fourth}`"
                                class="image"/>
                            <img v-else :src="`https://decoplastline.ua/no-image.png`" class="image"/>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="product-image-additional">
                            <h5>4 из 4</h5>
                            <img v-if="currentProduct.image_fifth !== ''"
                                 :src="`https://decoplastline.ua/app/images/${currentProduct.image_fifth}`"
                                 class="image"/>
                            <img v-else :src="`https://decoplastline.ua/no-image.png`" class="image"/>
                          </div>
                        </div>
                      </div>

                      <br/>
                      <button type="submit" class="card-btn btn btn-danger" @click="deleteAdditionalImages">Удалить все
                        изображения
                      </button>
                    </div>

                    <br/>
                  </div>




                  <!--form to edit product description-->
                  <div class="add-product-wrapper" @submit.prevent="editProduct">

                    <div class="col-md-8 text-center">
                      <h2 class="description-container-title">Редактировать описание продукта</h2>
                    </div>

                    <!--form with main content-->

                    <form @submit.prevent="editProduct" id="editProductForm">

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
                          <option value="Білий">Білий</option>
                          <option value="Золотий">Золотий</option>
                          <option value="Перламутровий">Перламутровий</option>
                          <option value="Срібний ">Срібний</option>
                          <option value="Чорний">Чорний</option>
                          <option value="Прозорий">Прозорий</option>
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


                </div>

                <div class="add-product-wrapper" v-else>
                  <br/>
                  <h4>Товар был успешно отредактирован!</h4>
                  <router-link class="btn btn-success" to="/admin/">Вернуться на главную страницу</router-link>
                  <button class="btn btn-primary" @click="newProductEdition">Продолжить
                    редактирование
                  </button>
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
      edited: false,
      additionalArrImages: [],
      keysArr: [],
      additionalArrImagesExists: true

    };
  },
  methods: {
    onFileChange(e) {
      this.selectedFile = e.target.files[0];
    },
    newProductEdition() {
      this.edited = false;
      // this.additionalArrImagesExists = false;
      // window.location.reload();
    },
    getProduct(id) {
      ProductsDataService.get(id)
          .then(response => {
                this.currentProduct = response.data;
                console.log(this.currentProduct);

                this.additionalArrImages.push(
                    this.currentProduct.image_second,
                    this.currentProduct.image_third,
                    this.currentProduct.image_fourth,
                    this.currentProduct.image_fifth,
                );

                console.log(this.additionalArrImages);
                // console.log(this.additionalArrImages.length);

              }
          )
          .catch(e => {
            console.log(e);
          });
    },

    editProduct() {

      //update product desc fields
      ProductsDataService.update(this.currentProduct.id, this.currentProduct)
          .then(response => {
            console.log(response.data);
            this.message = 'The product was updated successfully!';
            // window.location.reload()
            this.edited = true;
          })
          .catch(e => {
            console.log(e);
          });

      //update img
      const formData = new FormData();
      formData.append("file", this.selectedFile); // appending file
      console.log(this.selectedFile.name);
      // sending file to backend
      axios
          .post("http://localhost:8080/upload", formData,)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            // console.log(err);
          });
      //send empty string as a data to a query
      let emptyImgName = this.selectedFile.name;
      this.currentProduct.image_first = emptyImgName;
      let obj = {image: emptyImgName};
      ProductsDataService.updateImage(this.currentProduct.id, obj)
          .then(response => {
            console.log(this.currentProduct.image_first);
            console.log(response.data);
            // this.message = 'The product was updated successfully!';
            // window.location.reload();
            // window.scrollTo(0, 0);
            this.edited = true;
          })
          .catch(e => {
            console.log(e);
          });
    },

    deleteTitleImage() {

      const formData = this.currentProduct.image_first;
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
            // console.log(err);
          });

      //send empty string as a data to a query
      let emptyImgName = '';
      this.currentProduct.image_first = emptyImgName;
      let obj = {image_first: emptyImgName};
      ProductsDataService.updateImage(this.currentProduct.id, obj)
          .then(response => {
            console.log(this.currentProduct.image_first);
            console.log(response.data);
            this.edited = true;
          })
          .catch(e => {
            console.log(e);
          });
    },


    deleteAdditionalImages() {

      //get existing images names
      let filteredImagesArr = this.additionalArrImages.filter((a) => a);
      console.log(filteredImagesArr);

      //-----------------------

      for (let i = 0; i < filteredImagesArr.length; i++) {

        const formData = filteredImagesArr[i];
        // console.log(formData);

        let dataOfDeletedImages = {
          name: formData
        }

        axios
            .post("http://localhost:8080/delete/image", dataOfDeletedImages,)
            .then(res => {
              console.log(res);

            })
            .catch(err => {
              console.log(err);
            });

        let emptyImgName = '';
        filteredImagesArr[i] = emptyImgName;


        // remove title image from object and get all keys of additional images
        delete this.currentProduct.image_first;
        for (const [key, value] of Object.entries(this.currentProduct)) {
          if (formData === value) {
            console.log(key);

            //filter keys arr from repeated values
            this.keysArr.push(key);
            this.keysArr = [...new Set(this.keysArr)];

            const entries = new Map([
              [key, emptyImgName]
            ]);

            let obj = Object.fromEntries(entries);
            console.log(obj);

            ProductsDataService.updateImage(this.currentProduct.id, obj)
                .then(response => {
                  console.log(response.data);

                  this.edited = true;
                })
                .catch(e => {
                  console.log(e);
                });

            console.log(obj);
          }
        }
      }
    },
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px 0 10px;
  margin-bottom: 20px;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.5);

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
  margin-bottom: 20px;
}

.image-loader {
  padding-top: 10px;
}

.product-image {

  width: 60%;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.5);
  margin: 30px auto;
  margin-bottom: 0px;

  img {
    width: 100%;
  }
}

#product-image-main-container {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  padding-top: 10px;
  margin-top: 40px;
  margin-bottom: 20px;
  padding-bottom: 25px;
}

#product-image-additional-container {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  padding-bottom: 25px;
}

.product-image-additional {
  width: 100%;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.5);
  margin: 30px auto;
  margin-bottom: 0px;

  h5 {
    padding-top: 10px;
  }

  img {
    width: 95%;
    margin-bottom: 20px;
  }
}

.product-image-deleted {
  width: 40%;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.5);
  margin: 30px auto;
  margin-bottom: 0px;
  padding: 10px;

  img {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
}

.add-image-block {
  margin-bottom: 20px;
}

#editProductForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
