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
        <span class="location-current un-select">帮助中心</span>
      </div>
    </div>
    <div class="page-body">
      <div class="pc-center clearfix">
        <v-list>
          <v-list-item-group v-model="currentTabIndex">
            <v-list-item
              v-for="(item, index) in tabList"
              :key="index"
              @click="toggleTab(item.dictSort)"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.dictLabel"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <el-table
          :data="tableList"
          class="table-list"
        >
          <el-table-column
            width="100"
            align="center"
            prop="fSeq"
            label="序号"
          />
          <el-table-column
            prop="fTitle"
            label="标题"
          >
            <template slot-scope="scope">
              <span
                class="link-title"
                @click="toArticleDetail(scope.row)"
              >{{ scope.row.fTitle }}</span>
            </template>
          </el-table-column>
          <el-table-column
            width="100"
            align="center"
            prop="fBrowse"
            label="浏览量"
          />
          <el-table-column
            width="200"
            align="center"
            prop="fUpdateTime"
            label="更新时间"
            sortable
          />
        </el-table>
      </div>
    </div>
    <div class="pc-center">
      <Pagination
        v-show="total>0"
        :total="total"
        :page.sync="listQuery.num"
        :limit.sync="listQuery.page"
        class="pagination"
        @pagination="getFaqList"
      />
    </div>
  </div>
</template>

<script>
import { apiHelpList, apiFaqList } from '@/api'
import Pagination from '@/components/Pagination'
export default {
  name: 'HelpCenter',
  components: { Pagination },
  data() {
    return {
      currentTabIndex: 0,
      currentFaqType: null,
      total: 22,
      tabList: [],
      tableList: [],
      listQuery: {
        page: 10, // 你就理解成pageSize
        num: 1, // 你就理解成currentNum
        type: null
      }
    }
  },
  computed: {},
  mounted() {
    this.getHelpList()
  },
  methods: {
    toggleTab(type) {
      this.currentFaqType = type
      this.getFaqList()
    },
    toArticleDetail(item) {
      const routeUrl = this.$router.resolve({
        path: '/article/ArticleDetail',
        query: {
          id: item.fId
        }
      })
      window.open(routeUrl.href, '_blank')
    },
    async getHelpList() {
      const { data } = await apiHelpList()
      console.log(data)
      this.tabList = data.other.dictDataList
    },
    async getFaqList() {
      const query = Object.assign(this.listQuery, { type: this.currentFaqType })
      const { data } = await apiFaqList(query)
      this.tableList = data.other.faqList
      console.log(data)
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
}
.page-body {
  margin-bottom: 80px;
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
  .table-list {
    float: right;
    width: 960px;
    .link-title {
      color: #606266;
      cursor: pointer;
      &:hover {
        color: #20a0ff;
        text-decoration: underline;
      }
    }
  }
}
.pagination {
  text-align: right;
}
</style>
