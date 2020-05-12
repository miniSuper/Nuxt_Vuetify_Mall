<template>
  <div class="filter-wrap">
    <div class="product-chain-wrap clearfix">
      <span class="label-name un-select">产业链</span>
      <div
        :class="{'expanded': expandCacheList[0]}"
        class="pro-item-wrap"
      >
        <span
          v-for="item in proChainList"
          :key="item.fId"
          class="pro-item un-select"
          @click="chooseFieldItem(item,'产业链')"
        >{{ item.fName }}</span>
      </div>
      <span
        v-show="!expandCacheList[0]"
        class="btn-expand un-select"
        @click="expandFieldRow(0)"
      >
        展开
        <i class="el-icon-arrow-down"></i>
      </span>
      <span
        v-show="expandCacheList[0]"
        class="btn-expand un-select"
        @click="expandFieldRow(0)"
      >
        收起
        <i class="el-icon-arrow-up"></i>
      </span>
    </div>
    <div class="product-type-wrap clearfix">
      <span class="label-name un-select">品类</span>
      <div
        :class="{'expanded': expandCacheList[1]}"
        class="pro-item-wrap"
      >
        <span
          v-for="item in proTypeList"
          :key="item.fId"
          class="pro-item un-select"
          @click="chooseFieldItem(item,'品类')"
        >{{ item.fName }}</span>
      </div>
      <span
        v-show="!expandCacheList[1]"
        class="btn-expand un-select"
        @click="expandFieldRow(1)"
      >
        展开
        <i class="el-icon-arrow-down"></i>
      </span>
      <span
        v-show="expandCacheList[1]"
        class="btn-expand un-select"
        @click="expandFieldRow(1)"
      >
        收起
        <i class="el-icon-arrow-up"></i>
      </span>
    </div>
    <div class="product-name-wrap clearfix">
      <span class="label-name un-select">品名</span>
      <div
        :class="{'expanded': expandCacheList[2]}"
        class="pro-item-wrap"
      >
        <span
          v-for="item in proNameList"
          :key="item.categoryDictCode"
          class="pro-item un-select"
          @click="chooseFieldItem(item,'品名')"
        >{{ item.category }}</span>
      </div>
      <span
        v-show="!expandCacheList[2]"
        class="btn-expand un-select"
        @click="expandFieldRow(2)"
      >
        展开
        <i class="el-icon-arrow-down"></i>
      </span>
      <span
        v-show="expandCacheList[2]"
        class="btn-expand un-select"
        @click="expandFieldRow(2)"
      >
        收起
        <i class="el-icon-arrow-up"></i>
      </span>
    </div>
    <div
      v-show="selectedFields.length"
      class="selected-fields-wrap"
    >
      <span class="selected-label">筛选条件</span>
      <span
        v-for="(item,index) in selectedFields"
        :key="item.label+item.value"
        class="selected-field un-select"
      >{{ item.label }} : {{ item.value }}
        <i
          class="el-icon-close"
          style="cursor:pointer;"
          @click="closeFieldItem(index,item.label)"
        ></i>
      </span>
      <span
        class="clear-tag un-select"
        @click="clearSelectedFields"
      >清空筛选</span>
    </div>
    <el-form
      ref="form"
      :model="listQuery"
      label-width="80px"
      class="clearfix"
    >
      <el-form-item label="品名">
        <el-input
          v-model.trim="listQuery.fProName"
          placeholder="请输入品名"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="话题">
        <el-input
          v-model.trim="listQuery.demandDescribe"
          placeholder="请输入话题"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item class="btn-wrap">
        <el-button
          type="primary"
          @click="triggerSearch"
        >搜索</el-button>
        <el-button @click="resetListQuery">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'FilterTab',
  props: {
    info: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {
      selectedFields: [],
      listQuery: {
        pageNum: 1,
        pageSize: 10,
        fProName: '', // 品名
        supName: '', // 厂商
        fProMark: '', // 牌号
        fIndustryId: ''// 行业方案
      },
      expandCacheList: [false, false, false]
    }
  },
  computed: {
    proChainList() {
      return this.info.firstMaterials ? [{ fName: '不限', fId: 0 }].concat(this.info.firstMaterials) : []
    },
    proTypeList() {
      return this.info.secondMaterials ? [{ fName: '不限', fId: 0 }].concat(this.info.secondMaterials) : []
    },
    proNameList() {
      return this.info.secondMaterials ? [{ category: '不限', categoryDictCode: 0 }].concat(this.info.thirdMaterials) : []
    }
  },
  methods: {
    expandFieldRow(index) {
      this.$set(this.expandCacheList, index, !this.expandCacheList[index])
    },
    setSelectedFields(name, label) {
      this.selectedFields.find(item => item.label)
    },
    setListQueryByClickField(item, label) {
      if (label === '产业链') {
        this.$set(this.listQuery, 'proChain', item.fName)
      }
      if (label === '品类') {
        this.$set(this.listQuery, 'proType', item.fId)
      }
      if (label === '品名') {
        this.$set(this.listQuery, 'proName', item.category)
      }
    },
    chooseFieldItem(item, label) {
      const index = this.selectedFields.findIndex(item => item['label'] === label)
      if (index === -1) {
        this.selectedFields.push({ label: label, value: item.fName })
      } else {
        this.selectedFields.splice(index, 1, { label: label, value: item.fName })
      }
      this.setListQueryByClickField(item, label)
      this.triggerSearch()
    },
    closeFieldItem(index, label) {
      this.selectedFields.splice(index, 1)
      if (label === '品名') {
        this.$set(this.listQuery, 'fProName', '')
      }
      if (label === '行业方案') {
        this.$set(this.listQuery, 'fIndustryId', '')
      }
      this.getTableList()
    },
    clearSelectedFields() {
      this.selectedFields = []
      this.listQuery.fIndustryId = ''
      this.listQuery.fProName = ''
      this.$router.push({
        path: '',
        query: this.generateNoNullableObject(this.listQuery)
      })
      this.getTableList()
    },
    resetListQuery() {
      this.selectedFields = []
      this.listQuery = Object.assign(this.listQuery, {
        fProName: '', // 品名
        supName: '', // 厂商
        fProMark: '', // 牌号
        fIndustryId: ''// 行业方案
      })
      this.$router.push({
        path: '',
        query: this.generateNoNullableObject(this.listQuery)
      })
      this.getTableList()
    },
    triggerSearch() {
      this.$emit('search', this.listQuery)
    }
  }
}
</script>
<style lang="scss" scoped>
.product-chain-wrap,
.product-type-wrap,
.product-name-wrap {
  position: relative;
  line-height: 40px;
}
.label-name {
  float: left;
  width: 60px;
  text-align: right;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  margin-right: 25px;
}
.pro-item-wrap {
  float: left;
  max-width: 1050px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &.expanded {
    height: auto;
    white-space: normal;
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
.btn-expand {
  position: absolute;
  top: 10px;
  right: 0;
  font-size: 12px;
  display: inline-block;
  color: #1588fc;
  width: 60px;
  height: 20px;
  line-height: 20px;
  border-radius: 2px;
  text-align: center;
  background-color: #e5f4ff;
  cursor: pointer;
}
::v-deep.el-form {
  padding-top: 20px;
  .el-form-item {
    float: left;
    width: 280px;
    &.btn-wrap {
      width: 300px;
    }
    .el-button {
      width: 100px;
    }
  }
}
</style>
