<template>
  <div class="home-container">
  <div>
    <van-nav-bar title="黑马头条" :fixed='true'/>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :disabled="finished">
      <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad">

      <Article v-for="item in articleList" :key="item.id"
      :title="item.title"
      :author="item.aut_name"
      :date="item.pubdate"
      :comment="item.comm_coun"
      :cover="item.cover">
    </Article>
      </van-list>
</van-pull-refresh>
  </div>
</div>
</template>

<script>
import { getArticleListAPI } from '@/api/ariticle'
import Article from '@/components/Article.vue'
export default {
  components: {
    Article
  },
  created () {
    this.initArticle()
  },
  methods: {
    async initArticle (isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limti)
      if (isRefresh) {
        this.articleList = [...res, ...this.articleList]
      } else {
        this.articleList = [...this.articleList, ...res]
      }
      this.loading = false
      this.refreshing = false
      // 当没有数据了，禁用请求
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 控制上拉获取数据
    onLoad () {
      this.page++
      this.initArticle()
    },
    // 控制下拉获取数据函数
    onRefresh () {
      this.page++
      this.initArticle(true)
    }
  },
  name: 'Home',
  data () {
    return {
      // 页数
      page: 1,
      // 每页显示的条数
      limti: 10,
      // 文章数组
      articleList: [],
      // 控制上拉获取列表是否生效，false生效，true不生效
      loading: true,
      // 未false时，下拉不请求，且显示无数据信息
      finished: false,
      // 上拉获取刷新数据
      refreshing: true
    }
  }
}
</script>

<style lang="less" scoped>
   .home-container {
    padding: 46px 0 50px 0;
    .van-nav-bar {
      background-color: #007bff;
      /deep/ .van-nav-bar__title{
        color:white;
        font-size: 12px;
    }
    }

   }
</style>
