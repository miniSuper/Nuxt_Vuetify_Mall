<template>
  <div>
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
  </div>
</template>

<script>

export default {
  data() {
    return {
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
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
