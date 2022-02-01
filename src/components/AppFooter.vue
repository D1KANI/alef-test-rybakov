<template>
  <footer class="footer">
    <div class="footer__text">
      all rights reserved
    </div>
  </footer>
</template>
<script>
export default {
  name: "AppFooter"
}
</script>
<style lang="scss" scoped>
@import "../assets/_constants.scss";
.footer {
  padding: 30px 0;
  background-color: $colorGrayM;
  &__text {
    font-size: 13px;
    line-height: 16px;
    color: #000;
    text-align: center;
  }
}
</style>