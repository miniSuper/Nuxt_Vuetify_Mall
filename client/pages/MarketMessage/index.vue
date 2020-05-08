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
              v-for="(item, index) in tabList"
              :key="index"
              @click="toggleTab(index)"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
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
          :page.sync="listQuery.page"
          :limit.sync="listQuery.num"
          class="pagination"
          @pagination="getMainList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { headerList, navList } from '@/config/data'
import Pagination from '@/components/Pagination'
import { apiMarketNewsList } from '@/api'
export default {
  name: 'MarketMessage',
  components: { Pagination },
  data() {
    return {
      headerList,
      navList,
      searchWord: '',
      tabList: [
        {
          name: '有料资讯'
        },
        {
          name: '行业分析'
        },
        {
          name: '行业热点'
        }
      ],
      newsList: [],
      currentTabIndex: 0,
      total: 0,
      listQuery: {
        page: 1,
        num: 10,
        fCategoryId: ''
      }
    }
  },
  created() {
    this.getMainList()
  },
  methods: {
    async getMainList() {
      try {
        this.listQuery.fCategoryId = '9308860b471946b89a8823decd76d4a8'
        const { data } = await apiMarketNewsList(this.listQuery)
        this.newsList = data.other.informationList
      } catch (error) {
        console.error(error)
        // this.$commonFunc.alertError(error)
      }
    },
    toggleTab(index) {
      this.getMainList()
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
