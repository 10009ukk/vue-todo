<template lang="">
    <header class="header">
        <todo-clock />     
        <todo-weather />
    </header>
</template>
<script>
import TodoClock from '@/components/function/TodoClock.vue'
import TodoWeather from '@/components/function/TodoWeather.vue'
export default {
    name: 'todo-header',
    components: {
        TodoWeather,
        TodoClock
    }
}
</script>
<style lang="scss">
    .header {
        margin: 30px 0;
        & > * {
            margin: 0;
        }
     }
</style>