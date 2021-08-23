<template>
  <div class="sidebar">
    <router-link class="link" to="/admin/add">Добавить продукт</router-link>
    <router-link class="link" to="/admin/addImage">Добавить изображение</router-link>
    <router-link class="link" to="/admin/products">Все товары</router-link>

  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/_variables.scss';

.sidebar {
  width: 180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: $red;
  padding-top: 100px;
}
.link {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
</style>
