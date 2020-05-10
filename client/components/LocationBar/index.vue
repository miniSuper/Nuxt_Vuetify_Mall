<template>
  <div class="location-bar">
    <div class="pc-center">
      <span class="location-title">当前位置：</span>
      <span
        class="location-name un-select"
        @click="$commonFunc.toHomePage(false)"
      >首页</span>
      <div
        v-for="(item,index) in locationList"
        :key="index"
        class="location-item"
      >
        <span class="location-arrow"> > </span>
        <nuxt-link
          :to="item.path"
          class="location-name un-select"
        >{{ item.name }}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LocationBar',
  props: {
    locationList: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.location-bar {
  padding: 12px 0;
  .location-title {
    font-size: 14px;
    color: #333;
  }
  .location-item {
    display: inline-block;
    color: #666;
  }
  .location-arrow {
    color: #888;
    padding: 0 6px;
    font-weight: light;
  }
  .location-name {
    color: #666;
    font-size: 14px;
    font-weight: normal;
    cursor: pointer;
    &:hover {
      color: #1588fc;
    }
  }
}
</style>
