<template>
  <div>
    <ul class="todo-main">
        <!-- <transition-group class="animate__animated animate__bounce animate__backInRight" appear>
          <MyTodo v-for="item in list" :key="item.id" :todo="item"></MyTodo>
        </transition-group> -->
        <div class="animate__animated animate__bounce animate__backInRight">
          <MyTodo v-for="item in list" :key="item.id" :todo="item"></MyTodo>
        </div>

    </ul>
  </div>
</template>

<script>
import 'animate.css'
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
.donhua-enter-active {
  animation: donhua 0.3s linear;
}
.donhua-leave-active {
  animation: donhua 0.3s linear reverse;
}


@keyframes donhua {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0);
  }
}
</style>