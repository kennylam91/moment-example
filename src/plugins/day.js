import dayjs from 'dayjs'
import * as locale from 'dayjs/locale/vi'

dayjs.locale(locale)
export default function install (Vue) {
  Object.defineProperties(Vue.prototype, {
      $dayjs: {
          get() {
              return dayjs;
          }
      }
  })
}