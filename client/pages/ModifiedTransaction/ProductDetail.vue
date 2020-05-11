<template>
  <div>
    <LocationBar :location-list="locationList" />
    <div class="product-info">
      <div class="pc-center clearfix">
        <div class="preview-wrap fl">
          <div class="preview">
            <div class="main-img-wrap">
              <img
                :src="generateImgUrl(info.defaultImg.fFileName)"
                class="main-img"
              >
            </div>
            <div class="swiper-img-wrap">
              <img
                src=""
                alt=""
                class="swiper-img"
              >
            </div>
          </div>
        </div>
        <div class="item-info-wrap fl">
          <div class="item-title">【PP增强、增韧、阻燃等系列产品】PP增强、增韧、阻燃等系列产品(牌号)</div>
          <p class="item-field item-industry">
            <span class="label">
              行业方案:
            </span>
            {{ info.product.fProTypeName }}
          </p>
          <p class="item-field item-price">
            <span class="label">
              价格:
            </span>
            {{ info.product.fOfferPrice ? info.product.fOfferPrice: '暂无报价' }}
          </p>
          <p class="item-field item-type">
            <span class="label">
              起批量
            </span>
            ≥0吨（0千克/袋）
          </p>
          <p class="item-field item-weight">
            <span class="label">
              采购模式
            </span>
            <el-tag>货到付款</el-tag>
          </p>
          <p class="item-field item-weight">
            <span class="label">
              采购
            </span>
            <el-input-number
              v-model="orderNum"
              :min="1"
              size="small"
              @change="onNumChange"
            ></el-input-number>
          </p>
          <div class="btn-wrap">
            <el-button
              type="primary"
              size="large"
              plain
            >试料</el-button>
            <el-button
              type="primary"
              size="large"
              plain
            >询价</el-button>
          </div>
        </div>
        <div class="links-wrap">
          <span
            class="link-item un-select"
            @click="onCollect"
          ><i class="el-icon-star-off"></i>收藏</span>
          <span
            v-clipboard:copy="domain+$route.fullPath.slice(1)"
            v-clipboard:success="onCopySuccess"
            class="link-item un-select"
          ><i class="el-icon-link"></i>复制链接</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocationBar from '@/components/LocationBar'
import { apiModifedMaterialDetail, apiModifedMaterialCollect } from '@/api'
export default {
  name: '',
  components: { LocationBar },
  async  asyncData({ query, req }) {
    const productionId = query.id
    const { data } = await apiModifedMaterialDetail({ productionId })
    return {
      info: data.other
    }
  },
  data() {
    return {
      locationList: [{ name: ' 改性料详情页', path: '' }],
      info: {},
      orderNum: {}
    }
  },
  mounted() {
    this.getProductDetail()
  },
  methods: {
    async getProductDetail() {
      const productionId = this.$route.query.id
      const { data } = await apiModifedMaterialDetail({ productionId })
      console.log('info', data.other)
      this.info = data.other
    },
    onNumChange() {

    },
    onCopySuccess(event) {
      this.$message.success('链接已复制')
    },
    async onCollect() {
      const productionId = this.$route.query.id
      const { data } = await apiModifedMaterialCollect({ productionId })
      console.log(data)
    }
  }
}
</script>
<style lang='scss' scoped>
.product-info {
  padding-top: 40px;
  background-color: #fff;
  .pc-center {
    position: relative;
  }
  .preview-wrap {
    box-sizing: border-box;
    width: 450px;
    .preview {
      .main-img-wrap {
        position: relative;
        width: 450px;
        height: 450px;
        overflow: hidden;
        background-color: #fff;
        .main-img {
          position: absolute;
          width: 450px;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      }
      .swiper-img-wrap {
        .swiper-img {
        }
      }
    }
  }
  .item-info-wrap {
    width: 700px;
    box-sizing: border-box;
    margin-left: 50px;
    margin-bottom: 40px;
    .item-title {
      font-size: 18px;
      font-weight: 700;
      color: #333;
      margin-bottom: 20px;
    }
    .item-field {
      margin: 20px 0;
      .label {
        display: inline-block;
        width: 80px;
        font-size: 14px;
        color: #666;
        margin-right: 20px;
        text-align: right;
      }
    }
    .btn-wrap {
      margin-top: 40px;
      padding-top: 40px;
      border-top: 1px solid #efefef;
      .el-button {
        width: 130px;
        background-color: #f3faff;
        border-radius: 4px;
        border: 1px solid #34a0fa;
        color: #1588fc;
      }
    }
  }
  .links-wrap {
    position: absolute;
    top: 50px;
    right: 40px;
    cursor: pointer;
    .link-item {
      margin-left: 20px;
      font-size: 14px;
      color: #333;
    }
  }
}
</style>
