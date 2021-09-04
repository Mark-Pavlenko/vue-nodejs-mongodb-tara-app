<template>
  <div>
    <!--menu-->
    <div class="menu__wrapper">
      <div id="header-container" class="container">
        <div class="menu">
          <div class="web">
            <div id="nav">
              <div class="menu_btn">
                <router-link class="link" to="/admin/">Усі товари</router-link>
              </div>

              <div class="menu_btn">
                <router-link class="link" to="/admin/add">Додати новий товар</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>




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

.menu__wrapper {
  width: 100%;
  height: 81px;
  background: rgba(182, 12, 12, 0.8);
  box-sizing: border-box;
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
}

.menu {
  //position: relative;
  justify-content: center;
  align-items: center;
  //margin-left: 40px;
  //width: 100%;
  height: 81px;

  &__wrapper {
    width: 100%;
    height: 81px;
    // padding: 0 64px;
    //background: #f6f6f6;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 992px) {
    margin-top: 30px;
    margin-left: 70px;
  }

  @media (max-width: 710px) {
    margin-left: 20px;
  }
}

#nav {
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    padding: 0 !important;
    margin-left: -10px;
  }

  @media (max-width: 710px) {
    //margin-left: -10px;
  }

  a{
    color: white;
  }
}

.menu_btn {
  cursor: pointer;
}

.router-link {
  text-decoration: none;
  font-weight: normal !important;
}

.row {
  --bs-gutter-x: 0rem !important;
}

.header-contacts-data {
  @media(max-width: 992px) {
    margin-left: 30px;
  }
}

#header-cart-icon-block{
  margin-top:-30px;
  margin-left: 0 !important
}

#header-cart-icon {
  width: 25%;
}

</style>
