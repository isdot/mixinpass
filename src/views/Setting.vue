<template>
  <div>
    <Topbar />
    <div class="container">
      <div class="columns">
        <div class="column main col-8 col-lg-10 col-sm-12">
          <div class="card">
            <div class="card-body">
              <b>密码生成选项</b>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary disabled">保存</button>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <b>清除本地数据</b>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary disabled">清除</button>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <b>领取CNB</b>
              <div>每个账号每月可以领0.01CNB，可用于保存100万次密码</div>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary disabled">请下个月再来</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>