<template>
  <div class="newsinfo-details">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsInfo.date}}</span>
      <span>点击：{{newsInfo.click}}次</span>
    </p>
    <hr>
    <div class="content">{{newsInfo.zhaiyao}}</div>
    <!-- 评论区子组件区域 -->
    <comment-box :id = "this.id"></comment-box>
  </div>
</template>

<script>
// 引入子组件
import  comment from './commentDetail.vue'

export default {
  data() {
    return {
      id: this.$route.params.id, //将URL地址从传递过来的id值上挂载到data上，方便以后调用
      newsInfo: {} //新闻对象
    }
  },
  created(){
    this.getNewsInfo();
  },
  methods: {
     getNewsInfo(){
      this.$http.get('/api/getnewslist/'+ this.$route.params.id ).then(res =>{
        if(res.status === 200 ){
          this.newsInfo = res.body.message[0]
          console.log(res)
          console.log(res.status)
        } else {
          Toast("加载新闻资讯信息失败......")
        }
      })
    }
  },
  components: { //用来注册子组件
    "comment-box": comment
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-details{
  padding: 0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle{
    font-size: 13px;
    color: royalblue;
    display: flex;
    justify-content: space-between;
  }
  .content{

  }
}
</style>