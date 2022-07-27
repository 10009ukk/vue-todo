<template lang="">
   <button @click="onClick">
       <svg class='icon' xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
           <path :d="d"/>
       </svg>
   </button> 
   <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"/>
   </svg> -->

    <todo-option 
        v-if="isClick"
    />

</template>
<script>
import TodoOption from '../option/TodoOption.vue'


export default {
    name: 'todo-button',
    components: {
        TodoOption
    },
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
    data() {
        return {
            isClick: false
        }
    },
    methods: {
        onClick() {
            this.isClick = !this.isClick
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