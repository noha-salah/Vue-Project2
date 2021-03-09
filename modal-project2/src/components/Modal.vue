
<template>
    
<div id="myModal" class="modal" @click.self="closemodal" >

  <!-- Modal content -->
  <div class="modal-content" :class="{ sale:theme === 'sale' }">

    <p>Some text in the Modal..</p>
    <p>{{ header }}</p>
    <p>{{ text }}</p>
    <slot></slot>
    <slot name="links"></slot>
  </div>

</div>


</template>
<script>
export default{
    props:['header','text','theme'],
    methods:{
closemodal(){
    this.$emit('close')
}

    }
}

</script>
<style>
 /* The Modal (background) */
.modal {
   /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}
.sale{
background-color: rgb(214, 144, 211); /* Fallback color */

}

/* The Close Button */
</style>