<template>
  <div id="form-container">
    <h1>Register so that you can add new commands!</h1>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="NAME"
        v-model="name"
        required
      />
      <input
        type="text"
        id="username"
        name="username"
        placeholder="USERNAME"
        v-model="username"
        required
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="PASSWORD"
        v-model="password"
        required
      />
      <button type="submit" id="submit">ENTER</button>
    </form>
    <div class="message-container" v-if="message">
      <div class="message-content" v-if="status">
        <h3>{{ message }}!</h3>
        <a href="/">Click here to Login</a>
      </div>
      <div class="message-content" v-else>
        <h3>Something went wrong! Try again later.</h3>
        <p>{{ message }}!</p>
      </div>
    </div>
  </div>
</template>
<script>
import AuthService from "@/services/authService";
const auth = AuthService;
export default {
  name: "register",
  data() {
    return {
      name: "",
      username: "",
      password: "",
      user: {},
      message: "",
      status: false,
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        username: this.username,
        password: this.password,
        name: this.name,
      };
      const register = await auth.register(data);
      if (register.status == 201) {
        this.user = register.data;
        this.message = register.data.message;
        console.log(register.status);
        this.name = "";
        this.username = "";
        this.password = "";
        this.status = true;
      } else {
        this.status = false;
        this.message = register.error;
      }
    },
  },
  mounted() {
    this.status = false;
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
  min-height: 100vh;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
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
  margin: 40px auto;
}
.message-container h3 {
  font-size: 16px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
