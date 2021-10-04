<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
            class="text-center border border-primary p-5"
            style="margin-top:70px;height:auto;padding-top:100px !important;"
            @submit.prevent="loginUser"
        >
          <h1>Доступ до панелі керування</h1>
          <input
              type="text"
              id="email"
              class="form-control mb-5"
              placeholder="Логін"
              value="DecoplastlineAdmin@gmail.com"
              v-model="email"
              required
          />

          <!-- Password -->
          <input
              type="password"
              id="password"
              class="form-control mb-5"
              placeholder="Пароль"
              value="c8E87df5YC"
              v-model="password"
              required
          />

          <!-- Sign in button -->

          <button class="btn btn-primary btn-block w-75 my-4" type="submit">
            Увійти
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import bcrypt from 'bcryptjs';
import swal from "sweetalert";


export default {
  data() {
    return {
      email: "",
      password: "",
      salt: bcrypt.genSaltSync(10)
    };
  },
  methods: {

    makeKey(length) {
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
      }
      return result;
    },

    async loginUser() {
      console.log(this.makeKey(20));
      try {
        if (this.email === 'DecoplastlineAdmin@gmail.com' && this.password === 'kq3FM1C293r4gm6leSzU') {
          localStorage.jwt = this.makeKey(30);
          await swal("Успіх", "Логін та пароль коректні!", "success");
          await this.$router.push("/admin/all");
        } else {
          swal("Помилка", "Невірний логін чи пароль!", "error");
        }
      } catch (err) {
        swal("Помилка", "Щось пішло не так!", "error");
        console.log(err.response);
      }
    },
  },
};
</script>

<style>
form h1 {
  margin-bottom: 70px;
}
</style>