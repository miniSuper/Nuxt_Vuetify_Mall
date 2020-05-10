<template>
  <div class="page-wrap">
    <LocationBar :location-list="locationList" />
    <div class="pc-center">
      <div class="filter-wrap">
        <div class="section-title">改性料交易</div>
        <div class="filter-field-wrap">
          <div class="filter-fileld-row">
            <span class="filter-label">行业方案</span>
            <span class="filter-value">汽车</span>
            <span class="filter-value">家电</span>
            <span class="filter-value">生活用品</span>
            <span class="filter-value">照明</span>
            <span class="filter-value">电动工具</span>
            <span class="filter-value">卫浴</span>
            <span class="filter-value">滚塑制品</span>
            <span class="filter-value">交通建筑</span>
            <span class="row-expand">展开</span>
          </div>
          <div class="filter-fileld-row">
            <span class="filter-label">品名</span>
            <span class="filter-value">PE</span>
            <span class="filter-value">PP</span>
            <span class="filter-value">ABS</span>
            <span class="filter-value">HIPS</span>
            <span class="filter-value">PC</span>
            <span class="filter-value">PA</span>
            <span class="filter-value">PET</span>
            <span class="filter-value">POM</span>
            <span class="filter-value">合金</span>
            <span class="filter-value">PPO</span>
            <span class="filter-value">PPS</span>
            <span class="filter-value">弹性体</span>
            <span class="row-expand">展开</span>
          </div>
        </div>
      </div>
      <div class="select-fields-wrap">
        <span>筛选条件</span>
        <span class="selected-field">生活用品</span>
      </div>
      <el-form
        ref="form"
        :model="listQuery"
        label-width="80px"
        class="clearfix"
      >
        <el-form-item label="品名">
          <el-input
            v-model="listQuery.fProName"
            placeholder="请输入品名"
          ></el-input>
        </el-form-item>
        <el-form-item label="厂商">
          <el-input
            v-model="listQuery.supName"
            placeholder="请输入厂商"
          ></el-input>
        </el-form-item>
        <el-form-item label="牌号">
          <el-input
            v-model="listQuery.fProMark"
            placeholder="请输入牌号"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn-wrap">
          <el-button type="primary">搜索</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
      <!-- <div class="table-wrap"></div> -->
    </div>
  </div>
</template>
<script>
import LocationBar from '@/components/LocationBar'
export default {
  name: 'ModifiedTransaction',
  components: { LocationBar },
  data () {
    return {
      locationList: [{ name: '改性料交易', path: '' }],
      listQuery: {
        fProName: '', // 品名
        supName: '', // 厂商
        fProMark: '' // 牌号
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.filter-wrap {
  width: 1200px;
  box-sizing: border-box;
  padding: 0 20px;
  border: 1px solid #d3e9fe;
  background-color: #fff;
  margin: 0 auto 20px;
  .section-title {
    line-height: 54px;
    font-size: 16px;
    font-weight: 700;
    color: #1588fc;
  }
  .filter-field-wrap {
    padding: 20px 0;
    .filter-fileld-row {
      position: relative;
      height: 40px;
      line-height: 40px;
      .filter-label {
        display: inline-block;
        text-align: right;
        min-width: 70px;
        font-size: 14px;
        font-weight: 700;
        color: #333;
        margin-right: 25px;
      }
      .filter-value {
        font-size: 14px;
        color: #333;
        margin-right: 25px;
        cursor: pointer;
      }
      .row-expand {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
}
::v-deep.el-form {
  .el-form-item {
    float: left;
    width: 300px;
    .el-button {
      width: 100px;
    }
  }
}
</style>
