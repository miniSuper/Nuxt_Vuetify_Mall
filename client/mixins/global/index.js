import { generateImgUrl, generateNoNullableObject } from '@/utils'
export default {
  data() {
    return {
      domain: process.env.DOMAIN
    }
  },
  methods: {
    generateImgUrl,
    generateNoNullableObject
  }
}
