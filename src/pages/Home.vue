<template>
  <article>
    <div id="stats-container">
      <h1>robsonbot stats</h1>
      <div id="stats" class="container">
        <p>2 servers</p>
        <p>{{ statsData.Total }} commands</p>
        <p>750 requests</p>
        <p>100 hours up</p>
        <p>25 commands</p>
        <p>750 requests</p>
      </div>
    </div>
    <div id="form-container">
      <h1>If you are an admin please log in</h1>
      <form action="">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="USERNAME"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="PASSWORD"
        />
        <button type="submit" id="submit">ENTER</button>
        <a href="">sign in</a>
      </form>
    </div>
  </article>
</template>
<script>
import api from "@/services/api";
export default {
  name: "Home",
  props: { title: String },
  data() {
    return {
      statsData: [],
    };
  },
  mounted() {
    api.get("/commands/get").then((res) => {
      this.statsData = res.data;
    });
  },
};
</script>
<style scoped>
#stats-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: var(--general-blue);
  margin-bottom: 50px;
}
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
#stats {
  min-height: 100px;
  color: var(--color-text-box);
  font-size: 13px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 25px 0;
}
p {
  margin: 10px;
  text-align: center;
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
</style>
