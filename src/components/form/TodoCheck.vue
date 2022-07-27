<template lang="">
    <input
        type="checkbox"
        @click="onToggle"

    />
</template>
<script>
export default {
    name: 'todo-check',
    methods: {
        onToggle($event) {
            this.$emit('toggle', $event.target.checked)
        }
    },
}
</script>
<style lang="">
    
</style>