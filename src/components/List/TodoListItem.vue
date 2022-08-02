<template lang="">
    <div class="todo-list-item">
        <todo-check-button  
            @toggle='onToggle' 
            :checked="item.isChecked"
        />
        <todo-input-item 
            class="input"
            :class='{ complete: item.isChecked }' 
            :value="item.title"
            
            @change='onChange' 
            @keyup.enter="onReset"
        />
        <todo-button 
            path="fa-solid fa-delete-left"
            @click="onDelete"
        />
    </div>    
</template>
<script>
import TodoCheckButton from '../button/TodoCheckButton.vue'
import TodoButton from '../button/TodoButton.vue'
import TodoInputItem from '../input/TodoInputItem.vue'


export default {
    
    name: 'todo-list-item',
    components: {        
        TodoInputItem,
        TodoButton,
        TodoCheckButton,
    },
    data() {
        return {
            text: ''
        }
    },
    props: {
        item: {
            type: Object
        },
        pop: {
            type: String,
            default: 'todosPop'
        },
        change: {
            type: String,
            default: 'todosChange'
        }
    }, 
    methods: {
        onChange(emit) {
            if (typeof emit !== 'string')
                return

            this.text = emit
        },

        onDelete() {
            this.$store.commit(this.pop, this.item)
        },
        onReset() {
            this.$store.commit(this.change, {
                title: this.text,
                key: this.item.key      
            })
        },
        onToggle(emit) {
            this.item.isChecked = emit
            
            this.$store.commit(this.change, {
                isChecked: emit,
                key: this.item.key      
            })
        },

    },    
}
</script>
<style lang="scss">
    .todo-list-item {
        display: flex;  
        justify-content: center;
        align-items: center;

        height: 20px;
        margin: 5px 0;

        .complete {
            text-decoration: line-through;
        }
    }

</style>