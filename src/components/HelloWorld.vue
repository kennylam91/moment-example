<template>
  <div>
    {{$moment(now).format('dddd, [Ngay] Do MMMM [Nam] YYYY')}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      now: this.$moment()
    }
  },
  filters:{
  }
}
</script>