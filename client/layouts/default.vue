<template>
  <v-app class="default-layout">
    <Header />
    <TopNav />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
    <Login />
  </v-app>
</template>

<script>
import TopNav from '@/components/layout/TopNav'
import Header from '@/components/layout/Header'
import SideBar from '@/components/layout/SideBar'
import Footer from '@/components/layout/Footer'
import Login from '@/components/layout/Login'

export default {
  components: { TopNav, Header, SideBar, Footer, Login },
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  data: () => ({
  }),
  methods: {
    toggleRoute(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
.bar-logo-img {
  height: 32px;
}
.btn-group {
  .v-btn {
    margin-right: 20px;
  }
}
</style>
