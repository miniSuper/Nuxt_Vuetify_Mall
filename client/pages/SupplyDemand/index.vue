<template>
  <div class="page-wrap">
    <LocationBar :location-list="locationList" />
    <div class="pc-center">
      <FilterTab
        :info="info"
        @search="handleSearch"
      />
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
    <Pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.pageNum"
      :limit.sync="listQuery.pageSize"
      class="pagination"
      @pagination="togglePagination"
    />
  </div>
</template>

<script>
import LocationBar from '@/components/LocationBar'
import Pagination from '@/components/Pagination'
import FilterTab from '@/components/other/FilterTab'

import { apiMarketFilterList } from '@/api'

export default {
  name: 'SupplyDemand',
  components: { LocationBar, Pagination, FilterTab },
  data() {
    return {
      locationList: [{ name: '市场供求', path: '' }],
      total: 0,
      listQuery: {
        PageNum: 10,
        ProvinceId: '',
        Describe: '',
        firstMatId: '',
        secondMatId: '',
        Category: ''
      },
      tableList: [],
      currentTabIndex: 0,
      info: {}
    }
  },
  computed: {},
  mounted() {
    this.getFilterList()
  },
  methods: {
    async getFilterList() {
      const { data } = await apiMarketFilterList()
      const info = data.other
      this.info = info
    },
    getTableList() {},
    togglePagination() {

    },
    translateQueryParams() {

    },
    async  handleSearch(params) {
      this.translateQueryParams(params)
      this.getTableList()
    }
  }
}
</script>
<style lang='scss' scoped>
.page-wrap {
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
