<template lang="">
   <button class='todo-button' @click="onClick">
       <i :class="icon"></i>
   </button> 
</template>
<script>
export default {
    name: 'todo-button',
    props: {
        icon: String
    },
    methods: {
        onClick() {
            this.$emit('touch')
        }
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