<template>
  <div>
   <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for循环的话，一定要使用key -->
				<mt-swipe-item v-for="item in lunbotuList" :key="item.url"> 
          <img :src="item.img" alt="" :class="{'full':isfull }">
        </mt-swipe-item>
		</mt-swipe>
  </div>
</template>
<script>
export default {
  props:["lunbotuList","isfull"]
}
</script>

<style lang="scss" scoped>
// 轮播图样式
.mint-swipe {
  height: 200px;
  background-color: pink;
  .mint-swipe-item{
    text-align: center;
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
    // width: 100%;
    height: 100%;
  }
}
.full{
  width: 100%;
}
</style>