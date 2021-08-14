<template>
  <div class="row">
    <div class="col-4"><Sidebar /></div>
    <div class="col-6 form-wrapper">
      <form class="form" @submit.prevent="addNewProduct">
        <input type="file" name="file" id="file" @change="uploadImage" />
        <label for="title">Заголовок</label>
        <input type="text" id="title" v-model="title" />

        <label for="description">Описание</label>
        <textarea
            type="text"
            id="description"
            class="description"
            v-model="description"
        />
        <div class="selects-wrapper">
          <div class="volume">
            <label for="volume">Объём: </label>
            <select v-model="volume" name="volume" id="volume">
              <option value="10">10 ml</option>
              <option value="25">25 ml</option>
              <option value="50">50 ml</option>
              <option value="100">100 ml</option>
              <option value="250">250 ml</option>
              <option value="550">550 ml</option>
            </select>
          </div>
          <div class="color">
            <label for="color">Цвет: </label>
            <select v-model="color" name="color" id="color">
              <option value="Золотой">Золотой</option>
              <option value="Красный">Красный</option>
              <option value="Синий">Синий</option>
            </select>
          </div>
        </div>
        <button type="submit">Создать товар</button>
      </form>
    </div>
  </div>
</template>


<script>
import Sidebar from "../components/Sidebar";
  export default {
    components:{
      Sidebar
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
