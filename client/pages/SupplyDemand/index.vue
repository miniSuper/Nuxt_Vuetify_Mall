<template>
  <div class="page-wrap">
    <LocationBar :location-list="locationList" />
    <div class="pc-center">
      <div class="tabs-wrap">
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
      </div>

      <div class="result-wrap">
        <div class="seo-data-wrap">
          <div class="seo-data-content">
            <div
              v-for="item in tableList"
              :key="item.fId"
              class="seo-data-item"
            >
              <h6 class="seo-data-item-attrbute">{{ item.companyInfo.fName }}</h6>
              <h6 class="seo-data-item-attrbute">{{ item.customer && item.customer.fRealName }}</h6>
              <h6 class="seo-data-item-attrbute">{{ item.customer && item.customer.fNickName }}</h6>
              <h6 class="seo-data-item-attrbute">{{ item.customer && item.customer.fPhone }}</h6>
              <h6 class="seo-data-item-attrbute">{{ item.customer && item.customer.fPositionText ||'' }}</h6>
              <h6 class="seo-data-item-attrbute">{{ item.params && item.params.typeStr || '' }}</h6>
              <h6 class="seo-data-item-attrbute">{{ item.params && item.params.matStr || '' }}</h6>

            </div>
          </div>
        </div>
        <div class="main-list">
          <div class="main-list-head">
            <span class="color-blue">市场供需</span>
            列表
          </div>
          <div class="main-list-body">
            <div
              v-for="item in tableList"
              :key="item.fId"
              class="main-list-item clearfix"
            >
              <div
                :style="{backgroundImage: 'url('+item.customer.fUseravatar+ ')'}"
                class="avatar-wrap fl"
                @click="toDetail(item)"
              >
              </div>
              <div class="info-wrap fl">
                <div
                  class="item-company-name"
                  @click="toDetail(item)"
                >{{ item.companyInfo && item.companyInfo.fName }}</div>
                <!--  fRealName   fNickName  fPhone  fPositionText 逻辑我也不知道 反正之前别人的代码是这么写的 -->
                <p
                  class="item-telephone"
                  @click="toDetail(item)"
                >{{ item.customer.fRealName ||item.customer.fNickName || item.customer.fPhone || item.customer.fPositionText ||'' }}</p>
                <div
                  class="item-industry-attribute"
                  @click="toDetail(item)"
                >
                  <span class="item-material">{{ item.params && item.params.typeStr || '' }}</span>
                  <span class="item-industry">{{ item.params && item.params.matStr || '' }}</span>
                </div>
                <div
                  class="item-message"
                  @click="toDetail(item)"
                >{{ item.fDescribe }}</div>
                <div
                  v-if="item.params && item.params.attachments"
                  class="thumbnail-list"
                >
                  <el-image
                    v-for="element in item.params.attachments"
                    :key="element.fId"
                    :src="generateImgUrl(element.fFileName)"
                    :preview-src-list="getThumbnailSrcList(item.params.attachments)"
                    class="thumbnail-img"
                  ></el-image>
                </div>
              </div>
              <div
                class="date-province"
                @click="toDetail(item)"
              >
                <span class="item-date">{{ item.fLastUpdateTime }}</span>
                <span class="item-province">
                  <span class="label-province">交货地</span>
                  {{ item.region && item.region.province || '' }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-list">
          <div
            v-for="item in rightList"
            :key="item.fId"
            class="right-item"
          >
            <div
              :style="{backgroundImage: 'url('+item.fPortrait+ ')'}"
              class="avatar-wrap fl"
            >
            </div>
            <div class="info-wra fl">

            </div>
          </div>
        </div>
      </div>

      <div
        v-if="tableList.length===0"
        class="result-empty-tips"
      >
        暂无数据...
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
  async asyncData({ query, req }) {
    try {
      const { data } = await apiMarketTraderList({
        supplyNum: 1,
        supplyPageNum: 10,
        reveal: 0 })
      const tableList = data.other && data.other.supplys && data.other.supplys.rows || []
      return {
        tableList
      }
    } catch (error) {
      console.error(error)
    }
  },
  data() {
    return {
      locationList: [{ name: '市场供求', path: '' }],
      total: 0,
      pageNum: 1,
      pageSize: 10,
      listQuery: {
        supplyNum: 1,
        supplyPageNum: 10,
        reveal: 0
      },
      listQueryCache: {},
      tableList: [],
      rightList: [],
      currentTabIndex: 0,
      info: {},
      tabName: 'seller'
    }
  },
  computed: {},
  created() {
    this.getFilterList()
    this.getTableList()
  },
  mounted() {
  },
  methods: {
    async getFilterList() {
      const { data } = await apiMarketFilterList()
      const info = data.other
      this.info = info
    },
    async getTableList() {
      try {
        const { data } = await apiMarketTraderList(this.listQuery)
        if (this.tabName === 'seller') {
          this.tableList = data.other && data.other.supplys && data.other.supplys.rows || []
          this.total = data.other && data.other.supplys && data.other.supplys.total || 0
        } else {
          this.tableList = data.other && data.other.demands && data.other.demands.rows || []
          this.total = data.other && data.other.demands && data.other.demands.total || 0
        }
      } catch (error) {
        console.error(error)
      }
    },
    getThumbnailSrcList(list) {
      return list.map(item => this.generateImgUrl(item.fFileName))
    },
    togglePagination() {
      console.log('this.pageNum', this.pageNum)
      console.log('this.pageNum', this.pageNum)
      if (this.tabName === 'seller') {
        this.listQuery.supplyNum = this.pageNum
        this.listQuery.supplyPageNum = this.pageSize
      } else {
        this.listQuery.demandNum = this.pageNum
        this.listQuery.demandPageNum = this.pageSize
      }
      this.getTableList()
    },
    toggleTab() {
      console.log(this.tabName)
      const query = this.listQueryCache[this.tabName] || {}
      this.translateQueryParams(query)
      this.getTableList()
    },
    toDetail(item) {
    //   // 这个方法是之前的人写的  要跳转到自己的页面
      const reveal = this.tabName === 'seller' ? 0 : 1
      const provinceId = this.listQuery.provinceId ? this.listQuery.provinceId : ''
      const q = {
        fId: item.fId,
        reveal: reveal, // 0是供求，1是求购
        fName: item.fName,
        province: provinceId
      }
      this.$router.push({
        path: '/SupplyDemandDetail',
        query: {
          q: encodeURI(JSON.stringify(q))
        }
      })
    },
    translateQueryParams(query) {
      console.log(this.tabName)
      // proChainId   proTypeId 为 0 的情况是自己伪造的  是属于不限的情况
      this.listQuery = {}
      if (this.tabName === 'seller') {
        this.listQuery.supplyPageNum = this.pageSize
        this.listQuery.supplyNum = this.pageNum
        this.listQuery.supplyProvinceId = query.provinceId
        this.listQuery.supplyDescribe = query.topic
        this.listQuery.supplyfirstMatId = query.proChainId === 0 ? null : query.proChainId
        this.listQuery.supplysecondMatId = query.proTypeId === 0 ? null : query.proTypeId
        this.listQuery.sCategory = query.proName === '不限' ? '' : query.proName
        this.listQuery.reveal = 0
      } else {
        this.listQuery.demandNum = this.pageSize
        this.listQuery.demandPageNum = this.pageNum
        this.listQuery.demandProvinceId = query.provinceId
        this.listQuery.demandDescribe = query.topic
        this.listQuery.demandfirstMatId = query.proChainId === 0 ? null : query.proChainId
        this.listQuery.demandsecondMatId = query.proTypeId === 0 ? null : query.proTypeId
        this.listQuery.dCategory = query.proName === '不限' ? '' : query.proName
        this.listQuery.reveal = 1
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
.page-wrap {
  background: #fff;
  .tabs-wrap {
    padding: 0 20px;
    margin: 0 auto;
    border: 1px solid #d3e9fe;
  }
  ::v-deep.el-table {
    .btn-hasCollected {
      color: #fb7e12;
    }
  }
  .result-wrap {
    margin-top: 20px;
    .main-list {
      width: 100%;
      border: 1px solid #d3e9fe;
      .main-list-head {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        font-size: 16px;
        font-weight: 700;
        color: #333;
        border-bottom: 1px solid #efefef;
        .color-blue {
          color: #1588fc;
        }
      }
      .main-list-body {
        padding: 0 20px;
        .main-list-item {
          position: relative;
          padding: 20px 0;
          border-bottom: 1px solid #efefef;
          cursor: pointer;
          .avatar-wrap {
            width: 70px;
            height: 70px;
            margin-right: 20px;
            border-radius: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            overflow: hidden;
          }
          .info-wrap {
            width: 900px;
            .item-company-name {
              font-size: 16px;
              font-weight: 700;
              color: #333;
            }
            .item-telephone {
              font-size: 14px;
              color: #999;
              margin: 10px 0;
            }
            .item-industry-attribute {
              .item-material {
                padding: 0 6px;
                border-radius: 8px;
                border: 1px solid #77c1ff;
                font-size: 12px;
                color: #34a0fa;
              }
              .item-industry {
                font-size: 12px;
                color: #666;
                margin-left: 10px;
              }
            }
            .item-message {
              width: 100%;
              margin-top: 15px;
              line-height: 1.5em;
              padding-top: 14px;
              border-top: 1px dotted #efefef;
              font-size: 14px;
              color: #333;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
          }
          .date-province {
            position: absolute;
            top: 20px;
            right: 20px;
            .item-date {
              font-size: 14px;
              color: #999;
              margin-right: 30px;
            }
            .item-province {
              font-size: 14px;
              .label-province {
                color: #999;
              }
              color: #ff7609;
            }
          }
          .thumbnail-list {
            .thumbnail-img {
              width: 100px;
              height: 100px;
              margin-right: 20px;
            }
          }
        }
      }
    }
    .right-list {
    }
  }
  .result-empty-tips {
    padding: 40px;
    text-align: center;
    color: #888;
  }
  .pagination {
    text-align: center;
    padding: 40px 0 60px;
  }
}
</style>
