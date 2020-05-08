<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
const COMPONENT_NAME = 'scroll'
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'
export default {
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    listenBeforeScroll: {
      type: Boolean,
      default: false
    },
    listenScrollEnd: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: DIRECTION_V
    },
    scrollbar: {
      type: null,
      default: true
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    },
    startY: {
      type: Number,
      default: 0
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    freeScroll: {
      type: Boolean,
      default: false
    },
    mouseWheel: {
      type: Boolean,
      default: true
    },
    bounce: {
      type: Boolean,
      default: true
    },
    zoom: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    // 有个props属性叫data
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  destroyed() {
    this.$refs.scroll && this.$refs.scroll.destroy()
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      const options = {
        probeType: this.probeType,
        click: this.click,
        scrollY: this.freeScroll || this.direction === DIRECTION_V,
        scrollX: this.freeScroll || this.direction === DIRECTION_H,
        // scrollbar: this.scrollbar,
        scrollbar: {
          fade: false,
          interactive: false // 1.8.0 新增
        },
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad,
        startY: this.startY,
        freeScroll: this.freeScroll,
        mouseWheel: this.mouseWheel,
        bounce: this.bounce,
        zoom: this.zoom
      }
      this.scroll = new BScroll(this.$refs.wrapper, options)

      if (this.listenScroll) {
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
        })
      }

      if (this.listenScrollEnd) {
        this.scroll.on('scrollEnd', pos => {
          this.$emit('scroll-end', pos)
        })
      }

      if (this.listenBeforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScrollStart')
        })
        this.scroll.on('scrollStart', () => {
          this.$emit('scroll-start')
        })
      }

      if (this.pullDownRefresh) {
        this._initPullDownRefresh()
      }

      if (this.pullUpLoad) {
        this._initPullUpLoad()
      }
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      if (arguments[1] >=  this.scroll.maxScrollY && arguments[1] <=  this.scroll.minScrollY ) {
        this.$emit('scroll', { x: arguments[0], y: arguments[1] })
      }else if(arguments[1] <  this.scroll.maxScrollY){
        this.$emit('scroll', { x: arguments[0], y:this.scroll.maxScrollY })
      }else if(arguments[1] >  this.scroll.minScrollY){
         this.$emit('scroll', { x: arguments[0], y:this.scroll.minScrollY })
      }
    },
    autoPullDownRefresh() {
      this.scroll && this.scroll.autoPullDownRefresh()
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    clickItem(e, item) {
      console.log(e)
      this.$emit('click', item)
    },
    destroy() {
      this.scroll.destroy()
    },
    forceUpdate(dirty) {
      if (this.pullDownRefresh && this.isPullingDown) {
        this.isPullingDown = false
        this._reboundPullDown().then(() => {
          this._afterPullDown()
        })
      } else if (this.pullUpLoad && this.isPullUpLoad) {
        this.isPullUpLoad = false
        this.scroll.finishPullUp()
        this.pullUpDirty = dirty
        this.refresh()
      } else {
        this.refresh()
      }
    },
    _initPullDownRefresh() {
      this.scroll.on('pullingDown', () => {
        this.beforePullDown = false
        this.isPullingDown = true
        this.$emit('pullingDown')
      })
      this.scroll.on('scroll', pos => {
        if (!this.pullDownRefresh) {
          return
        }
        if (this.beforePullDown) {
          this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
          this.pullDownStyle = `top:${Math.min(
            pos.y + this.pullDownInitTop,
            10
          )}px`
        } else {
          this.bubbleY = 0
        }
        if (this.isRebounding) {
          this.pullDownStyle = `top:${10 -
            (this.pullDownRefresh.stop - pos.y)}px`
        }
      })
    },
    _initPullUpLoad() {
      this.scroll.on('pullingUp', () => {
        this.isPullUpLoad = true
        this.$emit('pullingUp')
      })
    },
    _reboundPullDown() {
      const { stopTime = 600 } = this.pullDownRefresh
      return new Promise(resolve => {
        setTimeout(() => {
          this.isRebounding = true
          this.scroll.finishPullDown()
          resolve()
        }, stopTime)
      })
    },
    _afterPullDown() {
      setTimeout(() => {
        this.pullDownStyle = `top:${this.pullDownInitTop}px`
        this.beforePullDown = true
        this.isRebounding = false
        this.refresh()
      }, this.scroll.options.bounceTime)
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  position: relative;
}
</style>
