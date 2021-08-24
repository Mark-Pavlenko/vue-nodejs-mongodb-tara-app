<template>
  <div>
    <Sidebar/>

    <!--add-product-->
    <div id="add-product-card">
      <section class="ftco-section">
        <div class="container">
          <div id="add-product-title-block" class="row justify-content-center">
            <div class="col-md-8 text-center">
              <h2 class="description-container-title">Добавить продукт</h2>
            </div>
          </div>

          <div class="row justify-content-center">
            <div id="form-body" class="wrapper">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="dbox w-100 text-center">
                        <div class="add-product-image">
                          <div class="add-product-user">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="test" class="col-lg-10">
                  <div class="add-product-wrapper">

                    <div class="add-product-wrapper">
                      <div class="input">
                        <label>Имя</label>
                        <input type="text"/>
                      </div>
                      <div class="input">
                        <label>Электронный адрес</label>
                        <input type="email"/>
                      </div>
                      <div class="input">
                        <label>Моб. Телефон</label>
                        <input type="text"/>
                      </div>
                      <button>Отправить</button>
                    </div>
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
import Sidebar from '../components/Sidebar'
import ProductDataService from "../services/GoodsDataServices";

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      products: [],
      currentProduct: null,
      product: null,
    }
  },
  methods: {
    retrieveTutorials() {
      ProductDataService.getAll()
          .then(response => {
            this.products = response.data;
            console.log(response.data);

          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteProduct(id) {
      ProductDataService.delete(id)
          .then(response => {
            console.log(response.data);
            window.location.reload()
            // this.$router.push({ name: "products" });
          })
          .catch(e => {
            console.log(e);

          });
    }
  },
  mounted() {
    this.retrieveTutorials();
  }
}
</script>

<style lang="scss" scoped>

#add-product-card {
  //min-height: 100vh;
  overflow: hidden;
  //background-color: #EEE;
  display: flex;
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  input {
    width: 342px;
    height: 58px;
    background: #ffffff;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    outline: none;
    border: none;
    padding-left: 20px;
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

  button {
    width: 342px;
    height: 58px;
    color: white;

    background: rgba(182, 12, 12, 0.8);
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

</style>