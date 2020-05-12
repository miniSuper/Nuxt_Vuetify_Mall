<template>
  <div class="top-nav">
    <div class="pc-center clearfix">
      <img
        class="nav-logo"
        src="/images/logo_nav.png"
        alt=""
      >
      <div class="nav-right-wrap fr">
        <span
          v-for="(item,index) in navList"
          :key="index"
        >
          <nuxt-link
            v-if="item.path"
            :to="item.path"
            :class="{'active':index === currentIndex}"
            class="nav-right-item"
          >{{ item.name }}</nuxt-link>
          <a
            v-else
            :href="item.url"
            :class="{'active':index === currentIndex}"
            class="nav-right-item"
          >{{ item.name }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { navList } from '@/config/data'
export default {
  name: 'TopNav',
  data() {
    return {
      navList,
      currentIndex: 0
    }
  },
  computed: {},
  created() {
    const currentIndex = this.navList.findIndex(item => item.path === this.$route.path)
    this.currentIndex = currentIndex === -1 ? 0 : currentIndex
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
.top-nav {
  height: 48px;
  padding: 18px 0;
  background: #fff;
  border-bottom: 1px solid #efefef;
  box-sizing: content-box;
  .nav-right-wrap {
    .nav-right-item {
      display: inline-block;
      border-bottom: 2px solid transparent;
      color: #333;
      font-size: 16px;
      line-height: 48px;
      margin-left: 24px;
      &.active {
        border-bottom: 2px solid #1588fc;
        color: #1588fc;
      }
      &:hover {
        color: #1588fc;
      }
    }
  }
}
</style>
