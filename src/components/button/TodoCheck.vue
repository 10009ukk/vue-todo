<template lang="">
    <input
        type="checkbox"
        :checked="checked"
        @click="onToggle"
    />
</template>
<script>
export default {
    name: 'todo-check',
    props: {
        checked : Boolean,
    },
    methods: {
        onToggle($event) {
            this.$emit('toggle', $event.target.checked)
        }
    },
}
</script>
<style lang="">
    
</style>