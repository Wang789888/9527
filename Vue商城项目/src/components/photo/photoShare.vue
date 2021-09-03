<template>
  <div>
    <!-- 滑动导航条部分 -->
    <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item ',item.id==0?'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in imgcategor" :key="item.id" @click="getimagesList(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>

      <!-- 图片列表区域 -->
      <div >
        <ul class="photoList">
          <router-link v-for="item in imgcategor" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
            <img v-lazy="item.image_url">
            <div class="info">
              <h1 class="info-title">{{item.title}}</h1>
              <div class="info-body">{{item.zhaiyao}}</div>
            </div>
          </router-link >
      </ul>
      </div>
      
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui'

export default {
  data() {
    return {
      imgcategor:[],
      imagesList:[]
    }
  },
  mounted() {
    // 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created(){
    this.getimgcategor(),
    this.getimagesList(0)   //默认进入页面就请求所有图片列表的数据
  },
  methods: {
    getimgcategor(){
      this.$http.get('/api/getimgcategory').then(res=>{
        console.log(res)
        if (res.status === 200) {
          res.body.message.unshift({title: "全部",id: 0 });
          this.imgcategor = res.body.message;
        }
      })
    },
    getimagesList(id){
      this.$http.get('/api/getimages/' +id).then(res=>{
        if (res.status === 200) {
          this.imagesList = res.body.message;
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
*{
  touch-action: none;
}
.photoList{
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>