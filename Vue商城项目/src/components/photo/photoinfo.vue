<template>
  <div class="photoinfo-details">
    <h3 class="title">{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoInfo.date}}</span>
      <span>点击：{{photoInfo.click}}次</span>
    </p>
    <hr>
    <!-- 缩略图部分 -->
    <div class="thumbs">
      <vue-preview :slides="list" @close="handleClose"></vue-preview>
    </div>
    

    <!-- 内容部分 -->
    <div class="content">{{photoInfo.zhaiyao}}</div>

    <!-- 评论子组件 -->
    <comment-box :id="id"></comment-box>
  </div>
</template>

<script>
// 引入子组件
import  comment from '../news/commentDetail.vue'

export default {
  data () {
    return {
      id: this.$route.params.id, 
      photoInfo: [],
      list: []  //定义缩略图数组
    }
  },
  created(){
    this.getPhotoInfo(),
    this.getThumbs()
  },
  methods: {
    getPhotoInfo(){
      this.$http.get('/api/getnewslist/'+ this.id ).then(res =>{
        if(res.status === 200 ){
          this.photoInfo = res.body.message[0];
        }
      })
    },
    getThumbs(){
      this.$http.get('/api/getthumimages/'+ this.id).then(res=>{
        if(res.status === 200 ){
           res.body.message.foreEach(item => {
             item.w = 600;
             item.h = 400; 
           });
           this.list = res.body.message
        }
      })
    }
  },
  component:{
    //用来注册子组件
    "comment-box": comment
  }
}
</script>

<style lang="scss" scoped>
.photoinfo-details{
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
  .thumbs{
    margin: 10px;
    box-shadow: 10px 10px 5px #888888;
  }
}
</style>