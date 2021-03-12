<template>
  <div class="block" v-if="showBlock">

      click me 
  </div>
</template>

<script>
export default {
props:['delay'],
data(){
    return 
    {
        showBlock:false
        timer:null
        reactiontime: 0
    }
},
mounted(){
setTimeout(() => {
    this.showBlock= true
   
}, this.delay)

},
methods:{
starttimer(){
this.timer = setInterval(() => {
   this.reactiontime +=10 
}, 10)
},
stoptimer() {
clearInterval(this.timer)
}

}

}
</script>

<style>

</style>