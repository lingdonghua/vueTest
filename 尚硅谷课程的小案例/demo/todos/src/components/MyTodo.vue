<template>
  <div>
    <li>
          <label>
            <input type="checkbox" :checked="todo.status" @click="setStatus"/>
            <span v-show="!todo.isEdit">{{ todo.name }}</span>
            <input v-show="todo.isEdit" type="text" ref="editInput" @blur="close" :value="todo.name" @keyup.enter="close">
          </label>
          <button class="btn btn-danger" @click="deletes">删除</button>
          <button class="btn btn-edit" @click="edit">编辑</button>

        </li>
  </div>
</template>

<script>
export default {
  //  props:['name','status','id'],
   props:['todo'],

   data(){
    return {
    }
   },
   methods:{
    setStatus(e){
      // const newStatus=e.target.checked
      // this.changer(this.id)
      this.$bus.$emit('getStatus',this.todo.id)
    },
    //删除某个选项
    deletes(){
      if(confirm('您确定删除吗？'))
      //  this.deletes1(this.id)
      this.$bus.$emit('deletes',this.todo.id)
    },
    //编辑内容
    edit()
    {
      //判断todo是否有isEdit属性，有就不用$set了
      if(!this.todo.hasOwnProperty('idEdit'))
         this.$set(this.todo,'isEdit',true)
      else
         this.todo.isEdit=true
      this.$nextTick(function(){
        this.$refs.editInput.focus()
      })
    },
    //失去焦点关闭输入框
    close(){
      if(this.$refs.editInput.value.trim()===''){
        this.$refs.editInput.value=this.todo.name
        return alert("输入不能为空")
      }
      
      this.todo.isEdit=false
      this.todo.name=this.$refs.editInput.value
    }
   }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:hover button{
  display: block;

}

li:hover {
  background-color: #dcdcdc;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>