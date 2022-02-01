<template>
  <div class="input-wrapper">
    <label class="input-label">{{ label }}</label>
    <input :value="value" @input="$emit('input', $event.target.value)" type="text" class="input" :placeholder="placeholder">
  </div>
</template>
<script>
export default {
  name: "AppInput",
  props: {
    value: String,
    label: {
      type: String,
      default: "Данные"
    },
    placeholder: {
      type: String,
      default: "Введите данные"
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/_constants.scss";
.input {
  width: 100%;
  padding: 26px 16px 6px;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  &-wrapper {
    width: 100%;
    position: relative;
  }
  &-label {
    font-size: 13px;
    line-height: 16px;
    color: $colorGray;
    position: absolute;
    top: 8px;
    left: 16px;
  }
}
</style>