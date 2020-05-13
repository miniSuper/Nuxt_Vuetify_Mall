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
        >
          <span
            class="pro-item un-select"
            :class="genItemClass(item,'产业链')"
            @click="chooseFieldItem(item,'产业链')"
          >{{ item.fName }}</span>
        </span>
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
        >
          <span
            v-show="genProTypeVisible(item,'品类')"
            :class="genItemClass(item,'品类')"
            class="pro-item un-select"
            @click="chooseFieldItem(item,'品类')"
          >{{ item.fName }}</span>
        </span>
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
        >
          <span
            v-show="genProNameVisible(item,'品名')"
            :class="genItemClass(item,'品名')"
            class="pro-item un-select"
            @click="chooseFieldItem(item,'品名')"
          >{{ item.category }}</span>
        </span>
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
          v-model.trim="listQuery.proName"
          placeholder="请输入品名"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item
        label-width="70px"
        label="话题"
      >
        <el-input
          v-model.trim="listQuery.topic"
          placeholder="请输入话题"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="发货省份">
        <el-select
          ref="provinceSelect"
          v-model="listQuery.provinceId"
          :remote-method="getProvinceOptions"
          :loading="provinceLoading"
          placeholder="请选择发货省份"
          remote
          filterable
          clearable
          @focus="handleFocusProvince"
        >
          <el-option
            v-for="item in provinceOptions"
            :key="item.fId"
            :label="item.fFullName"
            :value="item.fId"
          >
          </el-option>
        </el-select>
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
        provinceId: null,
        proChain: '', // 产业链
        proChainId: '', // 产业链
        proType: '', // 品类
        proTypeId: '', // 品类id
        proName: '', // 品名 注意 这些字段名只是前端展示用的  后面有一个转化为对应的后端需要的过程   因为后端 买和卖的字段是不一样的 很乱
        topic: ''// 话题
      },
      provinceLoading: false,
      currentProChain: '',
      currentProType: '',
      currentProName: '',
      expandCacheList: [false, false, false],
      provinceOptions: []
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
    },
    provinceList() {
      return this.info.regions || []
    },
    proTypeValidList() {
      if (!this.currentProChain || !this.currentProChain.fId) {
        return this.proTypeList
      }
      return this.proTypeList.filter(item => item.fParentId === this.currentProChain.fId || item.fId === 0)
    },
    proNameValidList() {
      if (!this.currentProType || !this.currentProType.fId) {
        return this.proNameList
      }
      return this.proNameList.filter(item => {
        return item.fParentIds && item.fParentIds.includes(this.currentProType.fId) || item.fId === 0
      })
    }
  },
  watch: {
    'listQuery.proName': {
      deep: true,
      handler(newValue, oldValue) {
        if (!newValue) {
          this.selectedFields = this.selectedFields.filter(item => item.label === '产业链' || item.label === '品类')
          return
        }
        this.selectedFields.forEach(item => {
          if (item.label === '品名') {
            this.$set(item, 'value', newValue)
          }
        })
      }
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
      // proChain proType proName 是自己这边先标记的  后面会有一个转化为后端对应的字段名的过程
      // 没办法  后端现在命名太乱了  供应和求购又是不一样的  干
      if (label === '产业链') {
        this.$set(this.listQuery, 'proChain', item.fName)
        this.$set(this.listQuery, 'proChainId', item.fId)
      }
      if (label === '品类') {
        this.$set(this.listQuery, 'proType', item.fId)
        this.$set(this.listQuery, 'proTypeId', item.fId)
      }
      if (label === '品名') {
        // const proName = item.category === '不限' ? '' : item.category
        // this.$set(this.listQuery, 'proName', proName)
        this.$set(this.listQuery, 'proName', item.category)
      }
    },
    chooseFieldItem(item, label) {
      const index = this.selectedFields.findIndex(item => item['label'] === label)
      const value = label === '品名' ? item.category : item.fName
      // if (item.fName === '不限' || item.category === '不限') {
      //   console.log('排除')
      //   this.selectedFields.splice(index, 1)
      // } else {
      //   }
      if (index === -1) {
        this.selectedFields.push({ label, value })
      } else {
        this.selectedFields.splice(index, 1, { label, value })
      }
      this.setListQueryByClickField(item, label)
      label === '产业链' && this.handleClickProChain(item, label)
      label === '品类' && this.handleClickProType(item, label)
      label === '品名' && this.handleClickProName(item, label)
    },
    closeFieldItem(index, label) {
      this.selectedFields.splice(index, 1)
      if (label === '品名') {
        this.$set(this.listQuery, 'proName', '')
      }
      this.triggerSearch()
    },
    clearSelectedFields() {
      this.selectedFields = []
      this.listQuery.proChain = ''
      this.listQuery.proChainId = null
      this.listQuery.proName = ''
      this.listQuery.proType = ''
      this.listQuery.proTypeId = null
      this.triggerSearch()
    },
    resetListQuery() {
      this.selectedFields = []
      this.listQuery = Object.assign(this.listQuery, {
        proChain: '', // 产业链
        proChainId: null, // 产业链id
        proType: '', // 品类
        proTypeId: null, // 品类id
        proName: '' // 品名
      })
      this.triggerSearch()
    },
    genItemClass(item, label) {
      const value = label === '品名' ? item.category : item.fName
      const index = this.selectedFields.findIndex(element => element.label === label && element.value === value)
      return index === -1 ? '' : 'active'
    },
    genProTypeVisible(item, label) {
      return this.proTypeValidList.findIndex(element => element.fId === item.fId) !== -1
    },
    genProNameVisible(item, label) {
      return this.proNameValidList.findIndex(element => element.fId === item.fId) !== -1
    },
    getProvinceOptions(queryWord) {
      console.log('queryWord', queryWord)
      const query = queryWord.trim()
      if (!query) {
        this.provinceOptions = this.provinceList
        return
      }
      this.provinceLoading = true
      // setTimeout(() => {
      this.provinceLoading = false
      this.provinceOptions = this.provinceList.filter(item => {
        if (item.fName) {
          return item.fName.indexOf(query) > -1
        } else {
          return false
        }
      })
      // }, 200)
    },
    triggerSearch() {
      this.$emit('search', this.listQuery)
    },
    handleClickProChain(item, label) {
      this.currentProChain = item
      this.triggerSearch()
    },
    handleClickProType(item, label) {
      this.currentProType = item
      this.triggerSearch()
    },
    handleClickProName(item, label) {
      this.triggerSearch()
    },
    handleFocusProvince() {
      console.log('input', this.$refs.provinceSelect.query)
      if (!this.$refs.provinceSelect.query) {
        console.log('重新搜索')
        this.getProvinceOptions('')
      }
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
.selected-fields-wrap {
  padding-top: 20px;
  font-size: 12px;
  color: #333;
  margin-right: 15px;
  .selected-label {
    display: inline-block;
    width: 70px;
    margin-right: 12px;
    text-align: right;
  }
  .selected-field {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
    margin-right: 10px;
    border-radius: 2px;
    border: 1px solid #34a0fa;
    font-size: 12px;
    color: #333;
  }
  .clear-tag {
    cursor: pointer;
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
