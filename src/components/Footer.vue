<template>
  <div class="footer">
    <div class="container">
      <div class="row footer-wrapper">
        <div class="col-md-4 col-12 ">
          <div class="footer-item">
            <div class="image">
              <img src="../assets/TimeFooter.png" alt="" />
            </div>
            <div class="text">
              9 - 20 пн - вс
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12 ">
          <div class="footer-item">
            <div class="image">
              <img src="../assets/CallingFooter.png" alt="" />
            </div>
            <div class="text">
              8 800 555 35 35
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div class="footer-item">
            <div class="image">
              <img src="../assets/LocationFooter.png" alt="" />
            </div>
            <div class="text">
              Пушкинская 4
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: auto;
  padding: 20px 0;

  //background: #f6f6f6;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media(max-width:992px){
    //margin-top: 80px;
  }
}
.footer-item {
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 678px) {
    margin-bottom: 20px;
    justify-content: unset;
  }
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  background: rgba(182, 12, 12, 0.8);

  border-radius: 50%;

  margin-right: 20px;
}
.footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
</style>
