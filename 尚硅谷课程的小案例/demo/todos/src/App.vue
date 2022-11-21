<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addItem="addItem"></MyHeader>
      <MyList :list="list" :change="getStatus" :deletes="deletes"></MyList>
      <MyFooter 
      :allChoose="all_choose" 
      :getallChoose="getallChoose" 
      :count="countByStatus" 
      :totle="list.length" 
      :clearList="clearList"></MyFooter>
    </div>
  </div>
</div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyList from '@/components/MyList.vue'
import MyFooter from '@/components/MyFooter.vue'
export default {
  name: 'App',
  computed:{
    all_choose(){
      return this.list.every(item=>item.status===true) && this.list.length>0
    },
    //计算选择数
    countByStatus(){
      // var count=0;
      // this.list.forEach((item)=>{
      //    if(item.status===true){
      //     count++
      //    }
      // })
      // return count
      //用es6的reduce方法来统计
      return this.list.reduce((pre,item)=> pre+ (item.status===true? 1 : 0 ),0)

    }

  },
  data(){
    return {
      list:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  watch:{
    list:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  components:{
    MyHeader,
    MyList,
    MyFooter
  },
  methods:{
    addItem(x){
       this.list.unshift(x)
    },
    //得到todos的最新状态，实时改变
    getStatus(id){
       this.list.forEach((item)=>{
        if(item.id===id){
          item.status=!item.status
        }
       })

    },
    //全选按钮的操作
    getallChoose(newStatus){
      this.list.filter(item=>item.status=newStatus)
    },
    //清空列表,传给footer
    clearList(){
      this.list=this.list.filter(item=>item.status===false)
    },
    //删除某个选项
    deletes(id){
      this.list=this.list.filter(item=>item.id!==id)
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
