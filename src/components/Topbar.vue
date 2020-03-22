<template>
  <div class="topbar container">
    <header class="navbar main column col-8 col-lg-10 col-sm-12 s-font">
      <section class="navbar-section">
        <a href="https://mp.w3c.group" class="navbar-brand mr-2">
          <SvgIcon class="mt-2 mr-2" icon-class="logo" style="font-size: 2.1rem" />
          <b class="logo-text">MixinPass</b>
        </a>
      </section>
      <section class="navbar-section hide-sm">
        <a
          href="https://mixin.one/messenger"
          target="_blank"
          v-if="viewName === 'SignIn'"
        >下载 Mixin Messenger</a>
        <span v-else>
          <span class="mr-2">ID:{{uid}}</span>
          <a href="/">
            <SvgIcon class="logout" icon-class="logout" />登出
          </a>
        </span>
      </section>
    </header>

    <div class="columns navigation" v-if="viewName !== 'SignIn'">
      <div class="column main col-8 col-lg-10 col-sm-12">
        <div class="columns">
          <div class="column col-6 view">
            <b v-if="viewName === 'Home'">{{$t('view.home')}}</b>
            <b v-if="viewName === 'Setting'">{{$t('view.setting')}}</b>
          </div>
          <div class="column col-6 text-right">
            <button
              class="btn btn-primary mr-2"
              :class="{disabled: viewName === 'SignIn'}"
              @click.stop="toView('Home')"
            >
              <SvgIcon icon-class="key" style="font-size: 1rem; margin-top: 0.1rem;" />
            </button>
            <button class="btn btn-primary" @click.stop="toView('Setting')">
              <SvgIcon icon-class="setting" style="font-size: 1rem; margin-top: 0.1rem;" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  methods: {
    toView(name) {
      store.commit('setViewName', { name })
    }
  },
  computed: {
    uid() {
      return store.state.mixinUser.uid
    },
    viewName() {
      return store.state.viewName
    }
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  padding: 0.25rem 0;
  margin-bottom: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0 0 0.1rem 0px;
  .navbar {
    z-index: 1;
    line-height: 3rem;
    padding: 0 1rem;
    a:focus {
      box-shadow: none;
    }
  }
  .navigation {
    border-top: 0.05rem solid rgba(0, 0, 0, 0.1);
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    padding: 0.3rem 1.2rem 0;
    line-height: 2.25rem;
    .view {
      user-select: none;
      font-size: 0.9rem;
      b {
        padding-bottom: 0.25rem;
      }
    }
    .btn {
      margin-top: -0.1rem;
    }
  }
  .logout {
    font-size: 1rem;
    margin: 0.95rem 0.1rem 0 0.2rem;
  }
}
</style>