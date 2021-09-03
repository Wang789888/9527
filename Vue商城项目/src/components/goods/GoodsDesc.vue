<template>
  <div class="goodsdesc">
    <h3>{{info.title}}</h3>
    <hr>
    <div class="content">{{info.content}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info:[]
    }
  },
  created(){
    this.getinfo()
  },
  methods: {
    getinfo(){
      this.$http.get('/api/getgoods/'+this.id).then(res=>{
        if (res.status === 200) {
         this.info = res.body.message[0]
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.goodsdesc{
  padding: 4px;
  h3{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: royalblue;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>