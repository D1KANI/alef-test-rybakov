<template>
  <div id="app">
    <app-header></app-header>
    <main class="main">
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss">
@import "./assets/fonts/Montserrat/stylesheet.css";
@import "./assets/_constants.scss";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #fff;
  color: $colorBlack;
  font-family: 'Montserrat';
}

#app {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.main {
  flex-grow: 1;
  padding-top: 30px;
}

a {
  text-decoration: none;
}

input, button, textarea {
  outline: none;
}

input, textarea {
  font-family: 'Montserrat';
  color: $colorBlack;
}

h1 {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.container {
  width: 676px; 
  max-width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

@media screen and (max-width: 540px) {
  .container {
    padding: 0 15px;
  }
}
</style>
