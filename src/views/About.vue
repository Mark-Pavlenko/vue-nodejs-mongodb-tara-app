<template>
  <div class="about">
    <h1>This is an about page</h1>
    <anchor-router-link :to="{name:'Home', hash:'#contacts-card-body'}" id="contacts" class="header__button">
      Перезвоните Мне
    </anchor-router-link>
  </div>
</template>

<script>
import AnchorRouterLink from 'vue-anchor-router-link';
  export default{
    components:{
      AnchorRouterLink
    }
  }
</script>
