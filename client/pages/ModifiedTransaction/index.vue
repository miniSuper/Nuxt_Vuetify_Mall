<template>
  <div class="page-wrap">
    <LocationBar :location-list="locationList" />
    <div class="pc-center">
      <div class="filter-wrap">
        <div class="section-title">改性料交易</div>
        <div class="filter-field-wrap">
          <div class="filter-field-item">
            <div
              class="filter-field-row clearfix"
              :class="{'expanded':expandRows['industry']}"
            >
              <span class="filter-label fl">行业方案</span>
              <div
                ref="wrapIndustry"
                class="filter-value-wrap fl"
              >
                <span
                  v-for="(item,index) in industryList"
                  :key="index"
                  class="filter-value un-select"
                  :class="genClass(item)"
                  @click="chooseFieldItem(item,'行业方案')"
                >{{ item.fName }}</span>
              </div>
            </div>
            <span
              v-show="isExpandIndustryTagShow && !expandRows['industry']"
              class="row-expand un-select"
              @click="expandFieldRow('industry')"
            >
              展开
              <i class="el-icon-arrow-down"></i>
            </span>
            <span
              v-show="isExpandIndustryTagShow &&expandRows['industry']"
              class="row-expand un-select"
              @click="expandFieldRow('industry')"
            >
              收起
              <i class="el-icon-arrow-up"></i>
            </span>
          </div>
          <div class="filter-field-item">
            <div
              class="filter-field-row clearfix"
              :class="{'expanded':expandRows['product']}"
            >
              <span class="filter-label fl">品名</span>
              <div
                ref="wrapProduct"
                class="filter-value-wrap fl"
              >
                <span
                  v-for="(item,index) in productNameList"
                  :key="index"
                  class="filter-value un-select"
                  :class="genClass(item)"
                  @click="chooseFieldItem(item,'品名')"
                >{{ item.fName }}</span>
              </div>
            </div>
            <span
              v-show="isExpandProductTagShow && !expandRows['product']"
              class="row-expand un-select"
              @click="expandFieldRow('product')"
            >
              展开
              <i class="el-icon-arrow-down"></i>
            </span>
            <span
              v-show="isExpandProductTagShow && expandRows['product']"
              class="row-expand un-select"
              @click="expandFieldRow('product')"
            >
              收起
              <i class="el-icon-arrow-up"></i>
            </span>
          </div>
        </div>
        <div
          v-show="selectedFields.length"
          class="selected-fields-wrap"
        >
          <span class="selected-label">筛选条件</span>
          <span
            v-for="(item,index) in selectedFields"
            :key="item.value"
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
          <el-form-item label="厂商">
            <el-input
              v-model.trim="listQuery.supName"
              placeholder="请输入厂商"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="牌号">
            <el-input
              v-model.trim="listQuery.fProMark"
              placeholder="请输入牌号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item class="btn-wrap">
            <el-button
              type="primary"
              @click="handleSearch"
            >搜索</el-button>
            <el-button @click="resetListQuery">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="table-wrap">
        <el-table
          :data="tableList"
          class="table-list"
        >
          <el-table-column
            align="center"
            prop="fName"
            label="改性料"
          />
          <el-table-column
            align="center"
            prop="fManufacturer"
            label="厂家"
          />
          <el-table-column
            align="center"
            prop="fMark"
            label="牌号"
          />
          <el-table-column
            align="center"
            prop="fUse"
            label="用途"
          />
          <el-table-column
            align="center"
            prop="fProTypeName"
            label="行业方案"
          />
          <el-table-column
            align="center"
            prop="fOfferPrice"
            label="价格"
            sortable
          />
          <el-table-column
            width="200"
            align="center"
            label="操作"
          >
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-shopping-cart-2"
                @click="handleSetOrder(scope.row)"
              >下单</el-button>
              <el-button
                v-if="scope.row.fIsCollect"
                size="mini"
                icon="el-icon-star-on"
                class="btn-hasCollected"
                @click="handleCollect(scope.row)"
              >
                已收藏
              </el-button>
              <el-button
                v-else
                size="mini"
                icon="el-icon-star-off"
                @click="handleCollect(scope.row)"
              >
                收藏
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <Pagination
          v-show="total>0"
          :total="total"
          :page.sync="listQuery.pageNum"
          :limit.sync="listQuery.pageSize"
          class="pagination"
          @pagination="togglePagination"
        />
      </div>
    </div>
  </div>
</template>
<script>
import LocationBar from '@/components/LocationBar'
import Pagination from '@/components/Pagination'
import { apiProductName, apiIndustrySolutionList, apiModifedMaterialList } from '@/api'
export default {
  name: 'ModifiedTransaction',
  components: { LocationBar, Pagination },
  async  asyncData({ query, req }) {
    try {
      const { data } = await apiModifedMaterialList(query)
      const tableList = data.other.list
      const total = data.other.total
      return {
        tableList,
        total
      }
    } catch (error) {
      console.error(error)
    }
  },
  data () {
    return {
      locationList: [{ name: '改性料交易', path: '' }],
      productNameList: [],
      industryList: [],
      selectedFields: [],
      total: 0,
      listQuery: {
        pageNum: 1,
        pageSize: 10,
        fProName: '', // 品名
        supName: '', // 厂商
        fProMark: '', // 牌号
        fIndustryId: ''// 行业方案
      },
      tableList: [],
      expandRows: {
        'industry': false,
        'product': false
      },
      isExpandIndustryTagShow: false,
      isExpandProductTagShow: false
    }
  },
  watch: {
    'listQuery.fProName': {
      deep: true,
      handler(newValue, oldValue) {
        if (!newValue) {
          this.selectedFields = this.selectedFields.filter(item => item.label === '行业方案')
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
  created() {
    if (process.browser) {
      const { pageNum = 1, pageSize = 10, fProName = '', supName = '', fProMark = '', fIndustryId = '' } = this.$route.query
      this.listQuery = Object.assign(this.listQuery, { pageNum, pageSize, fProName, supName, fProMark, fIndustryId })
      if (!this.productNameList.length) {
        this.getProductName()
      }
      if (!this.industryList.length) {
        this.getIndustryList()
      }
      if (!this.tableList.length) {
        this.getTableList()
      }
      if (fIndustryId) {
        if (this.industryList.length) {
          const targetItem = this.industryList.find(item => item.fId === fIndustryId)
          this.selectedFields.push({ label: '行业方案', value: targetItem.fName })
        } else {
          this.getIndustryList().then(() => {
            const targetItem = this.industryList.find(item => item.fId === fIndustryId)
            this.selectedFields.push({ label: '行业方案', value: targetItem.fName })
          })
        }
      }
      if (fProName) {
        this.selectedFields.push({ label: '品名', value: fProName })
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.isExpandIndustryTagShow = this.$refs.wrapIndustry.clientWidth > 1000
      this.isExpandProductTagShow = this.$refs.wrapProduct.clientWidth > 1000
    }, 1000)
  },
  methods: {
    async getProductName() {
      try {
        const { data } = await apiProductName({ type: 2 })
        this.productNameList = data.other
        return data.other
      } catch (error) {
        console.error(error)
        return Promise.reject(error)
      }
    },
    async getIndustryList() {
      try {
        const { data } = await apiIndustrySolutionList()
        this.industryList = data.other
        return data.other
      } catch (error) {
        console.error(error)
        return Promise.reject(error)
      }
    },
    genClass(item) {
      const index = this.selectedFields.findIndex(element => element.value === item.fName)
      return index === -1 ? '' : 'active'
    },
    async  getTableList() {
      const query = this.generateNoNullableObject(this.listQuery)
      this.$router.push({
        path: '',
        query
      })
      try {
        const { data } = await apiModifedMaterialList(this.listQuery)
        this.tableList = data.other.list
        this.total = data.other.total
      } catch (error) {
        console.error(error)
      }
    },
    setListQueryByClickField(item, label) {
      if (label === '品名') {
        this.$set(this.listQuery, 'fProName', item.fName)
      }
      if (label === '行业方案') {
        this.$set(this.listQuery, 'fIndustryId', item.fId)
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
      this.getTableList()
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
    expandFieldRow(label) {
      this.$set(this.expandRows, label, !this.expandRows[label])
    },
    async  handleSearch() {
      this.listQuery.pageNum = 1
      this.getTableList()
    },
    handleSetOrder(item) {
      console.log(item)
      this.$router.push({
        path: '/ModifiedTransaction/productDetail',
        query: {
          id: item.fId
        }
      })
    },
    handleCollect(item) {
      this.$store.dispatch('openLoginDialogAction')
    },
    togglePagination() {
      this.getTableList()
    }
  }
}
</script>
<style lang="scss" scoped>
.filter-wrap {
  width: 1200px;
  box-sizing: border-box;
  padding: 0 20px;
  border: 1px solid #d3e9fe;
  background-color: #fff;
  margin: 0 auto 20px;
  .section-title {
    line-height: 54px;
    font-size: 16px;
    font-weight: 700;
    color: #1588fc;
  }
  .filter-field-wrap {
    padding: 20px 0;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    .filter-field-item {
      position: relative;
      .filter-field-row {
        width: 1100px;
        line-height: 40px;
        &.expanded {
          .filter-value-wrap {
            height: auto;
            white-space: normal;
          }
        }
        .filter-label {
          display: inline-block;
          text-align: right;
          min-width: 70px;
          font-size: 14px;
          font-weight: 700;
          color: #333;
          margin-right: 25px;
        }
        .filter-value-wrap {
          display: inline-block;
          max-width: 1000px;
          height: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .filter-value {
            font-size: 14px;
            color: #333;
            padding: 0 12px;
            cursor: pointer;
            &.active {
              color: #ff7609;
            }
          }
        }
      }
      .row-expand {
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
::v-deep.el-table {
  .btn-hasCollected {
    color: #fb7e12;
  }
}
.pagination {
  text-align: right;
}
</style>
