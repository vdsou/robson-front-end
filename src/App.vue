<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import "./styles/global.css";
import Header from "./components/Header";
import Content from "./components/Content"
import Footer from "./components/Footer"
export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer
  },
};
</script>
