<template>
  <div id="footer-contacts" class="footer">
    <div class="container">
      <div class="row footer-wrapper">

        <div class="col-sm col-12 ">
          <div class="footer-item">
            <div class="image">
              <img src="../assets/TimeFooter.png" alt="" />
            </div>
            <div class="text">
              Пн - Пт <br/> 10:00 - 18:00
            </div>
          </div>
        </div>

        <div class="col-sm col-12">
          <div class="footer-item">
            <div class="image">
              <img src="../assets/LocationFooter.png" alt="" />
            </div>
            <div class="text">
              м. Харків
            </div>
          </div>
        </div>

        <div class="col-sm col-12">
          <div class="footer-item">
            <div class="image">
              <img src="../assets/envelope-closed.png" alt="" width="50%"/>
            </div>
            <div class="text">
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFdJlWbcXPXkPwGSRKcBPgsqTHjqdQVqRRfwTNHhPbLgqxNMvsRBtgvJWMllrgBrcDgJGd" target="_blank">decoplastline@gmail.com</a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJWJCqnxJcbfjNqGbgQTBrrjdrkTkqTdjzKwLZSBDXZpfvfQDwLmSJdfdVZmGNKKdWVl" target="_blank" style="display: block">banochkiopt@gmail.com</a>
            </div>
          </div>
        </div>

        <div class="col-sm col-12 ">
          <div class="footer-item">
            <div class="image">
              <img src="../assets/CallingFooter.png" alt="" />
            </div>
            <div class="text">
              0631443406
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
.footer {
  //width: 100%;
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

  @media(max-width:480px){
    margin-left:30px;
    font-size: 14px;
  }

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

  //margin-right: 20px;
}
.footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  margin-left: -40px;

  @media(max-width: 992px){
    font-size: 12px;
  }
}

.text{
  margin-left:15px;
}
</style>
