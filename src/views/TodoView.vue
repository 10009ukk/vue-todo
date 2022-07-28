<template lang="">
    <index-layout>
        
        <div>
            <h1>What is main your focus for today?</h1>
            <todo-input 
                v-if='Object.keys(item).length === 0' 
                type='focusAll'
            />
            <todo-list-item 
                v-else
                :item="item"
                pop="focusPop"
                change="focusAll"
            />
        </div>
        <hr />
        <div>
            <todo-list :items="items" />
        </div>
        <hr />
        <todo-input />
    </index-layout>
</template>

<script>
import IndexLayout from '@/layouts/index.vue'
import TodoInput from '@/components/form/TodoInput.vue'
import TodoList from '@/components/list/TodoList.vue'
import TodoListItem from '@/components/list/TodoListItem.vue'

export default {
    name: 'todo-view',
    components: {
        IndexLayout,
        TodoInput,
        TodoList,
        TodoListItem
    },
    computed: {
        items() {
            return this.$store.getters.todosGet
        },
        item() {
            return this.$store.getters.focusGet
        }
    },
    methods: {
       
    },

}
</script>
<style lang="">
    
</style>