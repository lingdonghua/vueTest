<template>
  <div>
    <section class="jumbotron">
       <h3 class="jumbotron-heading">Search Github Users</h3>
       <div>
         <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;<button @click="getInfo">Search</button>
       </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Search',
  data(){
   return {
      keyword:''
   }
  },
  methods:{
   getInfo(){
      this.$bus.$emit('getData',{isFirst:false,isOnload:true,errMsg:'',userList:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(response=>{
       const userList=response.data.items
       this.$bus.$emit('getData',{isOnload:false,errMsg:'',userList:userList})
      }).catch(err=>{
       this.$bus.$emit('getData',{isOnload:false,errMsg:err.message,userList:[]})
      })
   }
  }

}
</script>

<style>

</style>