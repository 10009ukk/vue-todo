<template lang="">
    <index-layout>
        <div class="todo-header">
            <todo-clock />     
            <todo-weather />
        </div>

        <div>
            <template v-if='Object.keys(item).length === 0'>
                <h1>What is main your focus for today?</h1>
                <todo-input 
                    type='focusAll'
                    placeholder="hahaha..."
                />
            </template>
            <template v-else>
                <h5>TODAY</h5>
                <todo-list-item 
                    :item="item"
                    pop="focusPop"
                    change="focusAll"
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
import TodoInput from '@/components/form/TodoInput.vue'
import TodoList from '@/components/list/TodoList.vue'
import TodoListItem from '@/components/list/TodoListItem.vue'
import TodoClock from '@/components/function/TodoClock.vue'
import TodoWeather from '@/components/function/TodoWeather.vue'
export default {
    name: 'todo-view',
    components: {
        IndexLayout,
        TodoInput,
        TodoList,
        TodoListItem,
        TodoClock,
        TodoWeather
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
<style lang="scss">
    .todo-header {
        margin: 30px 0;
        & > * {
            margin: 0;
        }
     }

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