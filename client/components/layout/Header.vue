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
      </ul>
    </div>
  </div>
</template>

<script>
import { headerList } from '@/config/data'
export default {
  components: {},
  data() {
    return {
      headerList
    }
  },
  computed: {},
  mounted() {
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
