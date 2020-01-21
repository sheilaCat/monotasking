<template>
  <div id="app">
    <router-view></router-view>
      <b-tabs type="is-toggle" expanded class="bottom-btn" @input="onClickBottomBtn">
        <b-tab-item label="清单">
        </b-tab-item>
        <b-tab-item label="专注">
        </b-tab-item>
        <b-tab-item label="我的">
        </b-tab-item>
    </b-tabs>

  </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default {
  name: 'app',
  components: {
  },
  methods: {
    onClickBottomBtn(number) {
      const jumpPage = ['home', 'focusPage', 'about'];
      this.$router.push({name: jumpPage[number]})
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.bottom-btn {
  position: fixed;
  bottom: 0;
  background: #fff;
  bottom: -2rem;
}
</style>
