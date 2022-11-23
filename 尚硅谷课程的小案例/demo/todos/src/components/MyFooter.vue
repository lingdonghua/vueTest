<template>   
    <div class="todo-footer" v-if="totle">
      <label>
        <input type="checkbox" :checked="allChoose" @click="setAllChoose" />
      </label>
      <span>
        <span>已完成{{ count }}</span> / 全部{{ totle }}
       </span>
    <button class="btn btn-danger" @click="clear" v-if="allChoose">清除已完成任务</button>
    </div>
</template>

<script>
export default {
  props:{
    allChoose:{
      type:Boolean,
      default:false
    },
    // getallChoose:{
    // },
    count:{
      type:Number,
      default:0
    },
    totle:{
      type:Number,
      default:0
    },
    // clearList:{}
    
  },
  data(){
    return {
    }
  },
  methods:{
    setAllChoose(e){
      // this.getallChoose(e.target.checked)
      this.$emit('getallChoose',e.target.checked)
    },
    //清空列表
    clear(){
        // this.clearList()
        this.$emit('clearList')
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>