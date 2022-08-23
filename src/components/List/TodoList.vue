<template lang="">
    <todo-list-item 
        v-for="(item, key) in items"
        :key="key"
        :item="item"
    />
</template>
<script>
import TodoListItem from '@/components/list/TodoListItem.vue'

export default {
    name: 'todo-list',
    components: {
        TodoListItem
    },
    props: {
        items: {
            type: Array
        }
    }
}
</script>
<style lang="">
    
</style>