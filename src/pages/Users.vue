<template>
  <article>
    <div class="header-page">
      <a href="">Manage Commands</a>
      <a href="">Manage users</a>
    </div>
    <div id="users-box">
      <ul class="container">
        <li v-for="(user, index) in users" :key="index">
          <a href="#">{{ user }}</a>
        </li>
      </ul>
    </div>
  </article>
</template>
<script>
import api from "@/services/api";
export default {
  name: "Users",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    api.get("/users/get").then((res) => {
      this.users = res.data.users.map(item => item.userName)
    });
  },
};
</script>
<style scoped>
.header-page a {
  width: 100%;
  margin-left: 72px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15.83px;
  display: block;
  color: var(--general-blue);
  padding-bottom: 12px;
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
}
#users-box {
  background: var(--general-blue);
  display: flex;
  justify-content: center;
}
#users-box ul {
  min-height: 100vh;
  padding: 2em 0;
  display: grid;
  grid-template-columns: auto;
}
#users-box ul li {
  /* background: tomato; */
  height: 30px;
  margin-bottom: 13px;
  text-align: center;
}
#users-box ul li a {
  color: var(--color-text-box);
  font-weight: bold;
  font-size: 15px;
}
</style>
