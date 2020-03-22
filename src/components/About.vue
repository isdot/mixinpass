<template>
  <div class="about">
    <h5>如何生成的随机数？</h5>
    <p>结合交易uuid、设备生成随机数、鼠标移动/点触屏幕坐标</p>
    <h5>如何保证安全性？</h5>
    <p>
      1.除了足够随机外，会在加密时进行加盐处理，即使相同密码，对称加密后生成内容也不同，提升碰撞攻击难度
      <br />2.托管在
      <a href="https://mp.w3c.group">mp.w3c.group</a> 上的代码完全开源、无添加、无后门，可随时用网络抓包监听等方式验证无多余请求
      <br />声明：MixinPass 暂无商用计划，不对未知原因或不可抗力产生的问题负责，欢迎
      <a
        href="https://github.com/wg-01/mixinpass"
        target="_blank"
      >前往Github审查代码</a>
      帮助 MixinPass 提升
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  p {
    line-height: 2;
  }
}
</style>