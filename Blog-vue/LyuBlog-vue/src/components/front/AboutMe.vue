<template>
  <div class="card">
    <h2>我的名片</h2>
    <p>网名：A雨天 | 吴天宝</p>
    <p>职业：Java程序员</p>
    <p>现居：中国.湖北.武汉</p>
    <p>Email：wtb033410@163..com</p>
    <ul class="linkmore">
      <li><a href="/" target="_blank" class="iconfont icon-zhuye" title="网站地址"></a></li>
      <li><a href="http://wpa.qq.com/msgrd?v=3&uin=3030935303&site=qq&menu=yes" target="_blank" class="iconfont icon---" title="QQ联系我"></a></li>
      <li id="weixin">
        <a href="#" target="_blank" class="iconfont icon-weixin" title="添加我的微信"></a><i><img src="@/assets/images/wtb_wx.png"/></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped></style>
