<template>
  <div class="page-wrap">
    <div class="pc-center">
      <div class="product-chain-wrap">
        <span class="label-name un-select">产业链</span>
        <span
          v-for="item in proChainList"
          :key="item.fId"
          class="pro-item un-select"
          @click="selectProField(item,'产业链')"
        >{{ item.fName }}</span>
      </div>
      <div class="product-type-wrap">
        <span class="label-name un-select">品类</span>
        <span
          v-for="item in proTypeList"
          :key="item.fId"
          class="pro-item un-select"
          @click="selectProField(item,'品类')"
        >{{ item.fName }}</span>
      </div>
      <div class="product-name-wrap">
        <span class="label-name un-select">品名</span>
        <span
          v-for="item in proNameList"
          :key="item.categoryDictCode"
          class="pro-item un-select"
          @click="selectProField(item,'品名')"
        >{{ item.category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { apiMarketFilterList } from '@/api'

export default {
  name: '',
  components: {},
  data() {
    return {
      proChainList: [],
      proTypeList: [],
      proNameList: [],
      selectedFields: [],
      listQuery: {}
    }
  },
  computed: {},
  mounted() {
    this.getFilterList()
  },
  methods: {
    async getFilterList() {
      const { data } = await apiMarketFilterList()
      // console.log(data)
      const info = data.other
      this.proChainList = [{ fName: '不限', fId: 0 }].concat(info.firstMaterials)
      this.proTypeList = [{ fName: '不限', fId: 0 }].concat(info.secondMaterials)
      this.proNameList = [{ category: '不限', categoryDictCode: 0 }].concat(info.thirdMaterials)
      console.log('this.proChainList', this.proChainList)
      console.log('this.proTypeList', this.proTypeList)
      console.log('this.proNameList', this.proNameList)
    },
    setSelectedFields(name, label) {
      this.selectedFields.find(item => item.label)
    },
    selectProField(item, label) {
      if (label === '品名') {
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.page-wrap {
  .product-chain-wrap {
  }
  .product-type-wrap {
  }
  .product-name-wrap {
  }
  .label-name {
    display: inline-block;
    width: 100px;
    text-align: right;
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin-right: 25px;
  }
  .pro-item {
    font-size: 14px;
    color: #333;
    margin-right: 25px;
    cursor: pointer;
    &:hover,
    &.active {
      color: #ff7609;
    }
  }
}
</style>
