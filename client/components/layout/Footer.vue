<template>
  <!-- 页脚 -->
  <v-footer
    class="layout-footer"
    app
    absolute
    inset
  >
    <div class="pc-center">
      <div class="footer-top clearfix">
        <img
          class="fl logo"
          src="/images/logo_footer.png"
          alt=""
        >
        <div class="contact-wrap fl">
          <p class="working-time">正常工作时间（9:00-18:00 周一至周五）</p>
          <p class="contact-phone">0592-6520205</p>
          <p class="email">邮箱：service@zuiyouliao.cn</p>
        </div>
        <div class="qrcode-wrap fr">
          <img
            class="qrcode-img"
            src="/images/zyl-fwh.png"
            alt=""
          >
          <p class="qrcode-text">关注最有料公众号</p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="quick-link-wrap">
          <nuxt-link
            v-for="(item,index) in quickLinks"
            :key="index"
            :to="item.path"
            class="quick-link-item"
          >{{ item.name }}</nuxt-link>
        </div>
        <p class="copyright">
          Copyright © 最有料 www.zuiyouliao.com 闽ICP备17020731号
        </p>
      </div>
    </div>
  </v-footer>
  <!-- 页脚 end-->
</template>

<script>
import { quickLinks } from '@/config/data'
export default {
  components: {},
  data() {
    return {
      quickLinks
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.v-footer {
  padding: 50px 0;
  .footer-top {
    padding-bottom: 20px;
    .logo {
      padding-right: 40px;
      padding-top: 40px;
    }
    .contact-wrap {
      padding-left: 40px;
      font-size: 16px;
      color: #f7f7f7;
      border-left: 1px solid #404040;
      .working-time {
      }
      .contact-phone {
        font-size: 26px;
      }
      .email {
        margin: 0;
      }
    }
    .qrcode-wrap {
      text-align: center;
      .qrcode-img {
        width: 80px;
      }
      .qrcode-text {
        font-size: 12px;
        color: #dfdfdf;
      }
    }
  }
  .footer-bottom {
    font-size: 12px;
    color: #6d6d6d;
    border-top: 1px solid #40404059;
    padding-top: 20px;
    .quick-link-wrap {
      text-align: center;
      .quick-link-item {
        display: inline-block;
        padding: 0 12px;
        height: 12px;
        line-height: 12px;
        border-right: 1px solid #40404059;
        color: #6d6d6d;
        text-decoration: none;
        cursor: pointer;
        &:nth-last-of-type(1) {
          border-right: 0 none;
        }
        &:hover {
          color: #fff;
        }
      }
    }
    .copyright {
      padding-top: 12px;
      text-align: center;
    }
  }
}
</style>
