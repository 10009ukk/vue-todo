<template lang="">
    <div @mouseover="onHover(true)" @mouseleave="onHover(false)">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'todo-hover',
    methods: {
        onHover(bl) {
            this.$emit('hover', bl)
        }
    },
}
</script>
<style lang="">
    
</style>