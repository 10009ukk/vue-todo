<template lang="">
    {{ item.key }}
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
            @keyup.enter="onUpdate({
                title: text,
                key: item.key
            })"
        />
        <todo-button 
            path="fa-solid fa-delete-left"
            @hit="this.$store.commit(remove, item)"
        />
    </div>    
</template>
<script>
import TodoCheckButton from '../button/TodoCheckButton.vue'
import TodoButton from '../button/TodoButton.vue'
import TodoInputItem from '../input/TodoInputItem.vue'

import { dateDiff } from '@/date-fns'

export default {
    
    name: 'todo-list-item',
    components: {        
        TodoInputItem,
        TodoButton,
        TodoCheckButton,
    },
    props: {
        item: {
            type: Object
        },
        remove: {
            type: String,
            default: 'removeTodos'
        },
        update: {
            type: String,
            default: 'updateTodos'
        }
    }, 
    data() {
        return {
            text: ''
        }
    },
    created() {
        const { title, key } = this.item

        if (title.indexOf('💣') === -1 && dateDiff(key) >= 1) {
            this.item.title = '💣' + title
        }
    },
    methods: {
        onChange(emit) {
            if (typeof emit !== 'string')
                return

            this.text = emit
        },
        onUpdate({ title, isChecked, key }) {
            this.$store.commit(this.update, {
                title,
                isChecked,
                key 
            })
        },
        onToggle(emit) {
            this.item.isChecked = emit
            
            this.onUpdate({
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