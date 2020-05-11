export const generateImgUrl = (fileName) => {
  return process.env.BASE_IMG_URL + fileName
}

export const generateNoNullableObject = (obj) => {
  const target = {}
  Object.keys(obj).forEach((key) => {
    if (obj[key] || obj[key] === 0) {
      target[key] = obj[key]
    }
  })
  return target
}
