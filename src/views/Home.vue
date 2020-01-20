<template>
    <div>
        <b-tabs type="is-boxed" expanded class="header">
            <b-tab-item label="快捷清单">
              <Inbox/>
            </b-tab-item>
            <b-tab-item label="集草器清单">
              <Inbox/>
            </b-tab-item>
            <b-tab-item label="全部清单">
              <Inbox/>
            </b-tab-item>
        </b-tabs>

      <!-- <div class="focus-view">
        <b-button class="focus-btn" size="is-medium" rounded tag="router-link" to="/focusPage" type="is-link">专注模式</b-button>
      </div> -->
    </div>
</template>
<script>

import Inbox from '../components/Inbox.vue'

export default {
  name: 'home',
  components: {
    Inbox
  },
  methods: {
  }
}
</script>

<style scoped>

.header {
  position: fixed;
  top: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.focus-view {
  position: relative;
  display: flex;
  justify-content: center;
}

.focus-btn {
  position: fixed;
  bottom: 2.273rem;
}

</style>
