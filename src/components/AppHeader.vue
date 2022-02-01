<template>
  <header class="header">
    <router-link to="/">
      <img :src="logo" alt="">
    </router-link>
    <app-navigation></app-navigation>
    <div class="header__fixer"></div>
  </header>
</template>
<script>
import AppNavigation from "@/components/AppNavigation";
import logo from "@/assets/img/logo.svg";
export default {
  name: "AppHeader",
  data() {
    return {
      logo: logo
    }
  },
  components: {
    AppNavigation
  }
}
</script>
<style lang="scss" scoped>
.header {
  padding: 22px 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E7E7E7;
  &__fixer {
    width: 100px;
  }
}
</style>