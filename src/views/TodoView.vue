<template lang="">
    <index-layout>
        <div>
            <template v-if='isFocus'>
                <h1>What is main your focus for today?</h1>
                <todo-input 
                    add='updateFocus'
                    placeholder="hahaha..."
                />
            </template>
            <template v-else>
                <h5>TODAY</h5>
                <todo-list-item 
                    :item="item"
                    remove="removeFocus"
                    update="updateFocus"
                />    
            </template>
        </div>

        <div class="todo-lists">
            <div class="todo-type">
                <h5>{{ type }}</h5>
                <todo-button
                   path="fa-solid fa-rotate" 
                   @hit="this.$store.commit('updateType')"
                />
            </div>
          
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
import TodoButton from '@/components/button/TodoButton.vue'

import { mapGetters } from 'vuex'

export default {
    name: 'todo-view',
    components: {
        IndexLayout,
        TodoInput,
        TodoList,
        TodoListItem,
        TodoButton,
    },
    computed: {
        ...mapGetters({
            items: 'getTodos',
            item: 'getFocus',
            type: 'getType'
        }),

        isFocus() {
            return Object.keys(this.item).length === 0
        }
    },
}
</script>
<style lang="scss">

    .todo-lists {
        width: 360px;
        padding: 20px;
        margin: 30px auto;

        text-align: center;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        
        .todo-type {
            display: flex;
            align-items: center;

            h5 {
                text-transform: uppercase;
                margin: 10px 0;
            }
        }
        .todo-submit {
            margin-left: -60px;
        }
    }
    
</style>