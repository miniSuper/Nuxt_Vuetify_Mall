<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <div
          :style="{backgroundImage: 'url(' + slide.url + ')'}"
          class="carousel-item"
        >
        </div>
      </v-carousel-item>
    </v-carousel>
    <h1
      v-for="(item,index) in 200"
      :key="index"
    >这是是首页</h1>
  </div>
</template>
<script>
export default {
  name: 'ComponentName',
  data () {
    return {
      slides: [
        {
          url: 'images/banner_pc.png'
        },
        {
          url: 'images/banner_pc.png'
        },
        {
          url: 'images/banner_pc.png'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.v-carousel {
  .v-carousel__item {
    .carousel-item {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }
}
</style>
