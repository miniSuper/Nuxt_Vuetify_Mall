export default {
  methods: {
    formValidate(name) {
      return new Promise((resolve) => {
        this.$refs[name].validate(async (valid, fail) => {
          if (valid) {
            resolve(true)
          } else {
            console.log(fail)
            const message = Object.keys(fail).map((key) => {
              return fail[key][0].message
            })
            this.$message({
              message: message[0],
              type: 'error',
              duration: 2000
            })
            resolve(false)
          }
        })
      })
    }
  }
}
