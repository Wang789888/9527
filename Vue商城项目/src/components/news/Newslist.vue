<template>
  <div>
    <!-- <button @click="getNewsList"></button> -->
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id"> 
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.image_url">
						<div class="mui-media-body">
							<h2>{{item.title}}</h2>
              <p class="mui-ellipsis">
                <span>发表时间：{{item.date}}</span>
                <span>次数：{{ item.click}}次</span>
              </p>
            </div>
					</router-link>
				</li>

			</ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  data() {
    return {
      newsList: []
    }
  },
  created (){
    this.getNewsList();
  },
  methods: {
    getNewsList(){
      this.$http.get('/api/getnewslist').then(res =>{
        if(res.status === 200 ){
          this.newsList = res.body.message
          console.log(res.body.message.id)
          console.log(res)
          // console.log(res.status)
        } else {
          Toast("加载新闻资讯信息失败......")
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.mui-table-view{
  li{
    h1{
      font-size: 14px;
    }
    .mui-ellipsis{
      font-size: 12px;
      display: flex;
      color: blue;
      // justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式
      // space-between 项目位于各行之间留有空白的容器内。
      justify-content: space-between;
    }
  }
  
}
</style>