<template>
  <div class="app-container">
    <!-- 顶部Header区域 -->
    <mt-header fixed title="代码之家-Vue商城"></mt-header>

    <!-- 中间的路由 router-view区域 -->
		<transition >
			<router-view>
			
			</router-view>
		</transition>
    

    <!-- 底部区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " href="#tabbar" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
      <router-link class="mui-tab-item" href="#tabbar-with-contact" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" href="#tabbar-with-chat" to="/shopcar">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" href="#tabbar-with-map" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.app-container{
	padding-top: 40px;
}

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
</style>
