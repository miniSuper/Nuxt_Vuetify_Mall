<template>
  <div class="page-wrap">
    <div class="location-bar">
      <div class="pc-center">
        <span class="location-title">当前位置：</span>
        <span
          class="location-home un-select"
          @click="$commonFunc.toHomePage(false)"
        >首页</span>
        <span class="location-arrow"> > </span>
        <span class="location-current un-select">行情资讯</span>
      </div>
    </div>
    <div class="search grey-glass">
      <div class="search-slogan">用心服务 成就美好</div>
      <div class="search-bar-wrap">
        <el-input
          v-model="searchWord"
          placeholder="请输入搜索的问题或关键字"
          @click="handleSearch"
          @keyup.enter.native="handleSearch"
        />
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <div class="news-list-wrap">
      <div class="pc-center clearfix">
        <v-list>
          <v-list-item-group v-model="currentTabIndex">
            <v-list-item
              v-for="(item,index) in tabList"
              :key="index"
              :data-index="index"
              @click="toggleTab(item,index)"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.fTitle"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <el-table
          :data="newsList"
          class="news-list"
        >
          <el-table-column
            prop="fTitle"
            label="标题"
          >
          </el-table-column>
          <el-table-column
            prop="fUpdateTime"
            width="200"
            label="更新时间"
            sortable
          >
          </el-table-column>
        </el-table>
      </div>
      <div class="pc-center">
        <Pagination
          v-show="total>0"
          :total="total"
          :page.sync="listQuery.num"
          :limit.sync="listQuery.page"
          class="pagination"
          @pagination="togglePagination"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { headerList, navList } from '@/config/data'
import Pagination from '@/components/Pagination'
import { apiMarketNewsList, apiMarketNewsTypeList } from '@/api'
export default {
  name: 'MarketMessage',
  components: { Pagination },
  async asyncData({ req, query }) {
    if (req) {
      const resType = await apiMarketNewsTypeList({ num: 0, page: 10 })
      const tabList = resType.data && resType.data.other && resType.data.other.infCategoryList
      const id = Array.isArray(tabList) && tabList[0] && tabList[0].fCategoryId
      const { fCategoryId = id, num = 1, page = 10 } = query
      const resNews = await apiMarketNewsList({ fCategoryId, num, page })
      const newsList = resNews.data && resNews.data.other && resNews.data.other.informationList
      let total = resNews.data && resNews.data.other && resNews.data.other.pages
      if (typeof total === 'number') {
        total = total * 10
      }
      return {
        tabList, newsList, total, fCategoryId, num, page
      }
    }
  },
  data() {
    return {
      headerList,
      navList,
      searchWord: '',
      tabList: [],
      newsList: [],
      currentTabIndex: 0,
      total: 0,
      prevTabIndex: 0,
      listQuery: {
        page: 10, // 你就理解成pageSize
        num: 1, // 你就理解成currentNum
        fCategoryId: ''
      },
      paginCache: []
    }
  },
  created() {
    this.listQuery.fCategoryId = this.fCategoryId
    this.listQuery.num = this.num
    this.listQuery.page = this.page
  },
  mounted() {
    this.getPageCache()
  },
  methods: {
    async getTableList() {
      try {
        const { data } = await apiMarketNewsList(this.listQuery)
        this.newsList = data.other && data.other.informationList
        this.total = data.other && data.other.pages && data.other.pages * this.listQuery.page
        return data.other && data.other.informationList
      } catch (error) {
        console.error(error)
        return Promise.reject(error)
        // this.$commonFunc.alertError(error)
      }
    },
    async getTabList() {
      try {
        const { data } = await apiMarketNewsTypeList({ num: 0, page: 10 })
        console.log(data)
        this.tabList = data.other.infCategoryList
      } catch (error) {
        console.error(error)
        // this.$commonFunc.alertError(error)
      }
    },
    getPageCache() {
      this.tabList.forEach(element => {
        this.paginCache.push({ page: 10, num: 1 })
      })
    },
    setPageCache(index) {
      const { page, num } = this.listQuery
      this.paginCache[index].page = page
      this.paginCache[index].num = num
    },
    getListQueryFromPageCache(index) {
      const { page, num } = this.paginCache[index]
      this.total = page * num
      this.$set(this.listQuery, 'page', page)
      this.$set(this.listQuery, 'num', num)
    },
    async toggleTab(item, currentTabIndex) {
      // 保存当前tab对应的page和num
      this.setPageCache(this.prevTabIndex)
      // 设置当前listQuery的id参数
      this.listQuery.fCategoryId = item.fCategoryId
      // 取出将要去的tab对应的 page num
      this.getListQueryFromPageCache(currentTabIndex)
      // 发起请求
      await this.getTableList()
      // 请求结束后  将prevTabIndex 设置为当前的tabIndex
      this.prevTabIndex = currentTabIndex
    },
    togglePagination(e) {
      this.getTableList()
      this.$router.push({
        path: '/MarketMessage',
        query: {
          num: e.page,
          page: e.limit
        }
      })
    },
    handleSearch() {
      console.log(this.searchWord)
    }
  }
}
</script>
<style lang='scss' scoped>
.page-wrap {
  .location-bar {
    padding: 12px 0;
    .location-title {
      font-size: 14px;
      color: #333;
    }
    .location-home,
    .location-current {
      font-size: 14px;
      color: #666;
      cursor: pointer;
      &:hover {
        color: #1588fc;
      }
    }
  }
  .search {
    position: relative;
    background: url('/images/banner_cooperate.jpg') no-repeat center center;
    background-size: cover;
    padding: 40px 0;

    .search-slogan {
      position: relative;
      font-size: 30px;
      color: #fff;
      font-weight: 700;
      margin-bottom: 15px;
      text-align: center;
    }
    .search-bar-wrap {
      position: relative;
      width: 520px;
      margin: 0 auto;
      .el-input {
        width: 100%;
      }
      .el-button {
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 4px 4px 0;
      }
    }
  }
}
.news-list-wrap {
  padding: 30px 0;
  .v-list {
    float: left;
    width: 220px;
    .v-item-group {
      .v-list-item {
        &.v-list-item--active {
          background-color: #1588fc;
          .v-list-item__title {
            color: #fff;
          }
        }
        .v-list-item__title {
          color: #666;
          text-align: center;
        }
      }
    }
  }
  .news-list {
    float: right;
    width: 960px;
  }
}
.pagination {
  text-align: right;
}
</style>
