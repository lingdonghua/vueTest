<template>
  <div>
    <li>
          <label>
            <input type="checkbox" :checked="status" @click="setStatus"/>
            <span>{{ name }}</span>
          </label>
          <button class="btn btn-danger" @click="deletes">删除</button>
        </li>
  </div>
</template>

<script>
export default {
   props:['name','status','id','changer','deletes1'],
   data(){
    return {
    }
   },
   methods:{
    setStatus(e){
      // const newStatus=e.target.checked
      this.changer(this.id)
    },
    //删除某个选项
    deletes(){
      if(confirm('您确定删除吗？'))
       this.deletes1(this.id)
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