<template>
  <div class="page-wrap">
    <LocationBar :location-list="locationList" />
    <div class="pc-center">
      <el-tabs
        v-model="tabName"
        @tab-click="toggleTab"
      >
        <el-tab-pane
          label="供应"
          name="seller"
        >
          <FilterTab
            :info="info"
            @search="handleSearch"
          />
        </el-tab-pane>
        <el-tab-pane
          label="求购"
          name="buyer"
        >
          <FilterTab
            :info="info"
            @search="handleSearch"
          />
        </el-tab-pane>

      </el-tabs>

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
          :page.sync="pageNum"
          :limit.sync="pageSize"
          class="pagination"
          @pagination="togglePagination"
        />
      </div>
    </div>
    <Pagination
      v-show="total>0"
      :total="total"
      :page.sync="pageNum"
      :limit.sync="pageSize"
      class="pagination"
      @pagination="togglePagination"
    />
  </div>
</template>

<script>
import LocationBar from '@/components/LocationBar'
import Pagination from '@/components/Pagination'
import FilterTab from '@/components/other/FilterTab'

import { apiMarketFilterList, apiMarketTraderList } from '@/api'

export default {
  name: 'SupplyDemand',
  components: { LocationBar, Pagination, FilterTab },
  data() {
    return {
      locationList: [{ name: '市场供求', path: '' }],
      total: 0,
      pageNum: 1,
      pageSize: 10,
      listQuery: {},
      listQueryCache: {},
      tableList: [],
      currentTabIndex: 0,
      info: {},
      tabName: 'seller'
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
    async getTableList() {
      console.log('this.listQuery', this.listQuery)
      try {
        const { data } = await apiMarketTraderList(this.listQuery)
        console.log(data)
        this.tableList = data.other.supplys.rows
      } catch (error) {
        console.error(error)
      }
    },
    togglePagination() {
      this.getTableList()
    },
    toggleTab() {
      console.log(this.tabName)
      const query = this.listQueryCache[this.tabName] || {}
      this.translateQueryParams(query)
      this.getTableList()
    },
    translateQueryParams(query) {
      console.log(this.tabName)
      this.listQuery = {}
      if (this.tabName === 'seller') {
        this.listQuery.supplyPageNum = this.pageSize
        this.listQuery.supplyNum = this.pageNum
        this.listQuery.supplyProvinceId = query.provinceId
        this.listQuery.supplyDescribe = query.topic
        this.listQuery.supplyfirstMatId = query.proChainId
        this.listQuery.supplysecondMatId = query.proTypeId
        this.listQuery.sCategory = query.proName
      } else {
        this.listQuery.demandNum = this.pageSize
        this.listQuery.demandPageNum = this.pageNum
        this.listQuery.demandProvinceId = query.provinceId
        this.listQuery.demandDescribe = query.topic
        this.listQuery.demandfirstMatId = query.proChainId
        this.listQuery.demandsecondMatId = query.proTypeId
        this.listQuery.dCategory = query.proName
      }
    },
    async  handleSearch(query) {
      console.log('query', query)
      this.listQueryCache[this.tabName] = query
      this.translateQueryParams(query)
      this.getTableList()
    }
  }
}
</script>
<style lang='scss' scoped>
::v-deep.el-table {
  .btn-hasCollected {
    color: #fb7e12;
  }
}
.pagination {
  text-align: right;
}
</style>
