<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
    <van-tabbar-item replace to="/" icon="wap-home-o">้ฆ้กต</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="user-o">ๆ็</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
