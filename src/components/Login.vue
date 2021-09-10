<template>
  <div id="form-container">
    <h1>If you are an admin please log in</h1>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        id="username"
        name="username"
        placeholder="USERNAME"
        v-model="username"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="PASSWORD"
        v-model="password"
      />
      <button type="submit" id="submit">ENTER</button>
      <a href="/register">Sign in</a>
    </form>
    {{ $store.state.user.isLogged }}
    <div class="message-content" v-if="message && status === false">
      {{ message }}
    </div>
  </div>
</template>
<script>
// import AuthService from "@/services/authService";

// const auth = AuthService;
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      message: "",
      status: false,
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        username: this.username,
        password: this.password,
      };
      // const login = await auth.login(data);
      // if (login.status != 200) {
      //   this.status = false;
      //   this.message = login.error;
      // } else {
      //   this.status = true;
      //   this.$store.dispatch("setToken", login.data.token)
      //   this.$router.push("/manage/commands")
      // }

      this.$store.dispatch("login", data);
    },
  },
};
</script>
<style scoped>
h1 {
  width: 100%;
  background: var(--white-background-block);
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  padding: 5px 0;
  color: var(--color-titles);
}
#form-container {
  border-top: solid 1px #428dff;
  margin: 50px 0;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input,
#submit {
  width: 193px;
  height: 32px;
  background: #a5b1c2;
  border: none;
  margin-top: 20px;
  color: #778ca3;
}
input {
  padding-left: 15px;
  color: var(--color-titles);
}
#submit {
  color: #000;
  cursor: pointer;
}
a {
  color: var(--general-blue);
  margin: 15px auto;
  font-size: 12px;
}
.message-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 13px;
  margin: 20px auto;
}
</style>
