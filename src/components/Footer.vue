<template>
  <footer>
    <div id="footer-content" class="container">
      <p>made with all love by vdsou</p>
      <a href="">credits</a>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
footer {
  width: 100%;
  height: 48px;
  color: #202b38;
  background: var(--color-background-footer);
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer-content {
  display: flex;
  justify-content: space-between;
}
a{
    color: #202b38;
}
</style>
