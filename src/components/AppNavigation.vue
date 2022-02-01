<template>
  <nav class="nav__list">
    <router-link to="/" class="nav__link">Форма</router-link>
    <router-link :to="{name: 'Preview'}" class="nav__link">Превью</router-link>
  </nav>
</template>
<script>
export default {
  name: "AppNavigation"
}
</script>
<style lang="scss" scoped>
@import "../assets/_constants.scss";
.nav {
  &__list {
    display: flex;
    align-items: center;
  }
  &__link {
    display: block;
    margin: 0 12px;
    font-size: 14px;
    line-height: 24px;
    color: $colorGray;
    transition: color 175ms ease-in-out;
    &:hover {
      color: $colorBlack;
    }
  }
}
</style>