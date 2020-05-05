<template>
  <v-app
    class="default-layout"
    them--light
  >
    <!--  侧边栏 -->
    <v-navigation-drawer
      v-model="drawer"
      app
      right
    >
      <v-list dense>
        <v-list-item
          v-for="(item,index) in navList"
          :key="index"
          link
          @click="toggleRoute(item.path)"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--  侧边栏 end -->

    <v-app-bar app>
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

    <!--  router-view -->
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>
    <!--  router-view  end-->

    <!-- 页脚 -->
    <v-footer
      class="layout-footer"
      app
      absolute
      inset
    >
      <div class="copyright-declare">
        <span class="bold">
          著作权说明
        </span>
        本网站所载的所有材料或内容受版权法的保护，所有版权由最有料拥有，但注明引用其他方的内容除外。未经最有料或其他方事先书面许可，任何人不得将本网站上的任何内容以任何方式进行复制、经销、翻印、播放、以超级链路连接或传送、以"镜像法"载入其他服务器上、存储于信息检索系统或者其他任何商业目的的使用，但对于非商业目的的、个人使用的下载或打印（条件是不得修改，且须保留该材料中的版权说明或其他所有权的说明）除外。
      </div>
      <p class="footer-item">地址：厦门市海沧区海沧大道567号厦门中心E座701单元</p>
      <p class="footer-item">客服电话:0592-6809221</p>
      <p class="footer-item bold">闽ICP备16032434号-1</p>
    </v-footer>
    <!-- 页脚 end-->

  </v-app>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    drawer: false,
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
  }),
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
<style lang="scss" scoped>
.v-footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 40px;
  .bold {
    font-weight: bold;
  }
  .copyright-declare {
    margin-bottom: 10px;
  }
  .footer-item {
    margin-right: 40px;
    margin-bottom: 0;
  }
}
.bar-logo-img {
  height: 32px;
}
.btn-group {
  .v-btn {
    margin-right: 20px;
  }
}
</style>
