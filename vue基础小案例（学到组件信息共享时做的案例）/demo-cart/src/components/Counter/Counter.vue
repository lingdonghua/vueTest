<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="subCount">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ num }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="addCount">+</button>
  </div>
</template>

<script>
import bus from '@/components/eventBus'
export default {
  props:{
    num:{
      default:1,
      type:Number
    },
    id:{
      required:true,
      type:Number
    }
  },
  methods:{
    addCount(){
      const obj={id:this.id,num:this.num+1}
      //把最新数据通过eventBus传给App.vue
      bus.$emit('share',obj)
    },
    subCount(){
      if(this.num===0){
        return 
      }
      const obj={id:this.id,num:this.num-1}
      //把最新数据通过eventBus传给App.vue
      bus.$emit('share',obj)
    }
  }
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
