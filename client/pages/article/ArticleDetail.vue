<template>
  <div class="page-wrap">
    <div class="pc-center">
      <h1 class="title">{{ ctx.fTitle }}</h1>
      <div
        class="content"
        v-html="richText"
      ></div>
    </div>
  </div>
</template>

<script>
import { apiFaqDetail } from '@/api'
export default {
  name: 'ArticleDetail',
  async asyncData({ query, req }) {
    if (req) {
      const { data } = await apiFaqDetail({ id: query.id })
      return {
        richText: data.other.fContent,
        ctx: data.other
      }
    }
  },
  data() {
    return {
      queryParams: {},
      richText: '',
      ctx: {}
    }
  },
  created() {
    this.queryParams = this.$route.query
  },
  mounted() {
    this.getArticleDetail()
  },
  methods: {
    async getArticleDetail() {
      const { data } = await apiFaqDetail({ id: this.queryParams.id })
      console.log(data)
    }
  }
}
</script>
<style lang='scss' scoped>
.page-wrap {
  margin-top: 20px;
  padding: 20px 40px;
  text-align: center;
  margin-bottom: 60px;
  .pc-center {
    box-shadow: 0 0 20px #e0e0e0;
    background-color: #fff;
  }
  .title {
    padding: 20px 0;
    font-size: 24px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    border-bottom: 1px solid #efefef;
  }
  .content {
    padding: 40px 0;
    text-align: center;
    ::v-deep img {
      width: 800px;
    }
  }
}
</style>
