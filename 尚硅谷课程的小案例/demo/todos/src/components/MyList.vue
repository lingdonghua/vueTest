<template>
  <div>
    <ul class="todo-main">
        <MyTodo v-for="item in list" :key="item.id" :todo="item"></MyTodo>
    </ul>
  </div>
</template>

<script>
import MyTodo from '@/components/MyTodo.vue'
export default {
  props:['list'],
  components:{
    MyTodo
  },
  methods:{
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
button {
  float: left;
  width: 30px;
  height: 30px;
}
</style>