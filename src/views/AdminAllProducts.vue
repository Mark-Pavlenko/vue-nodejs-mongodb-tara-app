<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <nav id="sidebar">
        <Sidebar/>
      </nav>

      <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5">
        <h2 class="mb-4">Список товаров</h2>

        <div class="products-title">
          <p>Image</p>
          <p>Title</p>
          <p>description</p>
          <p>color</p>
          <p>volume</p>
          <p>material</p>
          <p>complectation</p>
        </div>
        <div v-for="product in products" :key="product._id" class="product">
          <!--          <img class="img-fluid" :src="product.image" alt="product image" />-->
          <!--          <img class="img-fluid" src=`/public/images/upload_images/{{product.image}}` alt="product image" />-->
          <img class="img-fluid" src="../assets/card-img.png" alt="product image"/>
          <!--          <div class="product-title">{{ product.id }}</div>-->
          <div class="product-title">{{ product.image }}</div>
          <div class="product-title">{{ product.title }}</div>
          <div class="product-desc">{{ product.description }}</div>
          <div class="product-desc">{{ product.color }}</div>
          <div class="product-desc">{{ product.volume }}</div>
          <div class="product-desc">{{ product.material }}</div>
          <div class="product-desc">{{ product.complectation }}</div>

          <!--          <img class="product-desc" alt="User Pic" src="public/images/upload_images/test.jpg"> class="img-circle img-responsive">-->
          <!--          <div class="product-desc">{{ product.image }}</div>-->
          <button @click="deleteProduct(product.id)">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Sidebar from '@/components/Sidebar'
import ProductDataService from "../services/GoodsDataServices";

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      products: [],
      currentProduct: null,
      product: null
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
.products {
  display: flex;
  flex-direction: column;
}

.product {

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  //max-width: 1000px;
  margin-bottom: 50px;
  padding: 0 20px;
  box-shadow: 0px 1px 4px 1px rgb(204, 202, 202);

  img {
    width: 50px;
    height: 50px;
  }

  &-title {
    padding: 0 10px;
  }

  &-desc {
    padding: 0 10px;
  }
}

.products-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px;
}

.form-wrapper {
  max-height: 100vh;
  margin: 0px auto 0 auto;
  overflow-y: auto;
  padding: 50px 0;
}

.form {
  display: flex;
  flex-direction: column;

  button {
    margin-top: 20px;
  }
}


</style>