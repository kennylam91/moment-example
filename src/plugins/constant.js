const constObj = {
  NumberOne: 1
};
export default function install (Vue) {
  Object.defineProperties(Vue.prototype, {
      $const: {
          get() {
              return constObj;
          }
      }
  })
}

