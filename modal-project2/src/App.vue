<template>
<h1>{{ title }}</h1>
<teleport  to=".noha" v-if="showmodal">
  
  <Modal :header="header" :text="text" theme="sale" @close="togglemodal"> 
  <template v-slot:links>
<a href="">sign up</a>
<a href=""> more info </a>


  </template>
  
  <h2>slotdefault</h2>
  <p>solt default in details</p>
  
  </Modal>
  
  </teleport>
  <div v-if="showmodal2">
  
  <Modal :header="header" :text="text" theme="" @close="togglemodal2"> 
  <template v-slot:links>

  </template>
  
  <h2>newsletter</h2>
  <p>solt default in details</p>
  
  </Modal>
  
  </div>
  <button @click="togglemodal">Open Model</button>
   <button @click="togglemodal2">Open Model2</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data(){
return {
  title :'Vue Project  noha:)',
  header:'header for modal',
  text:'text in model',
  showmodal:false,
  showmodal2:false
}
  },
  methods:{
togglemodal(){
  this.showmodal=!this.showmodal
},togglemodal2(){
  this.showmodal2=!this.showmodal2
}
  },
  components: {
    Modal
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
