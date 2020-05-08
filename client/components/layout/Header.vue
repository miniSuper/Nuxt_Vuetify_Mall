<template>
  <div class="header">
    <div class="pc-center clearfix">
      <span class="welcome fl">
        您好，欢迎来到最有料平台！
      </span>
      <ul class="header-right-wrap fr">
        <li
          v-for="(item,index) in headerList"
          :key="index"
          class="header-right-item"
        >
          <a
            :href="item.url"
            class="alink"
          >
            <img
              class="icon"
              :src="item.iconPath"
            />
            <span class="un-select">
              {{ item.name }}
            </span>
          </a>
        </li>
        <!-- <li class="header-right-item">
          <img
            class="icon"
            src="/images/login.png"
          />
          <span>
            登录
          </span>
        </li>
        <li class="header-right-item">
          <img
            class="icon"
            src="/images/register.png"
          />
          <span>
            注册
          </span>
        </li>
        <li class="header-right-item">
          <img
            class="icon"
            src="/images/shopCarts.png"
          />
          <span>
            购物车
          </span>
        </li>
        <li class="header-right-item">
          <img
            class="icon"
            src="/images/info.png"
          />
          <span>
            消息
          </span>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import CONFIG from '@/config'
export default {
  components: {},
  data() {
    return {
      headerList: [{
        name: '登录',
        iconPath: '/images/login.png',
        url: CONFIG.domain + '/Login'
      }, {
        name: '注册',
        iconPath: '/images/register.png',
        url: CONFIG.domain + '/Reg'
      }, {
        name: '购物车',
        iconPath: '/images/shopCarts.png',
        url: CONFIG.domain + '/Login'
      }, {
        name: '消息',
        iconPath: '/images/info.png',
        url: CONFIG.domain + '/Login'
      }]
    }
  },
  computed: {},
  mounted() {
    console.log(CONFIG.domain)
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
.header {
  height: 40px;
  line-height: 40px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #efefef;
  color: #666;
  .welcome {
    font-size: 13px;
    color: #666;
    vertical-align: middle;
  }
  .header-right-wrap {
    .header-right-item {
      font-size: 14px;
      display: inline-block;
      margin-left: 24px;
      line-height: 40px;
      cursor: pointer;
      .icon {
        position: relative;
        top: -2px;
        vertical-align: middle;
        margin-right: 4px;
      }
      .alink {
        color: #666;
        text-decoration: none;
        &:hover {
          color: #222;
        }
      }
    }
  }
}
</style>
