<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time}}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>

    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageindex:1, //默认显示第一页数据
      comments:[],
      msg:''
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      // 获取评论
      this.$http.get("/api/getcomments/"+ this.id +"?pageindex="+this.pageindex).then(res =>{
        if (res.status === 200) {
          // this.comments = res.body.message;
          // 每当获取新评论数据时，不要把老数据清空覆盖，而是应该把老数据和新数据拼接上
          this.comments = this.comments.concat(res.body.message)
        } else {
          Toast("加载评论数据失败...")
        }
      })
    },

    getMore() {
      // 加载更多
      this.pageindex++;
      // 刷新界面，得到最新数据
      this.getComments;
    },
    postComment() {
      // 校验是否为空内容
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空")
      }
      // 发表评论
      // 参数1： 请求的URL地址
      // 参数2： 提交给服务器的数据对象 { content: this.msg }
      // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true }
      this.$http.post('/api/getnewslist/' + this.$route.params.id,{content:this.msg.trim()}).then(function(res){
        if (res.body.status === 0) {
          var cmt = {
            user_name:'匿名用户',
            add_time: data.now(),
            content :this.msg.trim()
          };
          this.comments.unshift(cmt);
          this.msg = "";
        }
      })
    }
  },
  //父组件通过 props 向下传递数据给子组件
  props:["id"]
}
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>