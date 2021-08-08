<template>
  <div class="menu__wrapper">
    <div class="container">
      <div class="menu">
        <div class="web">
          <div id="nav">
            <!-- <router-link to="/">Главная</router-link>
          <router-link to="/">Главная</router-link>
          <router-link to="/">Главная</router-link>
          <router-link to="/about">Главная</router-link> -->
            <div @click="toHome" class="menu_btn">Главная</div>
            <div class="menu_btn" @click="toCatalog">Каталог</div>
            <div
                ref="aboutUs"
                id="about"
                @click="scrollToElement"
                class="menu_btn"
            >
              О Нас
            </div>
            <div
                ref="contacts"
                id="contacts"
                class="menu_btn"
                @click="scrollToElement($event)"
            >
              Контакты
            </div>
          </div>
        </div>
        <teleport to="#mobile-menu" >
          <div id="nav">
            <!-- <router-link to="/">Главная</router-link>
          <router-link to="/">Главная</router-link>
          <router-link to="/">Главная</router-link>
          <router-link to="/about">Главная</router-link> -->
            <div @click="toHome" class="menu_btn">Главная</div>
            <div class="menu_btn" @click="toCatalog">Каталог</div>
            <div
                ref="aboutUs"
                id="about"
                @click="scrollToElement"
                class="menu_btn"
            >
              О Нас
            </div>
            <div
                ref="contacts"
                id="contacts"
                class="menu_btn"
                @click="scrollToElement($event)"
            >
              Контакты
            </div>
          </div>
          <!-- <button class="cart"><img src="../assets/Buy.png" alt="" /></button> -->
        </teleport>
        <div @click="open" class="burger">
          <img src="@/assets/burger2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<!--<script>-->
<!--import { defineComponent, onMounted, ref, computed } from "@vue/runtime-core";-->
<!--import { useRouter } from "vue-router";-->
<!--import { useStore } from "vuex";-->
<!--import windowWidth from "@/mixins/windowWidth";-->

<!--export default defineComponent({-->
<!--  name: "Nav",-->
<!--  emits: ["scrollName"],-->
<!--  mixins: [windowWidth],-->
<!--  setup(props, context) {-->
<!--    const router = useRouter();-->
<!--    const store = useStore();-->

<!--    const aboutUs = ref(null);-->

<!--    const mobile = computed(() => {-->
<!--      return store.getters.getMobile;-->
<!--    });-->

<!--    const open = async () => {-->
<!--      console.log(store);-->
<!--      await store.dispatch("setMobileMenuOpen");-->
<!--    };-->

<!--    onMounted(() => {-->
<!--      // console.log(aboutUs.value.id);-->
<!--      console.log(store);-->
<!--    });-->

<!--    const scrollToElement = (event) => {-->
<!--      let value = event.target.id;-->

<!--      context.emit("scrollName", value);-->
<!--    };-->

<!--    const toHome = async () => {-->
<!--      await router.push("/");-->
<!--    };-->

<!--    const toCatalog = async () => {-->
<!--      await router.push("/catalog");-->
<!--    };-->
<!--    return {-->
<!--      aboutUs,-->
<!--      scrollToElement,-->
<!--      toHome,-->
<!--      toCatalog,-->
<!--      open,-->
<!--      mobile,-->
<!--    };-->
<!--  },-->
<!--});-->
<!--</script>-->

<style lang="scss" scoped>
.burger {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
.cart {
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 81px;
  position: relative;
  &__wrapper {
    width: 100%;
    height: 81px;
    // padding: 0 64px;
    background: #f6f6f6;
    order: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 992px) {
    margin-top: 30px;
  }
}
.menu_btn {
  margin-right: 170px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 992px) {
    margin-right: 0;
    margin-top: 10px;
  }
}
.cart {
  width: 50px;
  height: 50px;

  background: rgba(182, 12, 12, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
}
</style>
