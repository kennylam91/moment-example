<template>
  <div>
    {{$const.NumberOne}} <br/>
    {{$moment(now).format('dddd, [Ngay] Do MMMM [Nam] YYYY')}} <br/>
    {{$dayjs(now).format('dddd, [Ngay] DD MMMM [Nam] YYYY')}}
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
      now: ''
    }
  },
  filters:{
  },
  created() {
    this.now = new Date();
    console.log(this.$dayjs(this.now).format('DD/MM/YYYY'));
  },
}
</script>