import moment from 'moment'

export const formatDate = (value, type = 'YYYY/MM/DD HH:mm:ss') => {
  return value ? moment(value).format(type) : '--'
}

export const sliceStr = (str, length = 10) => {
  return str ? (str.length > length ? str.slice(1, length) + '...' : str) : '--'
}

export default {
  formatDate,
  sliceStr
}
