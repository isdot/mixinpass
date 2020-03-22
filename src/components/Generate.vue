<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-2 col-lg-3 col-sm-12">
        <label class="form-label">网站名</label>
      </div>
      <div class="col-9 col-lg-8 col-sm-12">
        <input class="form-input" type="text" v-model="form.site" placeholder="网站名" />
      </div>
    </div>
    <div class="form-group">
      <div class="col-2 col-lg-3 col-sm-12">
        <label class="form-label">登录名</label>
      </div>
      <div class="col-9 col-lg-8 col-sm-12">
        <input class="form-input" type="text" v-model="form.name" placeholder="登录名" />
      </div>
    </div>
    <div class="form-group">
      <div class="col-2 col-lg-3 col-sm-12">
        <label class="form-label">主密码</label>
      </div>
      <div class="col-9 col-lg-8 col-sm-12">
        <input class="form-input" type="password" v-model="form.pwd" placeholder="主密码" />
      </div>
    </div>
    <div class="form-group pt-1">
      <div class="col-2 col-lg-3 col-sm-12">
        <label class="form-label"></label>
      </div>
      <div class="col-9 col-lg-8 col-sm-12">
        <button
          v-if="!result"
          class="btn btn-primary"
          @click.stop="generate"
        >{{currentPwd.site ? '获取密码' : '生成随机密码'}}</button>
        <div v-else class="input-group">
          <span class="input-group-addon btn" @click.stop="copyPwd()">复制</span>
          <input
            type="text"
            class="form-input"
            :disabled="!showResult"
            spellcheck="false"
            :value="showResult ? result : ''"
            placeholder="******************"
          />
          <button
            class="btn btn-primary input-group-btn"
            @click.stop="showPwd()"
          >{{showResult ? '隐藏' : '显示'}}</button>
          <button class="btn btn-primary input-group-btn" @click.stop="savePwd()">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from '@/utils/crypto'
import store from '@/store'

export default {
  data() {
    return {
      form: {
        site: '',
        name: '',
        pwd: ''
      },
      result: '',
      showResult: false
    }
  },
  computed: {
    uid() {
      return store.state.mixinUser.uid
    },
    currentPwd() {
      return store.state.currentPwd
    }
  },
  watch: {
    currentPwd(val) {
      if (val) {
        this.form = JSON.parse(JSON.stringify(val))
      }
    },
    form: {
      handler() {
        this.result = ''
      },
      deep: true
    }
  },
  mounted() {
    this.showResult = false
    store.commit('setCurrentPwd', { pwd: {} })
  },
  methods: {
    generate() {
      const { site, name, pwd } = this.form
      if (!pwd) {
        return alert('请输入密码')
      }
      this.result = CryptoJS.Encrypt(site + name + pwd + this.uid)
    },
    savePwd() {
      // TODO 授权、组合随机数、上链
      const { site, name } = this.form
      let pwdList = store.state.pwdList
      pwdList.push({ site, name })
      store.commit('setPwdList', { list: pwdList })
      store.commit('setCurrentPwd', { pwd: {} })
      this.form = {}
      this.result = ''
    },
    copyPwd() {
      if (!this.result) {
        return
      }
      this.$copyText(this.result).then(() => {
        alert('复制成功')
      })
    },
    showPwd() {
      this.showResult = !this.showResult
    }
  }
}
</script>

<style>
</style>