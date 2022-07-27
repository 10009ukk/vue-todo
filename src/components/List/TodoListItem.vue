<template lang="">
    <todo-hover @hover="onHover">
        {{ item }}
        <todo-check  
            @toggle='onToggle' 
        />
        <todo-input 
            class="input"
            :class='{ complete: item.isChecked }' 
            :value="item.title" 
            @change='onChange' 
        />
        <todo-button 
            v-if="isHover"
            viewBox='0 0 384 512'
            d='M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z'        
        />
    </todo-hover>    
</template>
<script>
import TodoCheck from '../form/TodoCheck.vue'
import TodoInput from '../form/TodoInput.vue'
import TodoButton from '../form/TodoButton.vue'
import TodoHover from '../form/TodoHover.vue'
export default {
    
    name: 'todo-list-item',
    components: {        
        TodoInput,
        TodoButton,
        TodoCheck,
        TodoHover
    },
    props: {
        item: {
            type: Object
        }
    }, 
    data() {
        return {
            isHover: false
        }
    },
    methods: {
        onChange() {
            // 새로 저장이 됨
        },
        onHover(emit) {
            this.isHover = emit
        },
        onToggle(checked) {
            this.item.isChecked = checked
            
            this.$store.commit('todosChange', {
                isChecked: checked,
                key: this.item.key      
            })
        }

    },    
}
</script>
<style lang="scss">

    .complete {
        text-decoration: line-through;
    }

</style>