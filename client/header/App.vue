<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
}
</style>
