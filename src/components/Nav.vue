<!--<template>-->
<!--  <div class="menu__wrapper">-->
<!--    <div class="container">-->
<!--      <div class="menu">-->
<!--        <div class="web">-->
<!--          <div id="nav">-->
<!--            &lt;!&ndash; <router-link to="/">Главная</router-link>-->
<!--          <router-link to="/">Главная</router-link>-->
<!--          <router-link to="/">Главная</router-link>-->
<!--          <router-link to="/about">Главная</router-link> &ndash;&gt;-->
<!--            <div @click="toHome" class="menu_btn">Главная</div>-->
<!--            <div class="menu_btn" @click="toCatalog">Каталог</div>-->
<!--            <div-->
<!--                ref="aboutUs"-->
<!--                id="about"-->
<!--                @click="scrollToElement"-->
<!--                class="menu_btn"-->
<!--            >-->
<!--              О Нас-->
<!--            </div>-->
<!--            <div-->
<!--                ref="contacts"-->
<!--                id="contacts"-->
<!--                class="menu_btn"-->
<!--                @click="scrollToElement($event)"-->
<!--            >-->
<!--              Контакты-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <teleport to="#mobile-menu" >-->
<!--          <div id="nav">-->
<!--            &lt;!&ndash; <router-link to="/">Главная</router-link>-->
<!--          <router-link to="/">Главная</router-link>-->
<!--          <router-link to="/">Главная</router-link>-->
<!--          <router-link to="/about">Главная</router-link> &ndash;&gt;-->
<!--            <div @click="toHome" class="menu_btn">Главная</div>-->
<!--            <div class="menu_btn" @click="toCatalog">Каталог</div>-->
<!--            <div-->
<!--                ref="aboutUs"-->
<!--                id="about"-->
<!--                @click="scrollToElement"-->
<!--                class="menu_btn"-->
<!--            >-->
<!--              О Нас-->
<!--            </div>-->
<!--            <div-->
<!--                ref="contacts"-->
<!--                id="contacts"-->
<!--                class="menu_btn"-->
<!--                @click="scrollToElement($event)"-->
<!--            >-->
<!--              Контакты-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; <button class="cart"><img src="../assets/Buy.png" alt="" /></button> &ndash;&gt;-->
<!--        </teleport>-->
<!--        <div @click="open" class="burger">-->
<!--          <img src="@/assets/burger2.png" alt="" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;import { defineComponent, onMounted, ref, computed } from "@vue/runtime-core";&ndash;&gt;-->
<!--&lt;!&ndash;import { useRouter } from "vue-router";&ndash;&gt;-->
<!--&lt;!&ndash;import { useStore } from "vuex";&ndash;&gt;-->
<!--&lt;!&ndash;import windowWidth from "@/mixins/windowWidth";&ndash;&gt;-->

<!--&lt;!&ndash;export default defineComponent({&ndash;&gt;-->
<!--&lt;!&ndash;  name: "Nav",&ndash;&gt;-->
<!--&lt;!&ndash;  emits: ["scrollName"],&ndash;&gt;-->
<!--&lt;!&ndash;  mixins: [windowWidth],&ndash;&gt;-->
<!--&lt;!&ndash;  setup(props, context) {&ndash;&gt;-->
<!--&lt;!&ndash;    const router = useRouter();&ndash;&gt;-->
<!--&lt;!&ndash;    const store = useStore();&ndash;&gt;-->

<!--&lt;!&ndash;    const aboutUs = ref(null);&ndash;&gt;-->

<!--&lt;!&ndash;    const mobile = computed(() => {&ndash;&gt;-->
<!--&lt;!&ndash;      return store.getters.getMobile;&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    const open = async () => {&ndash;&gt;-->
<!--&lt;!&ndash;      console.log(store);&ndash;&gt;-->
<!--&lt;!&ndash;      await store.dispatch("setMobileMenuOpen");&ndash;&gt;-->
<!--&lt;!&ndash;    };&ndash;&gt;-->

<!--&lt;!&ndash;    onMounted(() => {&ndash;&gt;-->
<!--&lt;!&ndash;      // console.log(aboutUs.value.id);&ndash;&gt;-->
<!--&lt;!&ndash;      console.log(store);&ndash;&gt;-->
<!--&lt;!&ndash;    });&ndash;&gt;-->

<!--&lt;!&ndash;    const scrollToElement = (event) => {&ndash;&gt;-->
<!--&lt;!&ndash;      let value = event.target.id;&ndash;&gt;-->

<!--&lt;!&ndash;      context.emit("scrollName", value);&ndash;&gt;-->
<!--&lt;!&ndash;    };&ndash;&gt;-->

<!--&lt;!&ndash;    const toHome = async () => {&ndash;&gt;-->
<!--&lt;!&ndash;      await router.push("/");&ndash;&gt;-->
<!--&lt;!&ndash;    };&ndash;&gt;-->

<!--&lt;!&ndash;    const toCatalog = async () => {&ndash;&gt;-->
<!--&lt;!&ndash;      await router.push("/catalog");&ndash;&gt;-->
<!--&lt;!&ndash;    };&ndash;&gt;-->
<!--&lt;!&ndash;    return {&ndash;&gt;-->
<!--&lt;!&ndash;      aboutUs,&ndash;&gt;-->
<!--&lt;!&ndash;      scrollToElement,&ndash;&gt;-->
<!--&lt;!&ndash;      toHome,&ndash;&gt;-->
<!--&lt;!&ndash;      toCatalog,&ndash;&gt;-->
<!--&lt;!&ndash;      open,&ndash;&gt;-->
<!--&lt;!&ndash;      mobile,&ndash;&gt;-->
<!--&lt;!&ndash;    };&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;});&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--<style lang="scss" scoped>-->
<!--.burger {-->
<!--  position: absolute;-->
<!--  right: 0;-->
<!--  top: 0;-->
<!--  cursor: pointer;-->
<!--}-->
<!--.cart {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->
<!--.menu {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  width: 100%;-->
<!--  height: 81px;-->
<!--  position: relative;-->
<!--  &__wrapper {-->
<!--    width: 100%;-->
<!--    height: 81px;-->
<!--    // padding: 0 64px;-->
<!--    background: #f6f6f6;-->
<!--    order: 1px solid rgba(0, 0, 0, 0.1);-->
<!--    box-sizing: border-box;-->
<!--    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);-->
<!--  }-->
<!--  @media (max-width: 992px) {-->
<!--    margin-top: 30px;-->
<!--  }-->
<!--}-->
<!--.menu_btn {-->
<!--  margin-right: 170px;-->
<!--  cursor: pointer;-->
<!--  &:last-child {-->
<!--    margin-right: 0;-->
<!--  }-->
<!--  @media (max-width: 992px) {-->
<!--    margin-right: 0;-->
<!--    margin-top: 10px;-->
<!--  }-->
<!--}-->
<!--.cart {-->
<!--  width: 50px;-->
<!--  height: 50px;-->

<!--  background: rgba(182, 12, 12, 0.8);-->
<!--  border: 1px solid rgba(0, 0, 0, 0.1);-->
<!--  box-sizing: border-box;-->
<!--  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);-->
<!--  border-radius: 40px;-->
<!--}-->
<!--</style>-->
