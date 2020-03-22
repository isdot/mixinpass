<template>
  <div id="app">
    <SignIn v-if="viewName === 'SignIn'" />
    <Home v-else-if="viewName === 'Home'" />
    <Setting v-else-if="viewName === 'Setting'" />
    <Footer />
  </div>
</template>

<script>
import '@/utils/fastclick'
import '@/utils/doubleFinger'

import Home from '@/views/Home'
import Setting from '@/views/Setting'
import SignIn from '@/views/SignIn'
import store from '@/store'

export default {
  name: 'App',
  computed: {
    viewName() {
      return store.state.viewName
    }
  },
  components: {
    Home,
    Setting,
    SignIn
  }
}
</script>

<style lang="scss">
@import './assets/styles/spectre';
@import './assets/styles/animate';
@import './assets/styles/common';
#app {
  position: relative;
  padding-bottom: 6rem;
  min-height: 100vh;
}
</style>
