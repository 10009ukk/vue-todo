<template lang="">
   <button @click="onClick">
       <svg class='icon' xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
           <path :d="d"/>
       </svg>
   </button> 
</template>
<script>
export default {
    name: 'todo-button',
    props: {
        viewBox: {
            type: String,
            default: ''
        },
        d: {
            type: String,
            default: ''
        }
    },
    methods: {
        onClick() {
            this.$emit('touch')
        }
    },
}
</script>
<style lang="scss">
    .icon {
        height: 10px;
        width:  10px;
    }
</style>