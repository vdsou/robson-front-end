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
    <Login v-if="!this.$store.state.user.isLogged"/>
  </article>
</template>
<script>
import Login from "@/components/Login";
import api from "@/services/api";
export default {
  components: { Login },
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
</style>
