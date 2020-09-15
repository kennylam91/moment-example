import dayjs from 'dayjs'

dayjs.locale('vi');
export default function install (Vue) {
  Object.defineProperties(Vue.prototype, {
      $dayjs: {
          get() {
              return dayjs;
          }
      }
  })
}