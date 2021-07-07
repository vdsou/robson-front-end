<template>
  <div id="content">
    <div id="section-wrapper">
      <section class="container">
        <img src="../assets/robot.svg" alt="" />
        <h1>Hello, world! I am Robson the bot</h1>
      </section>
    </div>
    <router-view path="$router.key" title="<h1>hello</h1>"/>
  </div>
</template>
<script>
export default {
  name: "Content",
  props: { title: String },
};
</script>
<style scoped>
#section-wrapper {
  height: 140px;
  border-bottom: solid 1px #428dff;
}
section {
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  padding: 40px 0 45px 0;
}
h1 {
  color: var(--color-titles);
  font-size: 13px;
  font-weight: bold;
}
</style>
