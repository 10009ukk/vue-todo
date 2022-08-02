<template lang="">
    <index-layout>
        <div>
            <template v-if='focus'>
                <h1>What is main your focus for today?</h1>
                <todo-input 
                    push='focusChange'
                    placeholder="hahaha..."
                />
            </template>
            <template v-else>
                <h5>TODAY</h5>
                <todo-list-item 
                    :item="item"
                    pop="focusPop"
                    change="focusChange"
                />    
            </template>
        </div>

        <div class="todo-footer">
            <todo-list 
                :items="items" />
            <todo-input 
                class="todo-submit"
                placeholder="New Todo"
            />
        </div>
    </index-layout>
</template>

<script>
import IndexLayout from '@/layouts/index.vue'
import TodoInput from '@/components/input/TodoInput.vue'
import TodoList from '@/components/list/TodoList.vue'
import TodoListItem from '@/components/list/TodoListItem.vue'

export default {
    name: 'todo-view',
    components: {
        IndexLayout,
        TodoInput,
        TodoList,
        TodoListItem,
    },
    computed: {
        items() {
            return this.$store.getters.todosGet
        },
        item() {
            return this.$store.getters.focusGet
        },
        focus() {
            return Object.keys(this.item).length === 0
        }
    },
    methods: {
       
    },

}
</script>
<style lang="scss">

    .todo-footer {
        width: 360px;
        padding: 20px;
        margin: 30px auto;

        text-align: center;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        
        .todo-submit {
            margin-left: -60px;
        }
    }
    
</style>