<template lang="">
    <div>
        <h5 :class="{ red: isDiff }">{{ item.key }}</h5>
        <button @click="onDelay">미루기</button>
    </div>
    <div class="todo-list-item">
        <todo-check-button  
            @toggle='onToggle' 
            :checked="item.isChecked"
        />
        <todo-input-item 
            class="input"
            :class='{ 
                complete: item.isChecked,
                red: isDiff            
            }' 
            :value="`${isDiff ? '💣 ' : ''}${item.title}`"
            
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

import { dateDiff, dateAdd } from '@/date-fns'

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
            text: '',
        }
    },
    computed: {
        isDiff() {
            return dateDiff(this.item.key) < 0
        }
    },

    methods: {
        onDelay() {
            const { key } = this.item
            this.item.key = dateAdd(key, 1)
            this.onUpdate({
                key,
            })
        },

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
    .red {
        color: red;
        font-weight: bold;
    }

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