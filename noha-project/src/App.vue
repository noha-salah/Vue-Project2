<template>
<h1>Noha Project (try  in rection-timer ) </h1>
<button @click="start">Play </button>
<Block v-if="isplaying"/>
</template>

<script>
import Block from './components/Block.vue'
export default {
  name: 'App',
 data(){
   return {
   isplaying:false,
   delay:null
   }


 },components:{Block},
 methods:{
   start(){
     this.delay=2000+Math.random()*5000
this.isplaying=!this.isplaying

   }

 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
