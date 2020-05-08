<template>
  <v-app-bar>
    <div class="bar-logo">
      <img
        class="bar-logo-img"
        src="/images/logo.png"
        alt=""
      >
    </div>
    <v-spacer />
    <!-- 顶部导航栏 -->
    <div class="right-menus">
      <ul class="bar-menus">
        <li
          v-for="(nav,index) in navList"
          :key="index"
          class="nav-item"
        >
          <v-btn
            text
            large
            color="#333"
            @click="toggleRoute(nav.path)"
          > {{ nav.name }}</v-btn>
        </li>
      </ul>
      <div class="btn-group clearfix">
        <v-btn
          class="fl"
          color="primary"
          large
          @click="toLogin"
        >登录</v-btn>
        <v-btn
          text
          large
          color="primary"
          @click="toRegister"
        >注册</v-btn>
      </div>
      <!-- 汉堡按钮 -->
      <v-app-bar-nav-icon
        class="bar-nav-icon"
        @click.stop="drawer = !drawer"
      />
    </div>
    <!-- 顶部导航栏 end-->

  </v-app-bar>
</template>

<script>

export default {
  data() {
    return {
      navList: [{
        path: '/',
        name: '首页'
      }, {
        path: '/mall',
        name: '自营商城'
      }, {
        path: '/market',
        name: '开放平台'
      }, {
        path: '/about-us',
        name: '关于我们'
      }, {
        path: '/user',
        name: '个人中心'
      }]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    toggleRoute(path) {
      this.$router.push(path)
    },
    toLogin() {
      this.$router.push('/login')
    },
    toRegister() {
      this.$router.push('/register')
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
