<template lang="">
    <div class="layout">
        <todo-header></todo-header>
        <slot></slot>
    </div>
</template>
<script>
import TodoHeader from './TodoHeader.vue'

export default {
    name: 'index-layout',
    components: {
        TodoHeader
    }
}
</script>
<style lang="scss">
    .layout {
        margin: 125px 0;
    }
</style>