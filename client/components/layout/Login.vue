<template>
  <div>
    <no-ssr>
      <el-dialog
        title="欢迎来到【最有料】"
        :visible.sync="isLoginShow"
        :close-on-click-modal="true"
        :before-close="beforeCloseDialog"
        width="500px"
      >
        <el-form
          :model="form"
          label-position="right"
        >
          <el-form-item>
            <el-input
              v-model="form.phone"
              placeholder="手机号"
            ></el-input>
          </el-form-item>
          <el-form-item class="row-qrcode">
            <el-input
              v-model="form.qrcode"
              placeholder="验证码"
              autocomplete="off"
            ></el-input>
            <el-button
              type="primary"
              class="btn-qrcode"
              plain
            >验证码</el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="btn-login"
              @click="closeLoginDialogAction"
            >登录</el-button>
          </el-form-item>

        </el-form>
      </el-dialog>
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {},
      formLabelWidth: '80'
    }
  },
  computed: {
    ...mapGetters(['isLoginShow'])
  },
  methods: {
    ...mapActions(['closeLoginDialogAction', 'openLoginDialogAction']),
    beforeCloseDialog(done) {
      console.log('close')
      this.closeLoginDialogAction()
      done()
    }
  }
}
</script>
<style lang='scss' scoped>
::v-deep.el-dialog__wrapper {
  .el-dialog {
    padding: 10px 40px;
    box-sizing: border-box;
    .row-qrcode {
      position: relative;
      .btn-qrcode {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
  .btn-login {
    width: 100%;
  }
}
</style>
