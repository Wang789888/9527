<template>
  <div>
    <h3>home</h3>
    <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for循环的话，一定要使用key -->
				<mt-swipe-item v-for="item in lunbotuList" :key="item.url"> 
          <img :src="item.img" alt="" >
        </mt-swipe-item>
			</mt-swipe>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  data() {
    return {
      lunbotuList:[] //保存轮播图的数组
    }
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu(){
      //获取轮播图的方法
      this.$http.get("").then(result =>{
        // console.log(result.body);
        if (result.body.status ===0) {
          //获取轮播图数据成功
          this.lunbotuList = result.body.message;
        } else {
          Toast("加载轮播图失败......")
        }
      })
      
    }
  },
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item{
    &:nth-child(1){
      background-color: palegoldenrod;
    }
    &:nth-child(2){
      background-color: paleturquoise;
    }
    &:nth-child(3){
      background-color: cadetblue;
    }
  }
  img{
    width: 100%;
    height: 100%;
  }
}

</style>