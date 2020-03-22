<template>
  <div>
    <b>密码列表</b>
    <!-- 搜索 -->

    <div class="text-center pb-2 mb-2" v-if="!pwdList || !pwdList.length">暂无记录</div>
    <table class="table" v-else>
      <thead>
        <tr>
          <th>网站名</th>
          <th>登录名</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in pwdList" :key="index">
          <td>{{item.site}}</td>
          <td>{{item.name}}</td>
          <td>
            <div class="option input-group">
              <input
                type="text"
                class="form-input hide-md"
                :disabled="true"
                placeholder="******************"
              />
              <button class="btn btn-primary input-group-btn" @click.stop="showPwd(index)">获取</button>
              <button class="btn btn-default input-group-btn" @click.stop="deletePwd(index)">删除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '@/store'
export default {
  methods: {
    showPwd(index) {
      const currentPwd = this.pwdList[index]
      store.commit('setCurrentPwd', { pwd: currentPwd })
      document.documentElement.scrollTop = document.body.scrollTop = 0
    },
    deletePwd(index) {
      let pwdList = this.pwdList
      pwdList.splice(index, 1)
      store.commit('setPwdList', { list: pwdList })
    }
  },
  computed: {
    pwdList() {
      return store.state.pwdList
    }
  }
}
</script>

<style lang="scss" scoped>
.option {
  input {
    max-width: 60%;
  }
}
</style>