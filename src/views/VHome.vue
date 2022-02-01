<template>
  <div class="homepage">
    <div class="container">
      <div class="homepage__box">
        <h1>Персональные данные</h1>
        <div class="homepage__inner">
          <div class="homepage__input">
            <app-input v-model="user.name" label="Имя" placeholder="Введите имя"></app-input>
          </div>
        </div>
        <div class="homepage__inner">
          <div class="homepage__input">
            <app-input v-model="user.age" label="Возраст" placeholder="Введите возраст"></app-input>
          </div>
        </div>
      </div>
      <div class="homepage__box">
        <div v-if="showButton" @click="addNewChildren()" class="homepage__btn _add"><img :src="imagePlus" alt=""><span>Добавить ребенка</span></div>
        <h1>Дети (макс. 5)</h1>
        <div v-for="(item, index) in user.childrens" :key="index" class="homepage__inner">
          <div class="homepage__flex">
            <div class="homepage__input _mr-18">
            <app-input v-model="item.name" label="Имя" placeholder="Введите имя"></app-input>
            </div>
            <div class="homepage__input _mr-18">
            <app-input v-model="item.age" label="Возраст" placeholder="Введите возраст"></app-input>
            </div>
            <div @click="removeChildren(index)" class="homepage__link">Удалить</div>
          </div>
        </div>
      </div>
      <div @click="saveData()" class="homepage__btn">Сохранить</div>
    </div>
  </div>
</template>

<script>
import AppInput from "@/components/AppInput";
import imagePlus from "@/assets/img/plus.svg";
export default {
  name: "Home",
  components: {
    AppInput,
  },
  data() {
    return {
      imagePlus,
      user: ''
    }
  },
  computed: {
    showButton() {
      if (this.user.childrens.length > 4) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    addNewChildren() {
      this.user.childrens.push({name: '', age: ''})
    },
    removeChildren(index) {
      this.user.childrens.splice(index, 1)
    },
    saveData() {
      let data = this.user;
      data.childrens = data.childrens.filter(item => item.name.trim() && item.age.trim());
      this.$store.commit("saveNewUserData", data);
      this.$router.push({ name: 'Preview' })
    }
  },
  beforeMount() {
    this.user = this.$store.getters.user
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/_constants.scss";
.homepage {
  padding-bottom: 40px;
  &__box {
    position: relative;
    margin-bottom: 30px;
    h1 {
      margin-bottom: 20px;
    }
  }
  &__inner {
    margin-top: 10px;
  }
  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__input {
    flex-grow: 1;
    &._mr-18 {
      margin-right: 18px;
    }
  }
  &__link {
    font-size: 14px;
    line-height: 24px;
    color: $colorBlue;
    cursor: pointer;
    user-select: none;
  }
  &__btn {
    width: max-content;
    padding: 10px 20px;
    background-color: $colorBlue;
    border-radius: 100px;
    font-size: 14px;
    line-height: 24px;
    color: #fff;
    cursor: pointer;
    user-select: none;
    &._add {
      position: absolute;
      top: 0;
      right: 0;
      transform: translateY(-11px);
      display: flex;
      align-items: center;
      background-color: #fff;
      color: $colorBlue;
      border: 2px solid $colorBlue;
      img {
        width: 24px;
        height: 24px;
        margin-right: 4px;
      }
    }
  }
}
</style>
