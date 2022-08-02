<template lang="">
    <input
        type="checkbox"
        :checked="checked"

        @click="onClick"
    />
</template>
<script>
export default {
    name: 'todo-check-button',
    props: {
        checked : Boolean,
    },
    methods: {
        onClick($event) {
            this.$emit('toggle', $event.target.checked)
        }
    },
}
</script>
<style lang="">
    
</style>