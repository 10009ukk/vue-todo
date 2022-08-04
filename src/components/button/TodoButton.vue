<template lang="">
   <button class='todo-button' @click="this.$emit('hit')">
       <i :class="path"></i>
   </button> 
</template>
<script>
export default {
    name: 'todo-button',
    props: {
        path: String
    },
}
</script>
<style lang="scss">
    .todo-button {
        border: none;
        background-color: transparent;
        padding: 10px;

        &:hover {
            cursor: pointer;
        }
    
        i {
            font-size: 15px;
            color: #757575;
        }
    }
    
</style>