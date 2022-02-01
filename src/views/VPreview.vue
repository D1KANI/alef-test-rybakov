<template>
  <div class="preview">
    <div class="container">
      <div class="preview__box">
        <h1>Персональные данные</h1>
        <div class="preview__text"><span>{{ user.name }}</span>, <span>{{ user.age }}</span></div>
      </div>
      <div v-if="user.childrens.length > 0" class="preview__box">
        <h1>Дети</h1>
        <div v-for="(item, index) in user.childrens" :key="index" class="preview__text _bg">
          <span>{{ item.name }}</span>, <span>{{item.age}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VPreview",
  data() {
    return {
      user: ''
    }
  },
  beforeMount() {
    this.user = this.$store.getters.user
  }
}
</script>
<style lang="scss" scoped>
.preview {
  &__box {
    margin-bottom: 60px;
  }
  &__text {
    width: max-content;
    margin-top: 20px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    &._bg {
      padding: 10px 20px;
      background-color: #F1F1F1;
    }
  }
}
</style>