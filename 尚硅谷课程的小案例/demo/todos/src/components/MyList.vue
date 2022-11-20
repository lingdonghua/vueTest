<template>
  <div>
    <ul class="todo-main">
        <MyTodo v-for="item in list" :key="item.id" :name="item.name" :status="item.status" :id="item.id" :changer="change" :deletes1="deletes"></MyTodo>
    </ul>
  </div>
</template>

<script>
import MyTodo from '@/components/MyTodo.vue'
export default {
  props:['list','change','deletes'],
  components:{
    MyTodo
  }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>