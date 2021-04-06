<template>
  <footer>
    <div id="footer-content" class="container">
      <p>made with all love ❤️ by vdsou</p>
        <a id="credits-title" href="#" v-on:click.prevent="toggleCredits">credits</a>
      <div id="credits" v-if="showCredits" :class="{activeCredits: showCredits}">
        <div>
          Icons made by
          <a href="https://www.flaticon.com/br/autores/smashicons"
            title="Smashicons">Smashicons</a
          >
          from<a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a>
        </div>
        <div>Icons made by
          <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      showCredits: false,
    };
  },
  methods: { 
    toggleCredits(){
      if(this.showCredits === false){
        return this.showCredits = true;
      }
        return this.showCredits = false;
    },
  }
};
</script>
<style scoped>
footer {
  width: 100%;
  min-height: 48px;
  color: var(--color-text-box);
  background: var(--color-background-footer);
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#credits-title{
  padding: 0 15px;
}
#footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#credits {
  display: none;
  flex-direction: column;
  width: 150px;
  color: var(--color-titles);
}
#credits.activeCredits{
  display: flex;
  padding: 15px 0;
}
a {
  color: var(--color-text-box);
}
</style>
