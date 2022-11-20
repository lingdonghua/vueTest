<template>
  <div class="app-container">
    <Header title="购物车"></Header>
    <P>{{ this.total }}</P>
    <Goods v-for="item in list" :key="item.id" :title="item.goods_name"
     :pic="item.goods_img" :status="item.goods_state" :price="item.goods_price" :id="item.id" :count="item.goods_count" @chang-status="changStatus"></Goods>
    <Footer :footerStatus="this.checkAll" :sum="this.sumForPrice"  @AllChoose="all_Choose"></Footer>
  </div>

</template>

<script>
//导入组件
import Header from '@/components/Header/Header'
import axios from 'axios'
import Goods from '@/components/Goods/Goods'
import Footer from '@/components/Footer/Footer'
import bus from '@/components/eventBus'
import { totalmem } from 'os'
export default {
//计算属性
computed:{
  //全选的判断，返回布尔值
  checkAll(){
    return this.list.every(item=>item.goods_state===true)
  },
  //计算总值，传回去给footer
  sumForPrice(){
     return this.list.filter((item)=>item.goods_state===true).reduce((val,item)=>{return val+=item.goods_price*item.goods_count},0)  
  },
  //结算选中数量，传回去给footer
  total(){
    return this.list.filter((item)=>item.goods_state===true).reduce((val,item)=>{return val+=item.goods_count},0)
  }
},
created(){
   this.initCartList()
   //接收Counter传来的数量（eventBus）
   bus.$on('share',(val)=>{
    this.list.some((item)=>{
      if(item.id==val.id){
        item.goods_count=val.num
        return true
      }
    })
   })
  },
methods:{
     async initCartList(){
        const { data:res }= await axios.get('https://www.escook.cn/api/cart')
        console.log(res);
        this.list=res.list
     },
    changStatus(val){
      this.list.some((item)=>{
        if(item.id==val.id){
          item.goods_state=val.status
          return true
        }
      })
      console.log(val);
    },
    all_Choose(val){
       if(val===true){
        this.list.forEach((item)=>{
              item.goods_state=true
        })
       }else{
        this.list.forEach((item)=>{
              item.goods_state=false
        })
       }
    }
},
data(){
    return {
      list:[]
    }
},
components:{
    Header,
    Goods,
    Footer,
},

}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
