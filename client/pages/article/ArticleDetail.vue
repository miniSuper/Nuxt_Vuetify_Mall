<template>
  <div>
    <div class="pc-center">
      <h1>这里是文章详情</h1>
      <h1>文章id</h1>
      <h2>{{ $route.query.id }}</h2>
    </div>
  </div>
</template>

<script>
import { apiFaqDetail } from '@/api'
export default {
  name: 'ArticleDetail',
  async asyncData({ query, req }) {
    console.log(query)
    // if (req) {
    //   const { data } = await apiFaqDetail(this.queryParams)
    //   return {
    //     data
    //   }
    // }
  },
  data() {
    return {
      queryParams: {}
    }
  },
  created() {
    this.queryParams = this.$route.query
    console.log(this.queryParams)
  },
  methods: {
    async getArticleDetail() {
      const { data } = await apiFaqDetail(this.queryParams)
      console.log(data)
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
