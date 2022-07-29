<template lang="">
    <h3>{{ hour }} : {{ minutes.length === 1 ? `0${minutes}` : minutes }}</h3>
</template>
<script>
export default {
    name: 'todo-clock',
    data() {
        return {
            hour: '',
            minutes : '1'
        }
    },
    created() {
        this.getTime()
    },
    methods: {
        getTime() {
            const date = new Date();
            this.hour = date.getHours()
            this.minutes = date.getMinutes()

            setInterval(this.getTime, 1000);
        }
    },
}
</script>
<style lang="">
    
</style>

